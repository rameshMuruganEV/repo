import { customTest } from "../testData/testData";
import { PageObjectManager } from "../pageObjectManager/PageObjectManager";

customTest.skip("registeringNewUser", async ({ page, registeringNewUser }) => {
  const POM = new PageObjectManager(page);
  const loginPage = await POM.getLoginPage();
  const dashboardPage = await POM.getDashboardPage();

  await loginPage.goTo(registeringNewUser.Url);
  await dashboardPage.clickCreateAccountLink();
  await loginPage.assertsignUpURL(registeringNewUser.CreateAccountURL);
  await loginPage.assertnewCustomerBanner();
  await loginPage.assertFieldsAreVisible();
  await loginPage.fillTheNewUserFields(
    registeringNewUser.FirstName,
    registeringNewUser.LastName,
    registeringNewUser.Email,
    registeringNewUser.Password,
    registeringNewUser.ConfirmPassword,
  );
  await loginPage.clickCreateAccountBtn();
  await loginPage.assertSuccesfulAccountCreation(
    registeringNewUser.SuccessfulAccountCreationText,
  );
  await loginPage.pageLoadState();
  await loginPage.waitForUserBanerInProfile();
  await loginPage.assertUserBanerInProfile(registeringNewUser.Banner);
});

customTest.skip("loginUser", async ({ page, loginUser }) => {
  const POM = new PageObjectManager(page);
  const loginPage = await POM.getLoginPage();
  const dashboardPage = await POM.getDashboardPage();

  await loginPage.goTo(loginUser.Url);
  await dashboardPage.clickSignInLink();
  await loginPage.assertLoginCustomerBanner();
  await loginPage.fillTheLoginFields(loginUser.Email, loginUser.Password);
  await loginPage.clickSignInBtn();
  await loginPage.pageLoadState();
  await loginPage.waitForUserBanerInProfile();
  await loginPage.assertUserBanerInProfile(loginUser.Banner);
});

customTest("login_logoutUser", async ({ page, login_logoutUser }) => {
  const POM = new PageObjectManager(page);
  const loginPage = await POM.getLoginPage();
  const dashboardPage = await POM.getDashboardPage();

  await loginPage.goTo(login_logoutUser.Url);
  await loginPage.waitForUserBanerInProfile();
  await dashboardPage.clickdropDownProfile();
  await dashboardPage.clickSignoutOption();
  await loginPage.assertUserSignedOut();
});

customTest("e2eTest", async ({ page, e2eTest }) => {
  const POM = new PageObjectManager(page);
  const loginPage = await POM.getLoginPage();
  const dashboardPage = await POM.getDashboardPage();
  const productPage = await POM.getProductPage();

  await loginPage.goTo(e2eTest.Url);
  await dashboardPage.selectMenCategory();
  await dashboardPage.selectSweatshirts();
  await dashboardPage.selectProduct();
  await productPage.assertWhetherProductImgIsAvailable();
  await productPage.assertWhetherTheProductNameisVisibleInProductPage(
    e2eTest.ProductName,
  );
  await productPage.assertPriceEvaluate(e2eTest.Price);
  await productPage.clickAdd2CartProduct();
  // await page1.getByLabel("M", { exact: true }).click();
  // await page1.getByLabel("Green").click();
  // await page1.getByLabel("Qty").fill("2");
  // await page1.locator(".fieldset > .field > .control").first().click();
  // await page1.getByRole("button", { name: "Add to Cart" }).click();
  // await expect(page1.getByText("You added Hollister Backyard")).toBeVisible();
  // await page1.getByRole("alert").locator("div").first().click();
  // await expect(page1.getByRole("alert").locator("div").first()).toBeVisible();
  // await page1.getByRole("link", { name: "shopping cart" }).click();
  // await expect(
  //   page1.locator("#shopping-cart-table").getByText("M", { exact: true }),
  // ).toBeVisible();
  // await expect(
  //   page1.locator("#shopping-cart-table").getByText("Green"),
  // ).toBeVisible();
  // await expect(
  //   page1.locator("#shopping-cart-table").getByText("$52.00"),
  // ).toBeVisible();
  // await expect(page1.getByRole("spinbutton", { name: "Qty" })).toBeVisible();
  // await page1.getByRole("button", { name: "Proceed to Checkout" }).click();
  // await expect(page1.getByText("Shipping Address")).toBeVisible();
  // await expect(page1.getByText("Order Summary")).toBeVisible();
  // await page1.getByRole("button", { name: "Next" }).click();
  // await expect(
  //   page1.getByText("Payment Method", { exact: true }),
  // ).toBeVisible();
  // await page1.getByRole("button", { name: "Place Order" }).click();
  // await expect(page1.getByText("Thank you for your purchase!")).toBeVisible();
  // await page1.getByRole("link", { name: "Continue Shopping" }).click();
  // await page1.getByText("Skip to Content Welcome,").click();
  // await page1
  //   .getByRole("banner")
  //   .locator("button")
  //   .filter({ hasText: "Change" })
  //   .click();
  // await page1.getByRole("link", { name: "My Account" }).click();
  // await page1.getByRole("link", { name: "My Orders" }).click();
  // await expect(
  //   page1.getByRole("heading", { name: "My Orders" }).locator("span"),
  // ).toBeVisible();
  // await page1.getByRole("link", { name: "View Order" }).first().click();
  // await expect(page1.getByText("Order #")).toBeVisible();
});

customTest("password reset", async ({ page, passwordReset }) => {
  const POM = new PageObjectManager(page);
  const loginPage = await POM.getLoginPage();
  const dashboardPage = await POM.getDashboardPage();
  const accountPage = await POM.getAccountPage();

  await accountPage.goToUrl(passwordReset.Url);
  await loginPage.waitForUserBanerInProfile();
  await dashboardPage.clickdropDownProfile();
  await dashboardPage.clickMyAccountLink();
  await accountPage.assertmyAccountBannerIsVisible(
    passwordReset.MyAccountBanner,
  );
  await accountPage.assertmyAccountURL(passwordReset.MyAccountUrl);
  await accountPage.clickChangePassword();
  await accountPage.assertchangePasswordPageIsLoaded();
  await accountPage.assertchangePasswordCheckbokIsChecked();
  await accountPage.fillPasswordResetFields(
    passwordReset.CurrentPassword,
    passwordReset.NewPassword,
    passwordReset.ConfirmNewPassword,
  );
  await accountPage.clickSaveBtn();
  await accountPage.assertsuccessfulPasswordChange();
});
