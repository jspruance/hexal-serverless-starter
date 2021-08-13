'use strict';                     // this is good javacript practice
const AWS = require('aws-sdk');   // this pulls in main aws library

exports.handler = async (event, context) => {
    const documentClient = new AWS.DynamoDB.DocumentClient();
    let responseBody =  "";   // let's create our response variable currently initialized as an empty string for now, then populate it once we get our responce back from our documentClient.put
    let statusCode = 0;       // this next variable is for our statusCode
    
    const { id, productname } = JSON.parse(event.body);     //extract id and productname from body, parse it (JSON.parse) and pass in (event.body).
    
    const params = {          // let's go ahead and set our params object to "empty" and then, we need to follow specific syntax required for DynamoDB
        TableName: "Products",
        Item: {              // pertains the details in terms of what product we're adding to the table.
            id: id,
            productname: productname 
        }
    }; 
    try {
        const data = await documentClient.put(params).promise();  // a data object to hold our response with params tied to a promise which is a utility supplied as a chain by aws so we can promisify it and tie it to our function.
        responseBody = JSON.stringify(data);                       // now we want to capture the response body after our function, but first we need to create a response variable. So, our response will be a json object that we need to stringify to return it to the UI.
        statusCode = 201;              // common for object created
    }   catch(err) {                   // an error object
        responseBody = 'Unable to put product: ${err}';        // Here, we'll set the responseBody to 'Unable to put product' and output the body to the error message.
        statusCode = 403;             // we'll also set the statusCode to 403 so if anything go wrong we can expect that in the logs
    }

    const response = {
        statusCode: statusCode,       // set to stausCode we created previously
        headers: {                    // object type
            "Content-Type": "application/json"
        },
        body: responseBody            // finally, we'll send back our responseBody
    };
    return response;                   // and now we need to return our response
};
