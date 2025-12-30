import {test,expect} from '../fixtures/hooks-fixture';
import pimData from '../Data-files/pim-module-data.json';


test('verify new Employee is created under PIM Module',
    {tag:['@UI','@UAT'],
        annotation : {
            type : 'Test Case Link',
            description : 'verify new Employee is created under PIM Module'
        }
    },async({page,leftnavigationpage,pimpage,GotoUrl})=> {

    await leftnavigationpage.openPIMModule();
    await pimpage.addEmployee(pimData.firstName,pimData.middleName,pimData.lastName);

    //verifying new Emplyee Heading
    await expect(pimpage.newEmployeeHeading).toHaveText(pimData.newEmployeeName);

});