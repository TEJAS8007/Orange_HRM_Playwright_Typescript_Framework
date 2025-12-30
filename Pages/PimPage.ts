import { Locator, Page } from "playwright";
import { expect } from "playwright/test";

export class PimPage {

    readonly page : Page;
    readonly addbutton : Locator;
    readonly firstname : Locator;
    readonly middlename : Locator;
    readonly lastname : Locator;
    readonly savebutton : Locator;
    readonly newEmployeeHeading : Locator;


    constructor(page:Page) {
        this.page=page;

        this.addbutton = page.getByRole('button', { name: ' Add' });
        this.firstname = page.getByRole('textbox', { name: 'First Name' });
        this.middlename = page.getByRole('textbox', { name: 'Middle Name' });
        this.lastname = page.getByRole('textbox', { name: 'Last Name' });
        this.savebutton = page.getByRole('button', { name: 'Save' });
        this.newEmployeeHeading = page.locator('.orangehrm-edit-employee-name');
    }

    /**
     * Method to new Employee in Chart
     * @param firstName 
     * @param middleName 
     * @param lastName 
     */
    async addEmployee(firstName:string,middleName:string,lastName:string) {

        await this.addbutton.click();
        await this.firstname.fill(firstName);
        await this.middlename.fill(middleName);
        await this.lastname.fill(lastName);
        await this.savebutton.click();

        await expect(this.newEmployeeHeading).toBeVisible();
    }
}