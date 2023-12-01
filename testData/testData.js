const base = require("@playwright/test");

exports.customTest = base.test.extend({
  registeringNewUser: {
    Url: "https://magento.softwaretestingboard.com/",
    CreateAccountURL:
      "https://magento.softwaretestingboard.com/customer/account/create/",
    // NewCustomerBanner: "Create New Customer Account",
    FirstName: "Ramesh",
    LastName: "Murugan",
    Email: "rameshmtester19@gmail.com",
    Password: "Lala@123",
    ConfirmPassword: "Lala@123",
    SuccessfulAccountCreationText: "Thank you for registering",
    Banner: "Welcome, Ramesh Murugan!",
  },

  loginUser: {
    Url: "https://magento.softwaretestingboard.com/",
    Email: "rameshmtester@gmail.com",
    Password: "Lala@123",
    Banner: "Welcome, Ramesh Murugan!",
    // LoginUserBanner : "Customer Login"
  },

  login_logoutUser: {
    Url: "https://magento.softwaretestingboard.com/",
    Email: "rameshmtester@gmail.com",
    Password: "Lala@123",
    Banner: "Welcome, Ramesh Murugan!",
  },

  e2eTest: {
    Url: "https://magento.softwaretestingboard.com/",
    Email: "rameshmtester@gmail.com",
    Password: "Lala@123",
  },

  logoutUser: {
    Url: "https://magento.softwaretestingboard.com/",
  },
});
