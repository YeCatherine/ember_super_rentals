import config from 'super-rentals/config/environment';

const EmberApp = require('ember-cli/lib/broccoli/ember-app');

module.exports = function(defaults) {
  let app = new EmberApp(defaults, {
    'ember_super_rentals': {
      // RegExp patterns specifying which URLs to cache.
      patterns: [
        `${config.rootURL}(.+)`,
        `${config.rootURL}assets/fonts/(.+)`,
        `${config.rootURL}assets/images/((?!avatars/).+)`
      ],

      // changing this version number will bust the cache
      version: '1'
    }
  });

  return app.toTree();
};
