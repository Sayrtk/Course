class ItemPreview {

    constructor(page) {
        this.page = page;
    }

    get size() {
        return '.O7KAVeyES2Dm7FutyoPSf';
    }

    get addToCartBtn() {
        return '//span[contains(text(),"Добавить в корзину")]';
    }

    get itemAddedToKorzinaText() {
        return '//div[@class="d-modal__header"]';
    }

    get goToKorzinaBtn() {
        return '//a[contains(text(),"Перейти в корзину")]';
    }

}

module.exports = ItemPreview; 