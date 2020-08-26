const { client } = require('nightwatch-api');
const { When, Then } = require('cucumber');
const practicePageLocators = require('../helpers/locators/practicePageLocatorLibrary');

When(
  /^The user enters "([^"]*)" in the autosuggest input field$/,
  async (letters) => {
    await client.setValue(
      practicePageLocators.autosuggestInputField(),
      letters
    );
  }
);

Then(/^The user waits for the autosuggest results to be visible$/, async () => {
  await client.waitForElementVisible(
    practicePageLocators.autosuggestDropdown(),
    3000,
    'The autosuggest dropdown did not appear'
  );
});

When(
  /^The user clicks on the "([^"]*)" results in autosuggest$/,
  async (country) => {
    // .elements() returneaza o lista de elemente (array)
    await client.elements(
      'css selector',
      practicePageLocators.autosuggestResults(),
      (lista) => {
        console.log(lista.value); //afiseaza lista cu toate elementele sub forma unui array
        // .forEach() parcurge un array si returneaza fiecare element in parte
        lista.value.forEach((element, index) => {
          console.log(element.ELEMENT); // afiseaza ID-ul fiecarui element din lista in parte
          client.elementIdText(element.ELEMENT, (text) => {
            console.log(`${index} : ${text.value}`); // afiseaza, cu ajutorul functiei .elementIdText() textul gasit in fiecare element in parte
            if (text.value === country) {
              client.elementIdClick(element.ELEMENT);
            }
          });
        });
      }
    );
  }
);

When(/^"([^"]*)" appears in the autosuggest field$/, async (country) => {
  await client.expect
    .element(practicePageLocators.autosuggestInputField())
    .to.have.value.that.equals(country);
});
