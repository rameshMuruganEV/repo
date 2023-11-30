Feature: User Login

As a registered user, I wanted to login to the application inorder to access my account

Scenario: Login user

Given : Enter the "rameshmtester@gmail.com" and "Lala@123" in the loginPage "https://rahulshettyacademy.com/client/".

When : Click the login Button.

Then : Check whether user is logged in to dashboard page "https://rahulshettyacademy.com/client/dashboard/dash" and success pop-up is shown "Login Successfully".


Scenario: Login user with Incorrect details

Given : Enter the "rameshmtesterr@gmail.com" and "Lala@123" in the loginPage "https://rahulshettyacademy.com/client/".

When : Click the login Button.

Then : Verify error pop-up "Incorrect email or password" is shown.


Scenario: Reset password for the user

Given : Goto the URL "https://rahulshettyacademy.com/client/".

When : Click the forgot password link.

Then : Verify forgot password page "https://rahulshettyacademy.com/client/auth/password-new" is launched.

Then : Check Forgot password page "Enter New Password" heading is visible.

When : Click on the save new password button.

Then : Verify user is shown to fill the empty fields.

When : Fill the empty fields with email "rameshmtester@gmail.com" , password "Lala@123" , confirm password "Lala@123".

When : Click on the save new password button.

Then : Verify the password is changed pop-up " Password Changed Successfully " is shown.
