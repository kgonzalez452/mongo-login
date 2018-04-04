//Allows for my routes to work. passes in the app and passport variables to be able to use in the other files.

module.exports = function (app, passport) {
    // INITIALIZE MY AUTHENTICATION ROUTES
    require('./authentication')(app, passport);
  
    // INITIALIZE MY VIEWS ROUTES
    require('./views')(app);
  }