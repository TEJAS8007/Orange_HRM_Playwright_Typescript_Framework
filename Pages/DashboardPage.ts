import { Locator, Page } from "playwright";

export class DashboardPage {

    readonly page:Page;
    readonly dashBoardTitleText : Locator;

    constructor(page:Page) {
        this.page=page;
 
        this.dashBoardTitleText = page.locator('h6.oxd-text--h6.oxd-topbar-header-breadcrumb-module');
    }


}