const { client } = require('nightwatch-api');
const { When } = require('cucumber');
const practicePageLocators = require('../helpers/locators/practicePageLocatorLibrary');
const { assert } = require('chai');

When(/^The user accepts the alert message$/, async () => {
  // pasul 1: dam click pe elementul care declanseaza alerta
  await client.click(practicePageLocators.alertButton());
  // pasul 2: luam textul de pe alerta si il verificam folosindu-ne de libraria Chai si functia assert.equal
  await client.getAlertText((text) => {
    console.log(text.value);
    assert.equal(
      text.value,
      'Hello , share this practice page and share your knowledge',
      'Message not the same'
    );
  });
  // pasul 3: dam click pe OK in alerta
  await client.acceptAlert();
});

When(/^The user dismisses the alert message$/, async () => {
  // pasul 1: dam click pe elementul care declanseaza alerta de tip confirmation
  await client.click(practicePageLocators.confirmButton());
  // pasul 2: dam click pe Cancel in alerta de tip confirmation
  await client.dismissAlert();
});
