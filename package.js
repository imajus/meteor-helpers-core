Package.describe({
  name: 'imajus:helpers-core',
  version: '0.0.2',
  // Brief, one-line summary of the package.
  summary: 'Utility for Blaze helpers.',
  // URL to the Git repository containing the source code for this package.
  git: 'https://github.com/imajus/meteor-helpers-core.git',
  // By default, Meteor will default to using README.md for documentation.
  // To avoid submitting documentation, set this field to null.
  documentation: 'README.md'
});

Package.onUse(function(api) {
  api.versionsFrom('1.4.2');
  api.use('ecmascript@0.6.3');
  api.use(['templating@1.3.0', 'spacebars@1.0.13', 'underscore@1.0.10'], 'client');
  api.mainModule('helpers-core.js', 'client');
});

Package.onTest(function(api) {
  api.use('ecmascript@0.6.3');
  api.use('tinytest@1.0.12');
  api.use(['templating@1.3.0', 'blaze@2.3.0', 'imajus:helpers-core@0.0.1'], 'client');
  api.mainModule('helpers-core-tests.js', 'client');
});
