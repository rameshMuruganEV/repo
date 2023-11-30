const { test, expect } = require("@playwright/test");
const { customTest } = require("../testData/testData_Magento");
const { POM_Magento } = require("../pageObjectMagento/POM_Magento");

customTest("registeringNewUser", async ({ page, registeringNewUser }) => {
  const pOM_Magento = new POM_Magento(page);
  const loginPage = await pOM_Magento.getLoginPage();
  const dashboardPage = await pOM_Magento.getDashboardPage();

  await loginPage.goTo(registeringNewUser.Url);
  await dashboardPage.clickCreateAccountLink();
  await loginPage.assertsignUpURL(registeringNewUser.CreateAccountURL);
  await loginPage.assertnewCustomerBanner(registeringNewUser.NewCustomerBanner);
  await loginPage.assertFieldsAreVisible();
  await loginPage.fillTheFields(
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
  await loginPage.assertUserBanerInProfile(
    registeringNewUser.FirstName,
    registeringNewUser.LastName,
  );
});
