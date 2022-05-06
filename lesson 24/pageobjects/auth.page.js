const Page = require('./page');

class AuthPage extends Page {
    constructor(page) {
        super(page);
    }

    get authEmailField() {
        return '//a[contains(text(),"Войти")]';
    }

    get passwordField() {
        return '//input[@placeholder="Введите пароль"]';
    }

    get signInBtn() {
        return '//button[@aria-label="Войти"]';
    }

    get forgotPasswordBtn() {
        return '//a[contains(text(),"Забыли пароль?")]';
    }

    get emailFieldForRecovery() {
        return 'div[class="_8kAcc8K6NmCLDybQk8Sv8"] input[placeholder="Введите свой email"]'
    }

    get submitRecoveryBtn() {
        return '//button[contains(text(),"Отправить")]';
    }

    get textAfterRecoveryConfirmation() {
        return '//span[contains(@class,"xANrT2wwsC2dCW2s0sSyg")]';
    }

    get createAccountBtn() {
        return '//a[contains(text(),"Создать аккаунт")]';
    }

    get emailForSignUp() {
        return 'div[class="zgC70ih0Ko8GDOgB2HztV"] input[placeholder="Введите свой email"]';
    }

    get newsCheckbox() {
        return '//div[contains(@title,"Подписаться на новости и скидки")]//div[contains(@class,"x-checkbox__box")]';
    }

    get password() {
        return '//input[contains(@placeholder,"Придумайте пароль")]';
    }

    get confirmPassword() {
        return '//input[@placeholder="Повторите пароль"]';
    }

    get userName() {
        return '//input[@placeholder="Введите свое имя"]';
    }

    get privacyPolicy() {
        return '//form[@class="_3dr8g_1eJXN-ElQNuG-g2a"]//div[@name="policyAgreement"]//div[@class="x-checkbox__box"]';
    }

    get sumtitRegBtn() {
        return '//button[contains(text(),"Зарегистрироваться")]';
    }

    get textAfterSignUp() {
        return '//div[@class="_2iLgRnNCb_TzR34bnEcNeD"]//span[1]';
    }

    get buttonAfterSignUp() {
        return '//button[contains(text(),"Супер!")]';
    }



}

module.exports = AuthPage; 