const { Builder, By, until } = require('selenium-webdriver');
const { expect } = require('chai');

const driver = new Builder().forBrowser('chrome').build();

// driver.manage().window().maximize();


describe(`Howetask-17 tests`, function () {

    // beforeEach(async () => {
    //     driver = new Builder().forBrowser('chrome').build();
    // });

    // afterEach(async () => {
    //     await driver.close();
    // })

    it('check ChromeDriver title', async () => {
        await driver.get('https://chromedriver.chromium.org/home');
        const mainTitle = driver.findElement(By.xpath('//span[contains(@class, "Rn3Z1b")]')).getText();
        expect(await mainTitle).to.equal('ChromeDriver');
    })

    it(`check Chrome Extensions title`, async () => {
        await driver.get('https://chromedriver.chromium.org/extensions');
        const newMainTitle = driver.findElement(By.xpath('//span[contains(@class, "Rn3Z1b")]')).getText();
        expect(await newMainTitle).to.equal('Chrome Extensions');
    })

    it(`check search`, async () => {
        await driver.get('https://chromedriver.chromium.org/home');
        const searchButton = await driver.findElement(By.xpath('//div[@class="RBEWZc"]'));
        await searchButton.click();
        await driver.sleep(2000);

        const searchField = await driver.findElement(By.xpath('//input[@class="whsOnd zHQkBf"]'));
        await driver.wait(until.elementIsVisible(searchField), 5000);
        await searchField.sendKeys('driver');

        const submitSearchButton = await driver.findElement(By.xpath('//div[contains(@class, "U26fgb mUbCce fKz7Od i3PoXe")]/span/span'));
        await submitSearchButton.click();
        await driver.sleep(2000);

        const firstResult = await driver.findElement(By.xpath('//div[contains(@class, "gtazFe")][1]/div/div')).getText();
        expect(await firstResult).to.contain('driver');
    })
})


