const { Builder, By, until } = require('selenium-webdriver');
const BasePage = require('../basePage');

class SearchComponent extends BasePage {
    get searchButton() {
        return driver.findElement(By.xpath('//div[@class="RBEWZc"]'));
    }

    get searchField() {
        return driver.findElement(By.xpath('//input[@class="whsOnd zHQkBf"]'));
    }

    get startSearch() {
        return driver.findElement(By.xpath('//div[contains(@class, "U26fgb mUbCce fKz7Od i3PoXe")]/span/span'));
    }

    get searchResults() {
        return driver.findElements(By.xpath('//div[@class="yDWqEe"]'));
    }
}

module.exports = SearchComponent

