const { setDefaultTimeout, BeforeAll, After, AfterAll } = require('cucumber');
const reporter = require('cucumber-html-reporter');
const fs = require('fs');
const {
  createSession,
  closeSession,
  startWebDriver,
  stopWebDriver,
  getNewScreenshots,
} = require('nightwatch-api');

setDefaultTimeout(60000);

BeforeAll(async () => {
  await startWebDriver({
    configFile: './conf/nightwatch.conf.js',
    env: 'chrome',
  });
  await createSession();
});

After(function () {
  getNewScreenshots().forEach((file) =>
    this.attach(fs.readFileSync(file), 'image/png')
  );
});

AfterAll(async () => {
  await closeSession();
  await stopWebDriver();
  setTimeout(() => {
    reporter.generate({
      theme: 'bootstrap',
      jsonFile: 'report/cucumber_report.json',
      output: 'report/cucumber_report.html',
      reportSuiteAsScenarios: true,
      launchReport: true,
      metadata: {
        'App Version': '0.3.2',
        'Test Environment': 'POC',
      },
    });
  }, 1000);
});
