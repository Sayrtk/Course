const Page = require('./page');

class MainPage extends Page {

    get getStartedButton() {
        return $("//*[@class='button button--outline button--secondary button--lg' and @href='/docs/gettingstarted']");
    }
}

module.exports = new MainPage();
