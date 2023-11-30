const { expect } = require("@playwright/test");

class DashboardPage {
  constructor(page) {
    this.page = page;
    this.searchBox = page.getByRole("textbox", { name: "search", exact: true });
    this.product = page.locator(".card-body b");
    this.searchResults = page.locator(".text-muted").first();
    this.categories = page.getByRole('heading',{name:"Categories",exact:true});
    this.fashion = page.locator('#sidebar div').filter({ hasText: /^fashion$/ }).getByRole('checkbox');
    this.electronics = page.locator('#sidebar div').filter({ hasText: /^electronics$/ }).getByRole('checkbox');
    this.households = page.locator('#sidebar div').filter({ hasText: /^household$/ }).getByRole('checkbox');
    this.tshirts = page.locator('#sidebar div').filter({ hasText: /^t-shirts$/ }).getByRole('checkbox');
    this.shoes = page.locator('#sidebar div').filter({ hasText: /^shoes$/ }).getByRole('checkbox');
    this.mobiles = page.locator('#sidebar div').filter({ hasText: /^mobiles$/ }).getByRole('checkbox');
    this.laptops = page.locator('#sidebar div').filter({ hasText: /^laptops$/ }).getByRole('checkbox');
    this.men = page.locator('#sidebar div').filter({ hasText: /^men$/ }).getByRole('checkbox');
    this.women = page.locator('#sidebar div').filter({ hasText: /^women$/ }).getByRole('checkbox');
    this.signOut = page.getByRole('button', { name: 'Sign Out' });
    this.NoProToast = page.getByLabel('No Products Found');
    this.orders = page.getByText('ORDERS');
    this.cart = page.getByText('Cart');
    this.home = page.getByText('HOME');
    this.subCategories = page.getByRole('heading', { name: 'Sub Categories' });
    this.searchFor = page.getByRole('heading', { name: 'Search For' });



  }
  async searchProductsInDashboardPage(ProductName) {
    await this.searchBox.type(ProductName);

  }

  async pressEnterBtn() {
    await this.page.keyboard.press("Enter", { delay: 500 });
  }

  async waitForPageToLoad() {
    await this.page.waitForLoadState("networkidle");
  }

  async clickFashion(){
    await this.fashion.click();
  }

  async assertionForSearchProductsInDashboard(ProductName){
    await expect(this.product).toContainText(ProductName);
  }

  async assertionForCategoriesAvailable(){
    await expect(this.categories).toBeVisible();
    await expect(this.subCategories).toBeVisible();
    await expect(this.searchFor).toBeVisible();
  }

  async assertionForHeaderOptions(){
    await expect(this.home).toBeVisible();
    await expect(this.orders).toBeVisible();
    await expect(this.cart).toBeVisible();
    await expect(this.signOut).toBeVisible();
  }

}

module.exports = { DashboardPage };
