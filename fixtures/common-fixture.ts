import {test as basetest} from './pom-fixtures';
import commonUtils from '../Utils/CommonUtils';

type commonFixtureType = {
    commonUtils : commonUtils; 
}

export const test =basetest.extend<commonFixtureType>({
    commonUtils : async({},use) => {
        use(new commonUtils);
    }
})

