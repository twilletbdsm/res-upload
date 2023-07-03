import AWS from 'aws-sdk';

// Create a new DynamoDB DocumentClient
const documentClient = new AWS.DynamoDB.DocumentClient();

// Define the table name
const tableName = 'nurse-resume-database-test1';

// Function to save a nurse resume JSON to DynamoDB
export const saveResumeToDynamoDB = async (resumeJSON) => {
  try {
    // Create the DynamoDB put request parameters
    const putParams = {
      TableName: tableName,
      Item: resumeJSON
    };

    // Put the resume JSON into the table
    await documentClient.put(putParams).promise();

    // Log the successful save
    console.log(`Saved resume to DynamoDB table ${tableName}`);
  } catch (err) {
    // Log any errors
    console.error(`Error saving resume to DynamoDB: ${err}`);
    throw err;
  }
};
