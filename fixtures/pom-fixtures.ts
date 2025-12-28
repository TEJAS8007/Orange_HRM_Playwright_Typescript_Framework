import {test as baseTest} from '@playwright/test';
import {LoginPage} from '../Pages/LoginPage';
import { DashboardPage } from '../Pages/DashboardPage';
import { UserPage } from '../Pages/UserPage';

type loginfixtureType = {
    loginpage : LoginPage;
    dashboardpage : DashboardPage;
    userpage : UserPage;
}

export const test = baseTest.extend<loginfixtureType> ({

    loginpage : async({page},use) => {
        await use(new LoginPage(page));
    },

    dashboardpage : async({page},use) => {
        await use(new DashboardPage(page));
    },

    userpage : async({page},use) => {
        await use(new UserPage(page))
    }
})
