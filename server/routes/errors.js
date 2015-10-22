/*==============================
=            ERRORS            =
==============================*/
module.exports = function(app) {

    app.get('/404', function(req, res, next) {
    // trigger a 404 since no other middleware
    // will match /404 after this one, and we're not
    // responding here
    next();
  });

  app.get('/403', function(req, res, next) {
    // trigger a 403 error
    var err = new Error('This is a restricted area. FBI have been warned.');
    err.status = 403;
    next(err);
  });

  app.get('/500', function(req, res, next) {
    // trigger a generic (500) error
    next(new Error('We currently experimenting technical difficulties. Please come back after the storm'));
  });

  // Error handlers

  // Since this is the last non-error-handling
  // middleware use()d, we assume 404, as nothing else
  // responded.

  // $ curl http://localhost:3000/notfound
  // $ curl http://localhost:3000/notfound -H "Accept: application/json"
  // $ curl http://localhost:3000/notfound -H "Accept: text/plain"

  app.use(function(req, res, next) {
    res.status(404);

    // respond with html page
    if (req.accepts('html')) {
      res.render('404', {
        url: req.url
      });
      return;
    }

    // respond with json
    if (req.accepts('json')) {
      res.send({
        error: 'Not found'
      });
      return;
    }

    // default to plain-text. send()
    res.type('txt').send('Not found');
  });

  // error-handling middleware, take the same form
  // as regular middleware, however they require an
  // arity of 4, aka the signature (err, req, res, next).
  // when connect has an error, it will invoke ONLY error-handling
  // middleware.

  // If we were to next() here any remaining non-error-handling
  // middleware would then be executed, or if we next(err) to
  // continue passing the error, only error-handling middleware
  // would remain being executed, however here
  // we simply respond with an error page.

  // app.use(function(err, req, res, next) {
  //   // we may use properties of the error object
  //   // here and next(err) appropriately, or if
  //   // we possibly recovered from the error, simply next().
  //   res.status(err.status || 500);
  //   console.log(err);
  //   res.render('500', {
  //     error: err
  //   });
  // });


};


/*-----  End of ERRORS  ------*/
