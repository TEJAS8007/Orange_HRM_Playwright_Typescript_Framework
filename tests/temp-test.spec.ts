import {test} from '../fixtures/common-fixture';
import CommonUtils from '../Utils/CommonUtils';

/** 
 * SECRET_KEY=Tejas_Auto npm run test_demo_cr_hd
 */
test('Temp Test', async ({ page, loginpage, commonUtils }) => {

  const username = commonUtils.decryptData(process.env.USER_NAME!);
  const password = commonUtils.decryptData(process.env.PASSWORD!);

  await loginpage.goToUrl();
  console.log(await page.title());
  console.log(await page.url());

});