Package.describe({
  name: 'majus:helpers-core',
  version: '0.0.1',
  // Brief, one-line summary of the package.
  summary: 'Utility for Blaze helpers.',
  // URL to the Git repository containing the source code for this package.
  git: 'https://github.com/imajus/meteor-helpers-core',
  // By default, Meteor will default to using README.md for documentation.
  // To avoid submitting documentation, set this field to null.
  documentation: 'README.md'
});

Package.onUse(function(api) {
  api.versionsFrom('1.4.2');
  api.use('ecmascript');
  api.use(['templating', 'spacebars', 'underscore'], 'client');
  api.mainModule('helpers-core.js', 'client');
});

Package.onTest(function(api) {
  api.use('ecmascript');
  api.use('tinytest');
  api.use(['templating', 'blaze', 'majus:helpers-core'], 'client');
  api.mainModule('helpers-core-tests.js', 'client');
});
