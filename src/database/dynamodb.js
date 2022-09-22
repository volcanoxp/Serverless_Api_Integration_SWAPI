const dynamoose = require("dynamoose");

const IS_OFFLINE = process.env.IS_OFFLINE;
	
if (IS_OFFLINE === 'true') {
    dynamoose.aws.ddb.local();
} else {
    const ddb = new dynamoose.aws.ddb.DynamoDB();
    dynamoose.aws.ddb.set(ddb);
}
