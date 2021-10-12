'use strict';
const AWS = require('aws-sdk');

exports.handler = async (event, context) => {
    const documentClient = new AWS.DynamoDB.DocumentClient();
    let responseBody =  "";   
    let statusCode = 0; 
    
    const { id, productname }
    const params = {         
        TableName: "Products",

        
        Key: {     
            id: id,
            

        },
        UpdateExpression: "set productname = :n", 
        ExpressionAttributeValues: {
            ":n" : productname,
           
        },
        ReturnValues: "UPDATED_NEW"
    }; 
    try {
        const data = await documentClient.update(params).promise();  
        responseBody = JSON.stringify(data); 
        statusCode = 204; 
    }   catch(err) {   
        responseBody = 'Unable to update carrier: ${err}';  
        statusCode = 403;
    }

    const response = {
        statusCode: statusCode,  
        headers: {     
            "Content-Type": "application/json"
        },
        body: responseBody      
    };
    return response;     
};


/*

aws dynamodb update-item \
    --table-name ProductCatalog \
    --key '{"Id":{"N":"789"}}' \
    --update-expression "SET ProductCategory = :c, Price = :p" \
    --expression-attribute-values file://values.json \
    --return-values ALL_NEW


*/

/* also... https://dynobase.dev/dynamodb-nodejs/#update-item

const AWS = require("aws-sdk")
AWS.config.update({ region: "us-east-1" })
const dynamoDB = new AWS.DynamoDB.DocumentClient()

dynamoDB
  .update({
    TableName: "my-table",
    Key: {
      id: "123",
    },
    UpdateExpression: `set score = :score + :value`,
    ExpressionAttributeValues: {
      ":value": 1,
    },
  })
  .promise()
  .then(data => console.log(data.Attributes))
  .catch(console.error)





*/