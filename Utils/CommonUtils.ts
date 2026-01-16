import cryptojs from 'crypto-js';

export  class CommonUtils {

    private secret_key: string;
    
    /**
     * initializing secret key
     */
    constructor() {
        //this.secret_key = process.env.SECRET_KEY ? process.env.SECRET_KEY : "";

        if(process.env.SECRET_KEY) {
            this.secret_key = process.env.SECRET_KEY;
        }
        else {
            throw new Error('please provide Secret Key while starting Execution');
        }
    }

    /**
     * provide Encrypted data from string..
     * @param data 
     * @returns 
     */
    public encryptData(data:string) {
        const encrypt_data = cryptojs.AES.encrypt(data,this.secret_key).toString();
        return encrypt_data;
    }

    /**
     * provide Decrypted data from string
     * @param encData 
     * @returns 
     */
    public decryptData(encData:string) {
        const decryptedData = cryptojs.AES.decrypt(encData, this.secret_key).toString(cryptojs.enc.Utf8);
        return decryptedData;
    }   
}
