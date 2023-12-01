import { chromium, expect } from "@playwright/test";

async function magentoGlobalSetup() {
  const browser = await chromium.launch();
  const context = await browser.newContext();
  const page = await context.newPage();
  await page.goto("https://magento.softwaretestingboard.com/");
  await page
    .getByLabel("Email", { exact: true })
    .fill("rameshmtester@gmail.com");
  await page.getByRole("textbox", { name: "Password*" }).fill("Lala@123");
  await page.getByRole("button", { name: "Sign In" }).click();
  await page.waitForLoadState("load");
  await page
    .locator("div[class='panel header'] span[class='logged-in']")
    .waitFor();
  await expect(
    page.locator("div[class='panel header'] span[class='logged-in']"),
  ).toHaveText("Welcome, Ramesh Murugan!");

  await page.context().storageState({ path: "./loginAuth.json" });
  await browser.close();
}
export default magentoGlobalSetup;
