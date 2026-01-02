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
            type : 'Test Case',
            description : 'verify that user cannot login with Invalid password'
        }
    },async({GotoUrl,loginpage,commonUtils,page})=> {    

        await test.step('Loading decrypted username password as ENV Variable',async()=>{
          const username = commonUtils.decryptData(process.env.USER_NAME!);
          await loginpage.LoginIntoOrangeHRM(username,loginData.incorrect_password); 
        });
    
        await test.step('verifying error message with valid username & invalid password',async()=> {
          await loginpage.wait_for_error_msg(loginData.error_message);
          await expect(loginpage.errorMsg).toHaveText(loginData.error_message);  
        });

});

test('verifying user cannot login with Invalid username',
    {
        tag:['@UI','@UAT'],
        annotation : {
            type : 'Test Case',
            description : 'verify that user cannot login with Invalid username'
        }
    },async({GotoUrl,loginpage,commonUtils})=> {

        await test.step('Loading decrypted username password as ENV Variable',async()=>{
          const password = commonUtils.decryptData(process.env.PASSWORD!);
          await loginpage.LoginIntoOrangeHRM(loginData.incorrect_username,password);
        });
    
        await test.step('verifying error message with valid username & invalid password',async()=> {
          await expect(loginpage.errorMsg).toHaveText(loginData.error_message);
        });
    
});

test('verifying user cannot login with invalid credentials',
    {
        tag:['@UI','@UAT'],
        annotation : {
            type : 'Test Case',
            description : 'verifying user cannot login with invalid credentials'
        }
    },async({GotoUrl,loginpage})=> {

        await test.step('Performing login with Invalid username and password',async()=>{
           await loginpage.LoginIntoOrangeHRM(loginData.incorrect_username,loginData.incorrect_password);
        });

        await test.step('verifying error message',async()=> {
           await expect(loginpage.errorMsg).toHaveText(loginData.error_message);
        });

});

test('verifying username and password Boxes to be visible',
    {
        tag:['@UI','@UAT'],
        annotation : {
            type : 'Test Case',
            description : 'verifying username and password Boxes to be visible'
        }
    },async({GotoUrl,loginpage})=> {

        await test.step('Verifying username box tobe Visible',async()=>{
          await expect(loginpage.usernameBox).toBeVisible();
        });

        await test.step('Verifying password box tobe Visible',async()=>{
          await expect(loginpage.passwordBox).toBeVisible();
        });
    
        await test.step('Verifying username box tobe Visible',async()=>{
          await expect(loginpage.LoginButton).toBeEnabled();
        });
    
});

