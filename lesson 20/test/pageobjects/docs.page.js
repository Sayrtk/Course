const Page = require('./page');

class DocsPage extends Page {

    get guides() {
        return $('//*[contains(text(), "Guides")]');
    }

    get pageObjectPattern() {
        return $('//*[contains(text(), "Page Object Pattern")]');
    }

    get reporter() {
        return $('//*[@class="menu__link menu__link--sublist" and contains(text(), "Reporter")]')
    }

    get allReporters() {
        return $$('//a[@tabindex="0" and contains(text(), "Reporter")]');
    }

    get nextPageButton() {
        return $('//div[@class="pagination-nav__item pagination-nav__item--next"]//a[@class="pagination-nav__link"]');
    }

    async open() {
        await super.open('docs/gettingstarted');
    }

    get homeButtonInBreadcrumb() {
        return $('[class="breadcrumbs__item"] a[class="breadcrumbs__link breadcrumbsItemLink_e5ie"]');
    }
}

module.exports = new DocsPage(); 
