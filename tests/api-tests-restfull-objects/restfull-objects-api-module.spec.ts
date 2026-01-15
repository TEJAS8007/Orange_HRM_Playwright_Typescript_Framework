import {test,expect} from '../../fixtures/hooks-fixture';
import apiPathData from '../../Data-files/api-data/api-path-data.json';
import restData from '../../Data-files/api-data/restful-objects-module-data.json';

let objectId : number;

test('verifying user can create Object',{
    tag : '@API',
    annotation : {
        type : 'Test Case',
        description : 'Verify user can create new Device Object Using POST Call'
    }
},async({request})=> {

    const createObjectRequest = await request.post(apiPathData.object_path,{
        data : restData.object_payload
    });

    const createObjectJsonResponse = await createObjectRequest.json();
    
    expect(createObjectRequest.status()).toBe(200);
    expect(createObjectRequest.statusText()).toBe('OK');

    expect(createObjectJsonResponse).not.toBeNull();
    expect(createObjectJsonResponse).toMatchObject(restData.object_payload);

    objectId = createObjectJsonResponse.id;

});

test('verifying user can Get Object',{
    tag : '@API',
    annotation : {
        type : 'Test Case',
        description : 'Verify user can get Device Object using GET API call'
    }
},async({request})=> {

    const getObjectRequest = await request.get(`${apiPathData.object_path}/${objectId}`);
    
    const getObjectJsonResponse = await getObjectRequest.json();

    expect(getObjectRequest.status()).toBe(200);
    expect(getObjectRequest.statusText()).toBe('OK');

    expect(getObjectJsonResponse).not.toBeNull();
    expect(getObjectJsonResponse).toMatchObject(restData.object_payload);
    expect(getObjectJsonResponse.name).toBe(restData.product_name);
});

test('Verify user can update object',{
    tag : '@API',
    annotation : {
        type : 'Test Case',
        description : 'Verify user can update existing Object using PUT API call'
    }
},async({request})=> {

    const updateObjectRequest = await request.put(`${apiPathData.object_path}/${objectId}`,{
        data : restData.update_Object   
    });

    const updateObjectJsonResponse = await updateObjectRequest.json();

    expect(updateObjectRequest.status()).toBe(200);
    expect(updateObjectRequest.statusText()).toBe('OK');

    expect(updateObjectJsonResponse).not.toBeNull();
    expect(updateObjectJsonResponse).toMatchObject(restData.update_Object);
});

test('Verify user can get object after update',{
    tag: '@API',
    annotation : {
        type : 'Test Case',
        description : 'Verify that user can get Object After Updating Object using GET Call'
    }
},async({request})=> {

    const getObjectRequest = await request.get(`${apiPathData.object_path}/${objectId}`);

    const getObjectJsonResponse = await getObjectRequest.json();
    expect(getObjectRequest.status()).toBe(200);
    expect(getObjectRequest.statusText()).toBe('OK');

    expect(getObjectJsonResponse).not.toBeNull();
    expect(getObjectJsonResponse).toMatchObject(restData.update_Object);

});

test('Verify user update object partially',{
    tag : '@API',
    annotation : {
        type : 'Test Case',
        description : 'Verify that user can update partial Object through PATCH API call'
    }
},async({request})=> {

    const updateOjectRequest = await request.patch(`${apiPathData.object_path}/${objectId}`,{
        data : restData.partial_update_Object
    });
    
    const updateObjectJsonResponse = await updateOjectRequest.json();

    expect(updateOjectRequest.status()).toBe(200);
    expect(updateOjectRequest.statusText()).toBe('OK');

    expect(updateObjectJsonResponse).not.toBeNull();
    expect(updateObjectJsonResponse).toMatchObject(restData.partial_update_Object);
});

test('user can delete object',{
    tag : '@API',
    annotation : {
        type : 'Test Case',
        description : 'Verify user can delete existing user using DELETE API Call'
    }
},async({request})=> {

    const deleteObjectRequest = await request.delete(`${apiPathData.object_path}/${objectId}`);

    expect(deleteObjectRequest.status()).toBe(200);
    expect(deleteObjectRequest.statusText()).toBe('OK');

    const deleteObjectJsonResponse  = await deleteObjectRequest.json();
    expect(deleteObjectJsonResponse).not.toBeNull();
    expect(deleteObjectJsonResponse.message).not.toBeNull();
    expect(deleteObjectJsonResponse.message).toBe(`Object with id = ${objectId} has been deleted.`)

});
