import { Blaze } from 'meteor/blaze';
import { Template } from 'meteor/templating';

import './helper-core-tests.html';

Template.helpers({
  test: (...rest) => JSON.stringify(rest),
});

// Simple helper
Tinytest.add('majus:helpers-core - test', (test) => {
  test.equal(Blaze.toHTML(Template.test1), '[]');
  test.equal(Blaze.toHTML(Template.test2), '[1,2]');
  test.equal(Blaze.toHTML(Template.test3), '[1,2,{"c":3}]');
  test.equal(Blaze.toHTMLWithData(Template.test4, { o: { a: 1 } }), '[{"a":1}]');
  test.equal(Blaze.toHTMLWithData(Template.test5, { o: { a: 1 } }), '[{"a":1},{"b":2}]');
});