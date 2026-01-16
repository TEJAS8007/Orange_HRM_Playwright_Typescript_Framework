import {test} from '../../fixtures/common-fixture';
import { expect } from 'playwright/test';
import fs from 'fs';

/**
 * To Save Authentication State for login into OrangeHRM  Application
 */
test('Global SetUp For Auto Login..', async ({ page, commonUtils, loginpage, dashboardpage }) => {
  
  const username = await commonUtils.decryptData(process.env.USER_NAME!);
  const password = await commonUtils.decryptData(process.env.PASSWORD!);

  await loginpage.goToUrl();
  await loginpage.LoginIntoOrangeHRM(username, password);

  // Dashboard assert + wait
  await page.waitForURL('**/dashboard', { timeout: 15000 });
  await expect(dashboardpage.dashBoardTitleText).toHaveText('Dashboard');

  // Storage State capture
  if (!fs.existsSync('./Auth_Files/Auth')) {
  fs.mkdirSync('./Auth_Files/Auth', { recursive: true });
  }
  await page.context().storageState({ path: './Auth_Files/Auth/auth.json' });
});
