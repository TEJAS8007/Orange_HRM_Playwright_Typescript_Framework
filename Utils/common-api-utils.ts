import { APIRequestContext } from "playwright";
import apiPathData from '../Data-files/api-data/api-path-data.json'
import restData from '../Data-files/api-data/restful-booker-module-data.json';
import { CommonUtils } from "./CommonUtils";

export class CommonAPIUtils {

    readonly request : APIRequestContext;
    
    constructor(request:APIRequestContext) {
        this.request=request;
    }

    public async createToken() {

        const commonUtils = new CommonUtils();
        const username = commonUtils.decryptData(process.env.API_USERNAME!);
        const password = commonUtils.decryptData(process.env.API_PASSWORD!);
        
        const createTokenResponse = await this.request.post(apiPathData.auth_path,{
            data : {
                "username" : username,
                "password" : password
            }
        });

        const createTokenJsonResponse = await createTokenResponse.json();
        return createTokenJsonResponse.token;
    }
}