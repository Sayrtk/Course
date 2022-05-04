class Footer {
    get footer() {
        return $('.footer');
    }

    get Help() {
        return $('//a[contains(text(),"Help")]');
    }
}

module.exports = new Footer();
