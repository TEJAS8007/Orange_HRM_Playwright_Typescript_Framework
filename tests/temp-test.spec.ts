import { expect } from 'playwright/test';
import {test} from '../fixtures/hooks-fixture';


test('Temp Test1', async ({ page,GotoUrl }) => {

  console.log('Temp Test 1 Title : ',await page.title());
  await expect(page).toHaveTitle('OrangeHRM');
});

test('Temp Test2',async({page,GotoUrl})=> {

  console.log('Temp Test 2 Url : ',await page.url());
  await expect(page).toHaveTitle('OrangeHRM');
});

test('Temp Test3',async({logout,page,GotoUrl})=> {

  console.log('Temp Test 3 Url : ',await page.url());
  await expect(page).toHaveTitle('OrangeHRM');
});