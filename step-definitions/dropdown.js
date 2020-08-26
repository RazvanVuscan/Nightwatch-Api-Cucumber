const { client } = require('nightwatch-api');
const { When } = require('cucumber');
const practicePageLocators = require('../helpers/locators/practicePageLocatorLibrary');

When(
  /^The user clicks on the option "([^"]*)" in the dropdown$/,
  async (option) => {
    await client.click(practicePageLocators.dropdown());

    let elementList = [];

    // prima oara cream o lista de elemente
    await client.elements(
      'css selector',
      practicePageLocators.dropdownValues(),
      (list) => {
        // luam fiecare element in parte si il extragem si ne va returna o cheie/valuare
        list.value.forEach((val) => {
          // populam array-ul cu valoarea fiecarui element
          elementList.push(val.ELEMENT);
        });
      }
    );

    // declaram o variabila initial falsa. Daca se indeplineste o conditie, variabila devina adevarata.
    let found = false;

    // luam iarasi fiecare element in parte si ii extragem textul.
    for (let i = 0; i < elementList.length; i++) {
      await client.elementIdText(elementList[i], (text) => {
        // daca textul are valoarea necesara, da click pe el si schimba variabila boolean pe true.
        if (text.value === option) {
          client.elementIdClick(elementList[i]);
          found = true;
        }
      });
      // daca variabila boolean este true, rupe bucla. Daca nu, reia bucla.
      if (found == true) {
        break;
      }
    }
  }
);
