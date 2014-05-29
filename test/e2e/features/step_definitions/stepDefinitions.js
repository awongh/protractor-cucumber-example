var stepDefinitionsWrapper = function () {

  this.Given(/^I am visiting the homepage$/, function(callback) {
    browser.get('http://127.0.0.1:9000/#/')
      .then( callback );
  });

  this.When(/^I click that green button$/, function(callback) {
    element( global.By.className('btn-success') ).click()
      .then(callback);
  });

  this.Then(/^I should see "(.*)" as the page title$/, function(title, callback) {

    var pageTitle = browser.getTitle();

    if (pageTitle === title) {
      callback();
    } else {
      callback.fail(new Error("Expected to be on page with title " + title));
    }
  });
};

module.exports = stepDefinitionsWrapper;
