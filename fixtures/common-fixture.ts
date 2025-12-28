import {test as basetest} from './pom-fixtures';
import { CommonUtils } from '../Utils/CommonUtils';

type commonFixtureType = {
    commonUtils : CommonUtils; 
}

export const test =basetest.extend<commonFixtureType>({
    commonUtils : async({},use) => {
        await use(new CommonUtils);
    }
})

