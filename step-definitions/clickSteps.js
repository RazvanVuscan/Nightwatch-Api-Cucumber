const { client } = require('nightwatch-api');
const { When } = require('cucumber');
const practicePageLocators = require('../helpers/locators/practicePageLocatorLibrary');

// Pas pentru a da click pe un radio button cu ajutorul unui locator generic
When(/^The user clicks the "([^"]*)" radio button$/, async (buttonNumber) => {
  // am adaugat un parametru definibil de catre utilizator in cadrul testului
  // parametrul este preluat intre paranteze

  // am creat o functie de click
  // ne folosim de libraria de locatori pentru a crea un locator generic care accepta parametrul intial pasat
  await client.click(practicePageLocators.radioButtonLocator(buttonNumber));

  // facem o validare ca elementul este selectat, utilizandu-ne de acelasi element generic din libraria de locatori
  // definit prin intermediul parametrului initial
  await client.expect.element(
    practicePageLocators.radioButtonLocator(buttonNumber)
  ).to.be.selected;
});
