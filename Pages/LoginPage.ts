import {test,Page, Locator, expect} from '@playwright/test';
export class LoginPage {

    readonly page;
    readonly usernameBox : Locator;
    readonly passwordBox : Locator;
    readonly LoginButton : Locator;
    readonly errorMsg : Locator;

    constructor(page:Page) {
        this.page=page;

        this.usernameBox = page.getByRole('textbox', { name: 'Username' });
        this.passwordBox = page.getByRole('textbox', { name: 'Password' });
        this.LoginButton = page.getByRole('button', { name: 'Login' });
        this.errorMsg = page.getByText('Invalid credentials');
    }

    /**
     * To open the Opencart Application..
     * */
    async goToUrl() {
        await this.page.goto(`${process.env.BASE_URL}/web/index.php/auth/login`);
    }

    /**
     * To Perform login on Swag Labs Application..
     * @param username
     * @param password 
     */
    async LoginIntoOrangeHRM(username:string,password:string) {

        await this.usernameBox.fill(username);
        await this.passwordBox.fill(password);
        await expect(this.LoginButton).toBeEnabled();
        await this.LoginButton.click();

    }

    async wait_for_error_msg(text:string) {
        await expect(this.errorMsg).toHaveText(text);
    }
    
}
