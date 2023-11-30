import { test, expect } from "@playwright/test";
import { PageObjectManager } from "../pageObject/pageObjectManager";
const testData = JSON.parse(
  JSON.stringify(require("../testData/testData.json")),
);

test("ExistingUserRegistering", async ({ page }) => {
  const pageObjectManager = new PageObjectManager(page);
  const registerPage = await pageObjectManager.getRegisterPage();

  await registerPage.goToPage(testData.URL);
  await registerPage.clickRegisterLink();
  await expect(page).toHaveURL(testData.RegisterPageURL);
  await registerPage.fillTheRequired(
    testData.FirstName,
    testData.LastName,
    testData.Email,
    testData.PhoneNumber,
    testData.DropDown,
    testData.Password,
    testData.ConfirmPassword,
  );
  await registerPage.selectCheckBox();
  await registerPage.clickRegisterButton();
  await registerPage.assertionForExistingUserRegistering(
    testData.ExistingUserRegistrationMessage,
  );
});

test.skip("registerNewUser", async ({ page }) => {
  const successPOPUP = page
    .locator(".toast-bottom-right.toast-container")
    .textContent();

  const pageObjectManager = new PageObjectManager(page);
  const registerPage = await pageObjectManager.getRegisterPage();

  await registerPage.goToPage(testData.URL);
  await registerPage.clickRegisterLink();
  await expect(page).toHaveURL(testData.RegisterPageURL);
  await registerPage.fillTheRequired(
    testData.FirstName,
    testData.LastName,
    testData.Email,
    testData.PhoneNumber,
    testData.DropDown,
    testData.Password,
    testData.ConfirmPassword,
  );
  await registerPage.selectCheckBox();
  await registerPage.clickRegisterButton();
  console.log(await successPOPUP);
  await expect(
    page.locator(".toast-bottom-right.toast-container"),
  ).toBeVisible();
  expect((await successPOPUP) === "Registered Successfully");
  await expect(page.locator(".headcolor")).toBeVisible();
  await expect(page.getByRole("button", { name: "Login" })).toBeVisible();
  await registerPage.clickLoginButton();
  await expect(page).toHaveURL(
    "https://rahulshettyacademy.com/client/auth/login",
  );
});

test("loginUser", async ({ page }) => {
  const pageObjectManager = new PageObjectManager(page);
  const loginPage = await pageObjectManager.getLoginPage();

  await loginPage.goTo(testData.URL);
  await loginPage.enterLoginCredentials(testData.Email, testData.Password);
  await loginPage.clickLoginButton();
  await loginPage.assertionForLoginUserDashboardPageURL(
    testData.DashboardPageURL,
  );
  await loginPage.assertionForLoginUserValidPopUPMessage(
    testData.ValidPopUPMessage,
  );
});

test("loginUserWithIncorrectDetails", async ({ page }) => {
  const pageObjectManager = new PageObjectManager(page);
  const loginPage = await pageObjectManager.getLoginPage();

  await loginPage.goTo(testData.URL);
  await loginPage.enterLoginCredentials(
    testData.InValidEmail,
    testData.Password,
  );
  await loginPage.clickLoginButton();
  await loginPage.assertionForLoginUserWithIncorrectDetails(
    testData.InValidPopUPMessage,
  );
});

test("resetPassword", async ({ page }) => {
  const pageObjectManager = new PageObjectManager(page);
  const loginPage = await pageObjectManager.getLoginPage();

  await loginPage.goTo(testData.URL);
  await loginPage.clickForgotPassword();
  await loginPage.assertionForLoginUserForgotPasswordPageURL(
    testData.ForgotPasswordURL,
  );
  await loginPage.assertionForLoginUserForgotPasswordHeading(
    testData.ForgotPasswordHeading,
  );
  await loginPage.clickForgotPasswordSaveNewPassword();
  await loginPage.assertionForLoginUserWithEmptyFieldsForgotPasswordPage();
  await loginPage.fillForgotPasswordPageDetails(
    testData.ForgotPasswordPageEmail,
    testData.ForgotPasswordPagePassword,
    testData.ForgotPasswordPageConfirmPassword,
  );
  await loginPage.clickForgotPasswordSaveNewPassword();
  await loginPage.assertionForSuccessfulResetPassword(
    testData.SucessfulPasswordReset,
  );
});

test("loginRegisterButtonValidation", async ({ page }) => {
  const pageObjectManager = new PageObjectManager(page);
  const loginPage = await pageObjectManager.getLoginPage();

  await loginPage.goTo(testData.URL);
  await loginPage.clickForgotPassword();
  await loginPage.assertionForLogin_RegisterButtonValidation();
  await loginPage.clickForgotPasswordLogin();
  await loginPage.assertionForLoginPageURL(testData.LoginPageURL);
  await loginPage.clickForgotPassword();
  await loginPage.clickForgotPasswordRegister();
  await loginPage.assertionForRegisterPageURL(testData.RegisterPageURL);
});

test("SearchProductsInDashboard", async ({ page }) => {
  const pageObjectManager = new PageObjectManager(page);
  const loginPage = await pageObjectManager.getLoginPage();
  const dashboardPage = await pageObjectManager.getDashboardPage();

  await loginPage.goTo(testData.URL);
  await loginPage.enterLoginCredentials(testData.Email, testData.Password);
  await loginPage.clickLoginButton();
  await dashboardPage.searchProductsInDashboardPage(testData.ProductName);
  await dashboardPage.pressEnterBtn();
  await dashboardPage.waitForPageToLoad();
  await dashboardPage.assertionForSearchProductsInDashboard(
    testData.ProductName,
  );
});

test("filteringProduct", async ({ page }) => {
  const pageObjectManager = new PageObjectManager(page);
  const loginPage = await pageObjectManager.getLoginPage();
  const dashboardPage = await pageObjectManager.getDashboardPage();

  await loginPage.goTo(testData.URL);
  await loginPage.enterLoginCredentials(testData.Email, testData.Password);
  await loginPage.clickLoginButton();
  await dashboardPage.assertionForCategoriesAvailable();
  await dashboardPage.clickFashion();
});

test("AddingProductToCart", async ({ page }) => {
  const pageObjectManager = new PageObjectManager(page);
  const loginPage = await pageObjectManager.getLoginPage();
  const dashboardPage = await pageObjectManager.getDashboardPage();
  const cartPage = await pageObjectManager.getCartPage();

  await loginPage.goTo(testData.URL);
  await loginPage.enterLoginCredentials(testData.Email, testData.Password);
  await loginPage.clickLoginButton();
  await dashboardPage.searchProductsInDashboardPage(testData.ProductName);
  await dashboardPage.pressEnterBtn();
  await cartPage.clickAddToCartButton();
  await cartPage.assertionForAddingProductToCartCartPageToast(
    testData.CartPageToast,
  );
  await cartPage.clickCartButton();
  await cartPage.assertionForAddingProductToCartCartPageURL(
    testData.CartPageURL,
  );
  await cartPage.assertionForAddingProductToCart();
});

test("CheckoutTheProduct", async ({ page }) => {
  const pageObjectManager = new PageObjectManager(page);
  const loginPage = await pageObjectManager.getLoginPage();
  const dashboardPage = await pageObjectManager.getDashboardPage();
  const cartPage = await pageObjectManager.getCartPage();
  const checkoutPage = await pageObjectManager.getCheckoutPage();

  await loginPage.goTo(testData.URL);
  await loginPage.enterLoginCredentials(testData.Email, testData.Password);
  await loginPage.clickLoginButton();
  await dashboardPage.searchProductsInDashboardPage(testData.ProductName);
  await dashboardPage.pressEnterBtn();
  await cartPage.clickAddToCartButton();
  await cartPage.clickCartButton();
  await checkoutPage.clickBuyNowButton();
  await checkoutPage.fillInTheRequiredFields(
    testData.CreditCard,
    testData.ExpiryDay,
    testData.ExpiryMonth,
    testData.CVV,
    testData.NameOnCard,
    testData.ApplyCoupon,
  );
  await checkoutPage.clickApplyCouponButton();
  await checkoutPage.assertionForCheckingoutTheProductCouponSuccess(
    testData.CouponSuccess,
  );
  await checkoutPage.selectCountry(testData.Country);
  await checkoutPage.clickPlaceOrderButton();
  await checkoutPage.assertionForCheckingoutTheProductSuccesfullOrderPlacement(
    testData.SuccesfullOrderPlacement,
  );
});
