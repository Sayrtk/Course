const Page = require('./page');

class CartPage extends Page {

    get submitOrderBtn() {
        return '//button[@aria-label="Оформить заказ"]';
    }

}

module.exports = CartPage; 