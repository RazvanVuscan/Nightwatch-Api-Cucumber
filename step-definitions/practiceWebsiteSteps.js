const { client } = require('nightwatch-api');
const { Given, When, Then } = require('cucumber');
const testVariables = require('../helpers/testVariables');
const practicePageLocators = require('../helpers/locators/practicePageLocatorLibrary');

Given(/^The user opens the test automation practice web page$/, async () => {
  await client.url(testVariables.url);
});

Then(
  /^The user checks that the page title is "([^"]*)"$/,
  async (requiredTitle) => {
    await client.assert.title(requiredTitle);
  }
);

Then(/^The name input field is visible$/, async () => {
  await client.assert.visible(practicePageLocators.nameInput());
});

When(/^I type "([^"]*)" in the name input field$/, async (nameString) => {
  await client.setValue(practicePageLocators.nameInput(), nameString);
});

When(
  /^I check that the "([^"]*)" text is shown in the name input field$/,
  async (requiredValue) => {
    await client.expect
      .element(practicePageLocators.nameInput())

      .value.to.be.equal(requiredValue);
  }
);

Then(
  /^The user checks if input field is visible and clicks on show button$/,
  async () => {
    await client.isVisible(practicePageLocators.inputField(), (response) => {
      console.log(response.value);
      if (response.value === false) {
        client.click(practicePageLocators.showButton());
      }
    });
  }
);
