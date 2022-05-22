const Page = require('./page');
const MainPage = require('./main.page');
const Header = require('./pageComponents/header.component');
const Footer = require('./pageComponents/footer.component');
const Search = require('./pageComponents/search.component');
const CartPage = require('./cart.page');
const BaseElements = require('../helpers/baseElements');
const SearchedPage = require('./searched.page');
const AuthPage = require('./auth.page');
const PreviewPage = require('./pageComponents/preview.component');

class PageFactory {
    constructor(page) {
        this.page = new Page(page);
        this.mainPage = new MainPage(page);
        this.header = new Header(page);
        this.footer = new Footer(page);
        this.search = new Search(page);
        this.cartpage = new CartPage(page);
        this.baseElements = new BaseElements(page);
        this.searchedpage = new SearchedPage(page);
        this.authpage = new AuthPage(page);
        this.previewpage = new PreviewPage(page);

    }
}

module.exports = PageFactory;

