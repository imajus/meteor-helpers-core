Package.describe({
  name: 'imajus:helpers-core',
  version: '0.1.0',
  summary: 'Utility for Blaze helpers.',
  git: 'https://github.com/imajus/meteor-helpers-core.git',
  documentation: 'README.md',
});

Package.onUse(function (api) {
  api.versionsFrom(['2.0', '3.0']);
  api.use('ecmascript');
  api.use(['templating@1.3.4||1.4.4', 'underscore'], 'client');
  api.mainModule('helpers-core.js', 'client');
});

Package.onTest(function (api) {
  api.use('ecmascript');
  api.use('tinytest');
  api.use(['templating', 'blaze', 'imajus:helpers-core'], 'client');
  api.mainModule('helpers-core-tests.js', 'client');
});
