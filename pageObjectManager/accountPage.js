const { expect } = require("@playwright/test");

class AccountPage {
  constructor(page) {
    this.page = page;
    this.myAccountBanner = page
      .getByRole("heading", { name: "My Account" })
      .locator("span");
    this.changePassword = page.getByRole("link", { name: "Change Password" });
    this.changePasswordCheckbox = page.locator("#form-validate div").filter({
      hasText: "Change Password",
    });
    this.editAccountInfoBanner = page.getByText("Edit Account Information");
    this.successfulPasswordReset = page.getByText("You saved the account");
    this.currentPassword = page.getByLabel("Current Password");
    this.newPassword = page.getByLabel("New Password", { exact: true });
    this.confirmNewPassword = page.getByLabel("Confirm New Password", {
      exact: true,
    });
    this.save = page.getByRole("button", { name: "Save" });
  }

  async goToUrl(Url) {
    await this.page.goto(Url);
  }

  async clickChangePassword() {
    await this.changePassword.click();
  }

  async fillPasswordResetFields(
    CurrentPassword,
    NewPassword,
    ConfirmNewPassword,
  ) {
    await this.currentPassword.fill(CurrentPassword);
    await this.newPassword.fill(NewPassword);
    await this.confirmNewPassword.fill(ConfirmNewPassword);
  }

  async clickSaveBtn() {
    await this.save.click();
  }

  async assertmyAccountBannerIsVisible(MyAccountBanner) {
    await expect(this.myAccountBanner).toHaveText(MyAccountBanner);
  }

  async assertmyAccountURL(MyAccountURL) {
    await expect(this.page).toHaveURL(MyAccountURL);
  }

  async assertchangePasswordPageIsLoaded() {
    await expect(this.editAccountInfoBanner).toBeVisible();
  }

  async assertchangePasswordCheckbokIsChecked() {
    await expect(this.changePasswordCheckbox).toBeChecked();
  }

  async assertsuccessfulPasswordChange() {
    await expect(this.successfulPasswordReset).toBeVisible();
  }
}
module.exports = { AccountPage };
