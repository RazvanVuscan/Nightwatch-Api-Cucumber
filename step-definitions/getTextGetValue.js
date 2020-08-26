const { client } = require('nightwatch-api');
const { When } = require('cucumber');
const practicePageLocators = require('../helpers/locators/practicePageLocatorLibrary');
const { assert } = require('chai');

When(/^The user gets the text from the table and checks it$/, async () => {
  // pasul 1: iau textul elementului de pe pagina.
  await client.getText(practicePageLocators.tableData(), (text) => {
    console.log('----->', text.value);
    // pasul 2: verific ca textul este cel asteptat.
    assert.equal(
      text.value,
      'Selenium Webdriver with Java Basics + Advanced + Interview Guide',
      'Text does not match'
    );
  });
});

When(
  /^The user gets the value from the Hide button and checks it$/,
  async () => {
    // pasul 1: iau valoarea textului de pe elementul de tip buton.
    await client.getValue(
      practicePageLocators.hideButton(),
      (buttonTextValue) => {
        console.log('----->', buttonTextValue.value);
        // pasul 2: verific ca textul de pe buton este cel asteptat.
        assert.equal(
          buttonTextValue.value,
          'Hide',
          'Button text does not match'
        );
      }
    );
  }
);
