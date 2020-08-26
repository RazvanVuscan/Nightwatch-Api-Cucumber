const { client } = require('nightwatch-api');
const { When } = require('cucumber');
const practicePageLocators = require('../helpers/locators/practicePageLocatorLibrary');
const { assert } = require('chai');

When(
  /^The user gets the text from row "([^"]*)" and column "([^"]*)" from the table and checks it is "([^"]*)"$/,
  async (row, column, pagetext) => {
    await client.getText(
      practicePageLocators.tabelDataValue(row, column),
      (text) => {
        console.log('------>', text.value);
        assert.equal(text.value, pagetext);
      }
    );
  }
);
