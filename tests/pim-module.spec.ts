import {test,expect} from '../fixtures/hooks-fixture';
import pimData from '../Data-files/pim-module-data.json';


test('verify new Employee is created under PIM Module',
    {tag:['@UI','@UAT'],
        annotation : {
            type : 'Test Case',
            description : 'verify new Employee is created under PIM Module'
        }
    },async({page,leftnavigationpage,pimpage,GotoUrl})=> {

        await test.step('Opening PIM Module',async()=> {
          await leftnavigationpage.openPIMModule();
        });

        await test.step('Adding Employee into PIM Module',async()=> {
          await pimpage.addEmployee(pimData.firstName,pimData.middleName,pimData.lastName);
        });

        await test.step('Verying New Emplyee into PIM Module',async()=> {
          await expect(pimpage.newEmployeeHeading).toHaveText(pimData.newEmployeeName);
        });
    
});