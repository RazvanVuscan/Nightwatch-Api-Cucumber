module.exports = {
  test_settings: {
    default: {
      screenshots: {
        enabled: true,
        on_failure: true,
        path: './tests_output/screenshots/cucumberScreenshots',
      },
      webdriver: {
        start_process: true,
        server_path: require('selenium-server').path,
        port: 4445,
        log_path: './tests_output/cucumberLogs',
        cli_args: ['--port=4445'],
      },
      desiredCapabilities: {
        browserName: 'chrome',
        chromeOptions: {
          args: [
            'start-maximized',
            'disable-web-security',
            'safebrowsing-disable-download-protection',
          ],
        },
        loggingPrefs: { driver: 'OFF', server: 'OFF', browser: 'OFF' },
      },
    },
    chrome: {
      webdriver: {
        server_path: require('chromedriver').path,
      },
      desiredCapabilities: {
        browserName: 'chrome',
        javascriptEnabled: true,
        acceptSslCerts: true,
        chromeOptions: {
          args: ['disable-gpu'],
        },
      },
    },
  },
};
