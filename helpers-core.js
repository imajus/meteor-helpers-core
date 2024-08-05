import { Template } from 'meteor/templating';
import { _ } from 'meteor/underscore';

Template.helpers = function extendedHelpers(helpers) {
  // Debug output
  if (Meteor.isDevelopment) {
    console.log(`Register helpers ${Object.keys(helpers).join(', ')}`);
  }
  // Register global templates
  _.each(helpers, (func, name) => {
    Template.registerHelper(name, (...rest) => {
      if (rest && rest.length) {
        // Remove empty hash object
        if (_.isEmpty(rest[rest.length - 1].hash)) {
          rest.pop();
        } else {
          // Replace hash object with hash value
          rest.push(rest.pop().hash);
        }
      }
      return func.apply(this, rest);
    });
  });
};
