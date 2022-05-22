const { test, expect } = require('@playwright/test');
const PageFactory = require('../pageobjects/pageFactory');

test.beforeEach(async ({ page }) => {
  const I = new PageFactory(page);
  await I.page.navigate('https://www.lamoda.by/women-home/');
});

test.describe('lamoda tests', () => {

  test('search for new balance items', async ({ page }) => {
    const I = new PageFactory(page);
    await I.baseElements.click(I.search.searchInput);
    await I.baseElements.fill(I.search.searchInput, 'new balance');
    await I.baseElements.click(I.search.submitSearchBtn);
    await expect(await page.locator(I.searchedpage.searchedBrandTitle)).toContainText('New Balance');
  })

  test('change current location of the user', async ({ page }) => {
    const I = new PageFactory(page);
    await I.baseElements.click(I.footer.changeCountryBtn);
    await I.baseElements.click(I.footer.ukrainValueInListOfCountries);
    await expect(await page.locator(I.footer.userCurrentLocation)).toContainText('Украина');
  })

  test('check ability to recover the user password', async ({ page }) => {
    const I = new PageFactory(page);
    await I.baseElements.click(I.mainPage.signInBtn);
    await I.baseElements.click(I.authpage.forgotPasswordBtn);
    await I.baseElements.fill(I.authpage.emailFieldForRecovery, 'test@gmail.com');
    await expect(await page.locator(I.authpage.textAfterRecoveryConfirmation)).toContainText('Восстановление пароля');
  })

  test('check ability to subscribe on news', async ({ page }) => {
    const I = new PageFactory(page);
    await I.baseElements.fill(I.mainPage.emailInput, 'test@gmail.com');
    await I.baseElements.check(I.mainPage.policyAgreementBtn);
    await I.baseElements.click(I.mainPage.forHerBtn);
    await expect(await page.locator(I.mainPage.SubsriptionSuccessMessage)).toContainText(['Спасибо!', 'Письмо с промокодом уже на почте']);
  })

  test('check ability to sign up', async ({ page }) => {
    const I = new PageFactory(page);
    await I.baseElements.click(I.mainPage.signInBtn);
    await I.baseElements.click(I.authpage.createAccountBtn);
    await I.baseElements.fill(I.authpage.emailForSignUp, 'ritakareb+1@gmail.com');
    await I.baseElements.check(I.authpage.newsCheckbox);
    await I.baseElements.fill(I.authpage.password, '1993433Ab');
    await I.baseElements.fill(I.authpage.confirmPassword, '1993433Ab');
    await I.baseElements.fill(I.authpage.userName, 'Margaret');
    await I.baseElements.check(I.authpage.privacyPolicy);
    await I.baseElements.click(I.authpage.sumtitRegBtn);
    await expect(await page.locator(I.mainPage.profileBtn)).toBeVisible(); // здесь тест падает, пыталась разными способами пофиксить или сделать проверку - не получилось

  })


})

