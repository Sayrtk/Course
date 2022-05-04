const BaseElements = require('../../helpers/baseElements');
const SearchComponent = require('../pageobjects/pageComponents/search.component');
const Header = require('../pageobjects/pageComponents/header.component');
const MainPage = require('../pageobjects/main.page');
const DocsPage = require('../pageobjects/docs.page');
const Page = require('../pageobjects/page');
const page = new Page();


describe('hw20 wdio tests', function () {

    it('check presence of all header menu elemets', async () => {
        await page.navigate('https://webdriver.io/');
        await expect(Header.docsTab).toHaveText('Docs');
        await expect(Header.apiTab).toHaveText('API');
        await expect(Header.blogTab).toHaveText('Blog');
        await expect(Header.contributeTab).toHaveText('Contribute');
        await expect(Header.communityTab).toHaveText('Community');
    });

    it('check searching for page object pattern', async () => {
        await page.navigate('https://webdriver.io/');
        await BaseElements.click(SearchComponent.searchButton);
        await SearchComponent.searchInput.setValue('Page Object Pattern');
        await expect(await SearchComponent.searchResult[0]).toHaveTextContaining('Page Object');
    });

    it('check title of Getting Started page', async () => {
        await page.navigate('https://webdriver.io/');
        await MainPage.getStartedButton.click();
        await expect(browser).toHaveTitleContaining('Getting Started');
    });

    it('check that theme color changing button is clickable', async () => {
        await page.navigate('https://webdriver.io/');
        await BaseElements.click(Header.themeColorButton);
        await expect(Header.themeColorButton).isClickable;
    });

    it('tap on home button in breadcrumb redirects to the main page', async () => {
        await page.navigate('https://webdriver.io/docs/gettingstarted');
        await BaseElements.click(DocsPage.homeButtonInBreadcrumb);
        await expect.toHaveUrl('https://webdriver.io/');
    });

})



