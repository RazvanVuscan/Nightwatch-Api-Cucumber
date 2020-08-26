const { client } = require('nightwatch-api');
const { When, Then } = require('cucumber');
const practicePageLocators = require('../helpers/locators/practicePageLocatorLibrary');

When(/^The user hover mouse on button Mouse Hover example$/, async () => {
  await client.fullscreenWindow();
  await client.moveToElement(practicePageLocators.mouseHover(), 0, 0);
  client.pause(3000);
});

Then(/^The user is waiting for the menu to appear$/, async () => {
  await client.waitForElementVisible(practicePageLocators.mouseHover(), 3000);
});

Then(
  /^The user clicks "([^"]*)" from menu Mouse Hover example$/,
  async (option) => {
    let elementList = [];

    await client.elements(
      'css selector',
      practicePageLocators.mouseHoverContent(),
      (list) => {
        list.value.forEach((val) => {
          elementList.push(val.ELEMENT);
        });
      }
    );
    let found = false;

    for (let i = 0; i < elementList.length; i++) {
      await client.elementIdText(elementList[i], (text) => {
        if (text.value === option) {
          client.elementIdClick(elementList[i]);
          found = true;
        }
      });

      if (found == true) {
        break;
      }
    }
  }
);

Then(/^The user waits for page reloaded$/, async () => {
  await client.waitForElementVisible(
    practicePageLocators.headerTitlePage(),
    3000,
    'The title page did not appear'
  );
});
