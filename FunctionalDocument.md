# Functional Document

1. The working of every function introduced in the project.
1. The working of every page in the project.
1. The working of every variable in the project.

*Starting from the repository in an alphabetical order:-*

## Pages:

### Error Page:

This page is displayed anytime there is an error in the application from the server side. `HTTP server error (500)`

### OTP Page:

1. The OTP page is responsible for asking the user for their active directory user name. 
1. If the user exists with a proper email ID, an OTP is sent to their mail and the user is then moved to the 'Reset' page.
1. If any issue occurs, the page displays proper user friendly error messages.

### Reset Page:

1. The reset page is responsible for resetting or unlocking the user's password.
1. First, an OTP is required. If the entered OTP matches the one that was sent to the user's email ID, the page shows the buttons to unlock account and reset password.
1. Unlocking an account shows a user friend message.
1. Resetting the password, sends a randomly generated password to the user's mail ID.

### SendMail Page

  This page is responsible for sending the OTP mail to user if the commonly used SendGrid account is not working fine.

### SendMail1 Page

  This page is responsible for sending the password mail to user if the commonly used SendGrid account is not working fine.

## Functions

### OTP Page:

- **Page_Load**:

1. This function runs when the page loads.
1. This function will check if the connection to the Active Directory can be established or not.

- **SendMailMessage**:

1. This function is responsible for sending the OTP mail.

- **Verify_Button**

1. This function runs when the 'Next' button on the page is pressed.
1. When the next button is pressed, it gets the content in text-box 'otp_username'
1. It searches the account with the user name.
1. It checks if the user exist.
1. It checks if the user account is not disabled.
1. It checks if the user account has an email ID assigned to it.

### Reset Page:

- **class PasswordGenerator**

1. This class is responsible for generating a new password keeping certain rules in mind.
1. The rules for the password can be changed at the end of the class

- **Page_Load**:

1. This function runs when the page loads.
1. This function will check if a user session exists or not. 
  - If not, it redirects to the OTP page back
1. This function will also show a masked email ID of the user

- **CreateBitmapImage**

1. This function takes in a string and converts it into an image

- **SendMailMessage**

1. This function is responsible for sending the password mail.

- **Verify_Click**

1. This function run in the back when we click the `Verify` button
1. This function checks if the OTP matches the one sent via email.
  - If yes, hide all buttons and show the choice button
  - If no, show relevant text

- **Reset_Click**

1. This function runs when we click the `reset password` button
1. It connects to the domain
1. Then it checks for necessary options, such as the password expire should not be set to 'Never Expire'
1. Once, all checked, a new password is generated and set
1. The account password is expired, so that the user is forced to reset the password in next logon
1. The account is also unlocked
1. It also sends a mail to the user, along with an attachments of the password

- **Unlock_Click**

1. This function runs when we click the `unlock account` button
1. It connects to the domain
1. It finds the account and unlocks the account
1. Once done, it displays a relevant message