# Express-Shopping-List

https://github.com/danilo-01/Express-Shopping-List

This simple api allows someone to send data about an item and add it to a fake database. 
There are a few things you can do with this api

All these requests are prefixed with /items 
*GET request*
Sending a GET request will retrieve data about all the current items in the fake database array.

*POST request*
Sending a POST request will update the fake database array with information in the body of the request.

*GET with /:name*
Senfing a GET request with the name of an item as an endpoint will return  information about that item if it is in the array.

*PATCH with /:name*
Sending a PATCH request with a name as the endpoint will update that item if it exists in the array.

*Delete with /:name*
Sending a DELETE request with a name of an item as the endpoint will delete that item if it is in the array.
