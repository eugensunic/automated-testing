function displayUsedFrameworks() {
  if (
    !!window.React ||
    !!document.querySelector("[data-reactroot], [data-reactid]")
  ) {
    console.log("React.js");
  }

  if (
    !!window.angular ||
    !!document.querySelector(
      ".ng-binding, [ng-app], [data-ng-app], [ng-controller], [data-ng-controller], [ng-repeat], [data-ng-repeat]"
    ) ||
    !!document.querySelector(
      'script[src*="angular.js"], script[src*="angular.min.js"]'
    )
  ) {
    console.log("Angular.js");
  }
  if (
    !!window.angular ||
    !!document.querySelector(
      ".ng-binding, [ng-app], [data-ng-app], [ng-controller], [data-ng-controller], [ng-repeat], [data-ng-repeat]"
    ) ||
    !!document.querySelector(
      'script[src*="angular.js"], script[src*="angular.min.js"]'
    )
  ) {
    console.log("Angular.js");
  }

  if (
    window.hasOwnProperty("ng") &&
    window.ng.hasOwnProperty("coreTokens") &&
    window.ng.coreTokens.hasOwnProperty("NgZone")
  ) {
    console.log("Angular");
  }

  if (!!window.Backbone) {
    console.log("Backbone.js");
  }
  if (!!window.Ember) {
    console.log("Ember.js");
  }
  if (!!window.Vue) {
    console.log("Vue.js");
  }
  if (!!window.Meteor) {
    console.log("Meteor.js");
  }
  if (!!window.Zepto) {
    console.log("Zepto.js");
  }
  if (!!window.jQuery) {
    console.log("jQuery.js");
  }
}


// 23.) check which frameworks are used on the website
// 18.) check if website uses JQuery