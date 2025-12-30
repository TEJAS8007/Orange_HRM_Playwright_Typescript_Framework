import { expect } from 'playwright/test';
import {test} from '../fixtures/hooks-fixture';


test('Temp Test1',
  {
    tag : ['@UI','@UAT'],
    annotation : {
      type : 'Test Case Link',
      description : 'Temp Test 1'
    }
  }
  , async ({ page,GotoUrl }) => {

  console.log('Temp Test 1 Title : ',await page.title());
  await expect(page).toHaveTitle('OrangeHRM');
});

test('Temp Test2',
  {
    tag : ['@UI','@UAT'],
    annotation : {
      type : 'Test Case Link',
      description : 'Temp Test 2'
    }
  },async({page,GotoUrl})=> {

  console.log('Temp Test 2 Url : ',await page.url());
  await expect(page).toHaveTitle('OrangeHRM');
});

test('Temp Test3',
  {
    tag : ['@UI','@UAT'],
    annotation : {
      type : 'Test Case Link',
      description : 'Temp Test 3'
    }
  },async({logout,page,GotoUrl})=> {

  console.log('Temp Test 3 Url : ',await page.url());
  await expect(page).toHaveTitle('OrangeHRM');
});