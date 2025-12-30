import {test,expect} from '../fixtures/hooks-fixture';
import loginData from '../Data-files/login_Module_Data.json';

test.use({
    storageState : {
        cookies : [],
        origins : []
    }
});

test('verify that user cannot login with Invalid password',
    {
        tag:['@UI','@UAT'],
        annotation : {
            type : 'Test Case Link',
            description : 'verify that user cannot login with Invalid password'
        }
    },async({GotoUrl,loginpage,commonUtils,page})=> {    

    const username = commonUtils.decryptData(process.env.USER_NAME!);
    await loginpage.LoginIntoOrangeHRM(username,loginData.incorrect_password);
    
    await loginpage.wait_for_error_msg(loginData.error_message);
    //verifying error massage
    await expect(loginpage.errorMsg).toHaveText(loginData.error_message);
});

test('verifying user cannot login with Invalid username',
    {
        tag:['@UI','@UAT'],
        annotation : {
            type : 'Test Case Link',
            description : 'verify that user cannot login with Invalid username'
        }
    },async({GotoUrl,loginpage,commonUtils})=> {

    const password = commonUtils.decryptData(process.env.PASSWORD!);
    await loginpage.LoginIntoOrangeHRM(loginData.incorrect_username,password);

    //verifying error massage
    await expect(loginpage.errorMsg).toHaveText(loginData.error_message);
});

test('verifying user cannot login with invalid credentials',
    {
        tag:['@UI','UAT'],
        annotation : {
            type : 'Test Case Link',
            description : 'verifying user cannot login with invalid credentials'
        }
    },async({GotoUrl,loginpage})=> {

    await loginpage.LoginIntoOrangeHRM(loginData.incorrect_username,loginData.incorrect_password);

    //verifying error massage
    await expect(loginpage.errorMsg).toHaveText(loginData.error_message);
});

test('verifying username and password Boxes to be visible',
    {
        tag:['@UI','@UAT'],
        annotation : {
            type : 'Test Case Link',
            description : 'verifying username and password Boxes to be visible'
        }
    },async({GotoUrl,loginpage})=> {

    await expect(loginpage.usernameBox).toBeVisible();
    await expect(loginpage.passwordBox).toBeVisible();
    await expect(loginpage.LoginButton).toBeEnabled();

});

