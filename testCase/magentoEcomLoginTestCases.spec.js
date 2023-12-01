import { test } from "@playwright/test";
import { customTest } from "../testData/testData_Magento";
import { POM_Magento } from "../pageObjectMagento/POM_Magento";

customTest("logoutUser", async ({ page, logoutUser }) => {
  const pOM_Magento = new POM_Magento(page);
  const loginPage = await pOM_Magento.getLoginPage();
  const dashboardPage = await pOM_Magento.getDashboardPage();

  await loginPage.goTo(logoutUser.Url);
  await loginPage.pageLoadState();
  await loginPage.waitForUserBanerInProfile();
  await dashboardPage.clickdropDownProfile();
  await dashboardPage.clickSignoutOption();
  await loginPage.assertUserSignedOut();
});
