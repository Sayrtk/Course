const { Builder, By, until } = require('selenium-webdriver');
const { expect } = require('chai');
const MainPage = require('../pageObject/mainPage');
const BaseElements = require('../helpers/baseElements');
const SearchComponent = require('../pageObject/pageComponents/searchComponent');
const BasePage = require('../pageObject/basePage');

const mainPage = new MainPage();
const baseElements = new BaseElements();
const searchComponent = new SearchComponent();

describe('Chrome driver tests for hw18', () => {

    after(async () => {
        await BasePage.close();
    });

    it('check ChromeDriver title', async () => {
        await BasePage.navigate('https://chromedriver.chromium.org/');
        expect(await BasePage.getTitle()).to.contain('ChromeDriver');
    })

    it('check Chrome Extensions title', async () => {
        await BasePage.navigate('https://chromedriver.chromium.org/extensions');
        expect(await BasePage.getTitle()).to.contain('Chrome Extensions');
    })

    it(`check search`, async () => {
        await BasePage.navigate('https://chromedriver.chromium.org/home');
        await baseElements.click(searchComponent.searchButton, 2000);
        await baseElements.sendKeys(searchComponent.searchField, 'driver');
        await baseElements.click(searchComponent.startSearch);
        await driver.sleep(2000);

        const searchResults = await searchComponent.searchResults;
        expect(await searchResults[0].getText()).to.contain("driver");

    })

})

