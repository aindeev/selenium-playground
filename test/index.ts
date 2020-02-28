const {Builder, By, Key, until} = require('selenium-webdriver');

describe('Selenium tests', () => {
  let driver
  before('create driver', async () => {
    driver = await new Builder().forBrowser('chrome').build();
  })
  describe('Google tests', () => {
    it('search for webdriver', async function () {
      this.timeout(5000)
      await driver.get('http://www.google.com/ncr');
      await driver.findElement(By.name('q')).sendKeys('webdriver', Key.RETURN);
      await driver.wait(until.titleIs('webdriver - Google Search'), 1000);
    })
    it('search for something else', async function () {
      this.timeout(5000)
      await driver.get('http://www.google.com/ncr');
      await driver.findElement(By.name('q')).sendKeys('something else', Key.RETURN);
      await driver.wait(until.titleIs('something else - Google Search'), 1000);
    })
  })
  after('Tear down', async function () {
    await driver.quit();
  });
})

