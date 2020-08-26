const { client } = require('nightwatch-api');
const { When } = require('cucumber');
const practicePageLocators = require('../helpers/locators/practicePageLocatorLibrary');

When(/^The user switches to the second window$/, async () => {
  await client.click(practicePageLocators.switchWindow());
  // windowHandles returneaza numarul de ferestre deschise
  await client.windowHandles((result) => {
    client.pause(3000);
    // switchWindow schimba fereastra cu fereastra indicata
    client.switchWindow(result.value[1]);
    client.assert.title(
      'QA Click Academy | Selenium,Jmeter,SoapUI,Appium,Database testing,QA Training Academy'
    );
    client.switchWindow(result.value[0]);
    client.assert.title('Practice Page');
    client.switchWindow(result.value[1]);
    // maximizeWindow face fereastra mare
    client.maximizeWindow();
    client.pause(3000);
    // inchide fereasta - intotdeauna sa dati inapoi switch pe prima fereastra
    client.closeWindow();
    client.switchWindow(result.value[0]);
    client.assert.title('Practice Page');
    client.assert.not.title(
      'QA Click Academy | Selenium,Jmeter,SoapUI,Appium,Database testing,QA Training Academy'
    );
  });
});

When(/^The user switches to the second tab$/, async () => {
  await client.click(practicePageLocators.switchTab());
  // windowHandles returneaza numarul de tab-uri deschise
  await client.windowHandles((result) => {
    client.pause(3000);
    // switchWindow schimba tab-ul cu tab-ul indicata
    client.switchWindow(result.value[1]);
    client.assert.title('Rahul Shetty Academy');
    client.switchWindow(result.value[0]);
    client.assert.title('Practice Page');
    client.switchWindow(result.value[1]);
    // maximizeWindow face tab-ul mare
    client.maximizeWindow();
    client.pause(3000);
    // inchide tab-ul - intotdeauna sa dati inapoi switch pe primul tab
    client.closeWindow();
    client.switchWindow(result.value[0]);
    client.assert.title('Practice Page');
    client.assert.not.title('Rahul Shetty Academy');
  });
});

// not working, bug in Nightwatch
When(/^The user switches to the iFrame$/, async () => {
  await client.pause(10000);
  await client.frame(0);
  await client.assert.title('Rahul Shetty Academy');
});

When(/^The user switches back to the parent frame$/, async () => {
  await client.frameParent(() => {
    client.assert.title('Practice Page');
  });
});
