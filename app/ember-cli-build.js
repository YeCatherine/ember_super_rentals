const EmberApp = require('ember-cli/lib/broccoli/ember-app');
module.exports = function(defaults) {
  var app = new EmberApp(defaults, {
    'asset-cache': {
      include: [
        'assets/**/*',
        'api/**/*',
      ],
      version: '1',
      lenientErrors: false,
    },
  });
  return app.toTree();
};
