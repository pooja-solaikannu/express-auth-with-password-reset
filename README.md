# express-auth-with-password-reset
**Todo**

1. create a react based frontend - done
2. add mongo db for user info and otp storage - done
3. login page can remain the same - done
4. forget password page should look like - rate limiting and captcha is pending 

![reset-password-using-otp](https://github.com/user-attachments/assets/f6029c01-b6a1-49b7-b801-6095fdb780f1)

6. add set new password screen with two fields - done
    - new password
    - confirm password
7. perform zod verification and modify the entry in db - pending
8. Sucessful insertion should redirect to login - done
9. change the generate-otp endpoint to do findoneandupdate query with upsert = true - done
10. Delete endpoint to remove the generated otp on successful verification of OTP - pending
11. Work on front end error message section and home page section
