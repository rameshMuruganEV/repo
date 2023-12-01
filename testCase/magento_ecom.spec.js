import { customTest } from "../testData/testData_Magento";
import { POM_Magento } from "../pageObjectMagento/POM_Magento";

customTest.skip("registeringNewUser", async ({ page, registeringNewUser }) => {
  const pOM_Magento = new POM_Magento(page);
  const loginPage = await pOM_Magento.getLoginPage();
  const dashboardPage = await pOM_Magento.getDashboardPage();

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
  const pOM_Magento = new POM_Magento(page);
  const loginPage = await pOM_Magento.getLoginPage();

  await loginPage.goTo(loginUser.Url);
  await loginPage.clickSignInLink();
  await loginPage.assertLoginCustomerBanner();
  await loginPage.fillTheLoginFields(loginUser.Email, loginUser.Password);
  await loginPage.clickSignInBtn();
  await loginPage.pageLoadState();
  await loginPage.waitForUserBanerInProfile();
  await loginPage.assertUserBanerInProfile(loginUser.Banner);
});

customTest.skip("login_logoutUser", async ({ page, login_logoutUser }) => {
  const pOM_Magento = new POM_Magento(page);
  const loginPage = await pOM_Magento.getLoginPage();
  const dashboardPage = await pOM_Magento.getDashboardPage();

  await loginPage.goTo(login_logoutUser.Url);
  await loginPage.clickSignInLink();
  await loginPage.assertLoginCustomerBanner();
  await loginPage.fillTheLoginFields(
    login_logoutUser.Email,
    login_logoutUser.Password,
  );
  await loginPage.clickSignInBtn();
  await loginPage.pageLoadState();
  await loginPage.waitForUserBanerInProfile();
  await dashboardPage.clickdropDownProfile();
  await dashboardPage.clickSignoutOption();
  await loginPage.assertUserSignedOut();
});

customTest("e2eTest", async ({ page, e2eTest }) => {
  const pOM_Magento = new POM_Magento(page);
  const loginPage = await pOM_Magento.getLoginPage();
  const dashboardPage = await pOM_Magento.getDashboardPage();

  await loginPage.goTo(e2eTest.Url);
  await loginPage.clickSignInLink();
  await loginPage.assertLoginCustomerBanner();
  await loginPage.fillTheLoginFields(e2eTest.Email, e2eTest.Password);
  await loginPage.clickSignInBtn();
  await dashboardPage.selectMenCategory();
  await dashboardPage.selectSweatshirts();
  await dashboardPage.selectProduct();
  // await expect(
  //   page1.getByRole("img", { name: "Hollister Backyard Sweatshirt" }).first(),
  // ).toBeVisible();
  // await expect(page1.locator("h1")).toContainText(
  //   "Hollister Backyard Sweatshirt",
  // );
  // await expect(page1.locator("#product-price-126")).toContainText("$52.00");
  // await page1.getByRole("button", { name: "Add to Cart" }).click();
  // await page1.getByLabel("M", { exact: true }).click();
  // await page1.getByLabel("Green").click();
  // await page1.getByLabel("Qty").click();
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
