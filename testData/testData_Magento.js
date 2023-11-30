const base = require("@playwright/test");

exports.customTest = base.test.extend({
  registeringNewUser: {
    Url: "https://magento.softwaretestingboard.com/",
    CreateAccountURL:
      "https://magento.softwaretestingboard.com/customer/account/create/",
    NewCustomerBanner: "Create New Customer Account",
    FirstName: "Ramesh",
    LastName: "Murugan",
    Email: "rameshmtester7@gmail.com",
    Password: "Lala@123",
    ConfirmPassword: "Lala@123",
    SuccessfulAccountCreationText: "Thank you for registering",
  },
});
