import { Locator, Page } from "playwright";

export class DashboardPage {

    readonly page:Page;
    readonly dashBoardTitleText : Locator;

    constructor(page:Page) {
        this.page=page;
 
        this.dashBoardTitleText = page.getByRole('heading', { name: 'Dashboard' });
    }


}