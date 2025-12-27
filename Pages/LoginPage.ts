import {test,Page, Locator} from '@playwright/test';
export class LoginPage {

    readonly page;
    readonly usernameBox : Locator;
    readonly passwordBox : Locator;
    readonly LoginButton : Locator;

    constructor(page:Page) {
        this.page=page;

        this.usernameBox = page.getByRole('textbox', { name: 'Username' });
        this.passwordBox = page.getByRole('textbox', { name: 'Password' });
        this.LoginButton = page.getByRole('button', { name: 'Login' })
    }

    /**
     * To open the Opencart Application..
     * */
    async goToUrl() {
        await this.page.goto(`${process.env.BASE_URL}/web/index.php/auth/login` ,
            {
                waitUntil:'domcontentloaded'
            }
        );
    }

    /**
     * To Perform login on Swag Labs Application..
     * @param username
     * @param password 
     */
    async LoginIntoOrangeHRM(username:any,password:any) {

        await this.usernameBox.fill(username);
        await this.passwordBox.fill(password);
        await this.LoginButton.click();

    }
    
}