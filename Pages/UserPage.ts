import { Locator, Page } from "playwright"


export class UserPage {

    readonly page : Page
    readonly usermenuButton  : Locator;
    readonly logout_button : Locator;

    constructor(page:Page) {
        this.page=page;

        this.usermenuButton = page.locator('.oxd-userdropdown');
        this.logout_button = page.locator("//a[text()='Logout']");
    }

    async Logout() {
        await this.usermenuButton.click();
        await this.logout_button.click();
    }

}