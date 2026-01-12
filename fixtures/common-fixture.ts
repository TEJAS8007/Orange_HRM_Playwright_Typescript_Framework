import {test as basetest} from './pom-fixtures';
import { CommonUtils } from '../Utils/CommonUtils';
import { CommonAPIUtils } from '../Utils/common-api-utils';
import { request } from 'playwright';

type commonFixtureType = {
    commonUtils : CommonUtils; 
    commonApiUtils : CommonAPIUtils;
}

export const test =basetest.extend<commonFixtureType>({
    commonUtils : async({},use) => {
        await use(new CommonUtils);
    },

    commonApiUtils : async({request},use) => {
        await use(new CommonAPIUtils(request));
    }
})

