const { customTest } = require("../testData/testData_Magento");
const { POM_Magento } = require("../pageObjectMagento/POM_Magento");

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
