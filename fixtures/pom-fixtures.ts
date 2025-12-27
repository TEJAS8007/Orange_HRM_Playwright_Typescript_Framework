import {test as baseTest} from '@playwright/test';
import {LoginPage} from '../Pages/LoginPage';
import { DashboardPage } from '../Pages/DashboardPage';

type loginfixtureType = {
    loginpage : LoginPage;
    dashboardpage : DashboardPage;
}

export const test = baseTest.extend<loginfixtureType>({
    loginpage : async({page},use) => {
        use(new LoginPage(page));
    },

    dashboardpage : async({page},use) => {
        use(new DashboardPage(page));
    } 
});
