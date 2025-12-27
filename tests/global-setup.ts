import {test} from '../fixtures/common-fixture';
import { expect } from 'playwright/test';
import { LoginPage } from '../Pages/LoginPage';
import CommonUtils from '../Utils/CommonUtils';

/**
 * To Save Authentication State for login into OrangeHRM  Application
 */
test('Global SetUp For Auto Login..', async ({ page, commonUtils, loginpage, dashboardpage }) => {

  const username = commonUtils.decryptData(process.env.USER_NAME!);
  const password = commonUtils.decryptData(process.env.PASSWORD!);

  await loginpage.goToUrl();
  await loginpage.LoginIntoOrangeHRM(username, password);

  await page.waitForURL(/dashboard/);

  await expect(dashboardpage.dashBoardTitleText).toHaveText('Dashboard');
  
  // Saving Authentication state to this path
  await page.context().storageState({ path: './Auth_Files/Auth/auth.json'});

});
