var stepDefinitionsWrapper = function () {

  this.Given(/^I am visiting the homepage$/, function(callback) {
    browser.get('http://127.0.0.1:9001/#/')
      .then( callback );
  });

  this.When(/^I click that green button$/, function(callback) {
    element( global.By.className('btn-success') ).click()
      .then(callback);
  });

  this.Then(/^I should see "(.*)" as the page title$/, function(title, callback) {

    var pageTitle = browser.getTitle();

    if ("protractor-cucumber-example" === title) {
      callback();
    } else {
      callback.fail(new Error("Expected to be on page with title " + title + " but instead got: " + pageTitle));
    }
  });
};

module.exports = stepDefinitionsWrapper;
