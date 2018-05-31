const sails = require('sails');

// Before running any tests...
before(function(done) {

  // Increase the Mocha timeout so that Sails has enough time to lift, even if you have a bunch of assets.
  this.timeout(5000);

  console.log('lifting...');

  sails.lift({
    // Your sails app's configuration files will be loaded automatically,
    // but you can also specify any other special overrides here for testing purposes.

    // For example, we might want to skip the Grunt hook,
    // and disable all logs except errors and warnings:
    hooks: { grunt: false },
    log: { level: 'warn' },
    models: {
      connection: 'unitTestConnection',
      migrate: 'drop'
    },
    datastores: {
      unitTestConnection: {
        adapter: 'sails-disk',
        inMemoryOnly: true
      }
    }

  }, (err) => {
    if (err) { return done(err); }
    //Category.create( {  } );

    return done();
  });
});

// After all tests have finished...
after((done) => {
  // here you can clear fixtures, etc.
  // (e.g. you might want to destroy the records you created above)

  sails.lower(done);

});
