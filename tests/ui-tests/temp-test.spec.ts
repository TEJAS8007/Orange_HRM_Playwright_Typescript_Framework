import { expect } from 'playwright/test';
import {test} from '../../fixtures/hooks-fixture';


test('Temp Test1',
  {
    tag : ['@UI','@UAT'],
    annotation : {
      type : 'Test Case',
      description : 'verifying Home Page Title'
    }
  }
  , async ({ page,GotoUrl }) => {

    await test.step('Printing Home Page Title',async()=> {
      console.log('Temp Test 1 Title : ',await page.title());
    });

    await test.step('Verifying Home Page Title',async()=> {
      await expect(page).toHaveTitle('OrangeHRM');
    });
  
});

test('Temp Test2',
  {
    tag : ['@UI','@UAT'],
    annotation : {
      type : 'Test Case',
      description : 'verifying Home Page Url'
    }
  },async({logout,page,GotoUrl})=> {

    await test.step('Verifying Url of HomePage',async()=> {
      console.log('Temp Test 3 Url : ',await page.url());
    });
  
    await test.step('Verifying home Page Title',async()=> {
      await expect(page).toHaveTitle('OrangeHRM');
    });
});