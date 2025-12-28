import { LoginPage } from '../Pages/LoginPage';
import {test as baseTest} from './common-fixture';

type HooksFixtureTypes = {
    GotoUrl:void;
    logout:void;
}

 export const test = baseTest.extend<HooksFixtureTypes>({

    GotoUrl : async({loginpage},use) =>{
        await loginpage.goToUrl();
        await use();
    },

    logout : async({userpage},use) => {
        await use();
        await userpage.Logout();
    }
})

export {expect} from '@playwright/test';
