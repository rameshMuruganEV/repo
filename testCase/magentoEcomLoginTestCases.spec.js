import { customTest } from "../testData/testData";
import { PageObjectManager } from "../pageObjectManager/PageObjectManager";

customTest("logoutUser", async ({ page, logoutUser }) => {
  const POM = new PageObjectManager(page);
  const loginPage = await POM.getLoginPage();
  const dashboardPage = await POM.getDashboardPage();

  await loginPage.goTo(logoutUser.Url);
  await loginPage.waitForUserBanerInProfile();
  await dashboardPage.clickdropDownProfile();
  await dashboardPage.clickSignoutOption();
  await loginPage.assertUserSignedOut();
});
