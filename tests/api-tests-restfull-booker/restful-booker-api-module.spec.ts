import { request } from 'playwright';
import {test,expect} from '../../fixtures/hooks-fixture';
import apiPathData from '../../Data-files/api-data/api-path-data.json';
import restData from '../../Data-files/api-data/restful-booker-module-data.json';

let bookingID:number;

test('Fetching user details using Get API call',
    {
        tag : '@API',
        annotation : {
            type : 'Test Case',
            description : 'Verify that User able to fetch data using Get API call'
        }
    },async({request})=> {

        const bookingresponse = await request.get(apiPathData.booking_path);
        const bookingIDresponse = await bookingresponse.json();
        console.log(bookingIDresponse);

        // Verification points added on Response.....
        expect(bookingresponse.status()).toBe(200);
        expect(bookingresponse.statusText()).toBe('OK');
        expect(bookingIDresponse).not.toBeNull();
        expect(bookingresponse.headers()['content-type']).toBe(restData.content_type);

    });

test('Verifying user is able to create new bookings',{
    tag : '@API',
    annotation : {
        type : 'Test Case',
        description : 'Verify that user is able to create new Booking using POST call nd get valid response'
    }
},async({request})=> {

    const createBookingRequest = await request.post(apiPathData.booking_path,{
        data : restData.create_booking
    });

    const createBookingResponse = await createBookingRequest.json();
    bookingID = createBookingResponse.bookingid;
    console.log(createBookingResponse);
    expect(createBookingRequest.status()).toBe(200);
    expect(createBookingResponse.booking).toMatchObject(restData.create_booking);

});    

test('Fetching user details with specific ID',{
    tag : '@API',
    annotation : {
        type : 'Test Case',
        description : 'Verify that user is able to fetch details using Get Method'
    }
},async({request})=> {

    const bookingrequest = await request.get(`${apiPathData.booking_path}/${bookingID}`);
    expect(bookingrequest.status()).toBe(200);
    expect(bookingrequest.statusText()).toBe('OK');

    const bookingResponse = await bookingrequest.json();
    console.log(bookingResponse);
    expect(bookingResponse).not.toBeNull();
    expect(bookingResponse.firstname).not.toBeNull();

});

test('Verifying user can update the existing booking',{
    tag :'@API',
    annotation : {
        type : 'Test Case',
        description : 'Verify that user is able to update the existing booking with PUT API call'
    }
},async({request,commonApiUtils})=> {

    const token = await commonApiUtils.createToken();
    console.log('TOKEN : ',token);
    const updateBookingRequest = await request.put(`${apiPathData.booking_path}/${bookingID}`,{
        headers : {
            Cookie:`token=${token}`
        },
        data : restData.update_booking
    });
 
    expect(updateBookingRequest.status()).toBe(200);

    const updateBookingResponse = await updateBookingRequest.json();
    expect(updateBookingResponse).toMatchObject(restData.update_booking);
    console.log(updateBookingResponse);

});

test('Verifying user can update partial data',{
    tag : '@API',
    annotation : {
        type : 'Test Case',
        description : 'Verifying user can update partial data using PATCH call'
    }
},async({request,commonApiUtils})=>{
 
    const token = await commonApiUtils.createToken();
  
    const updateRequest = await request.patch(`${apiPathData.booking_path}/${bookingID}`,{
        headers : {
            Cookie:`token=${token}`
        },
        data : restData.partial_update
    });

    expect(updateRequest.status()).toBe(200);
    
    const updateJsonResponse = await updateRequest.json();
    expect(updateJsonResponse).not.toBeNull();
    expect(updateJsonResponse).toMatchObject(restData.partial_update);
    console.log(updateJsonResponse);

});

test('Verifying user can delete existing booking',{
    tag : '@API',
    annotation : {
        type : 'Test Case',
        description : 'Verifying user can delete exissting booking using DELETE call'
    }
},async({request,commonApiUtils})=> {

    const token = await commonApiUtils.createToken();

    const deleteRequest = await request.delete(`${apiPathData.booking_path}/${bookingID}`,{
        headers : {
            Cookie:`token=${token}`
        }
    });

    expect(deleteRequest.status()).toBe(201);
    expect(deleteRequest.statusText()).toBe('Created');

});

test('Verify user fetch booking after DELETE call',{
    tag : '@API',
    annotation : {
        type : 'Test Case',
        description : 'Verify that user get Booking details after using DELETE call over booking'
    }
},async({request})=> {

    const bookingRequest = await request.get(`${apiPathData.booking_path}/${bookingID}`);
    
    expect(bookingRequest.status()).toBe(404);
    expect(bookingRequest.statusText()).toBe('Not Found');

});

