import { Locator, Page } from "playwright";

export class LeftNavigationPage {

    readonly page : Page;
    readonly pimLink : Locator;

    constructor(page:Page) {
        this.page=page;

        this.pimLink = page.getByRole('link', { name: 'PIM' });
    }

    /**
     * Method to Open PIM Module....
     */
    async openPIMModule() {
        await this.pimLink.click();
    }
}