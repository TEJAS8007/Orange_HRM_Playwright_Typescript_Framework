import { Locator, Page } from "playwright";

export class LeftNavigationPage {

    readonly page : Page;
    readonly pimLink : Locator;
    readonly orangeHRMlogo : Locator;
    readonly leftNavigationPanel : Locator;

    constructor(page:Page) {
        this.page=page;

        this.pimLink = page.getByRole('link', { name: 'PIM' });
        this.orangeHRMlogo = page.getByRole('link', { name: 'client brand banner' });
        this.leftNavigationPanel = page.locator('div.oxd-sidepanel-body');
    }

    /**
     * Method to Open PIM Module....
     */
    async openPIMModule() {
        await this.pimLink.click();
    }
}