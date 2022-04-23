class BaseElements {

    async click(element) {
        await element.waitForDisplayed({ timeout: 3000 });
        await element.click();
    }

    async setValue(element, text) {
        await element.waitForDisplayed({ timeout: 3000 });
        await element.setValue();

    }
}

module.exports = new BaseElements();
