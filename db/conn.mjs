/* DATABASE CONNECTION INFO -------------*/

// import MongoClient class from mongodb package to interact with MongoDB database and perform database actions
import { MongoClient } from "mongodb";

// bring in and set up the database connection string as a variable
const connectionString = process.env.ATLAS_URI
// set up and create a new connection instance between node and mongodb using node class
const client = new MongoClient(connectionString);

// set up variable outside of code block for connection
let conn;

// error handling for if there's a failure to connect to the mongo instance
try {
	conn = await client.connect();
} catch (e) {
	console.error(e);
}

// select which database to connect to
let db = conn.db(""); // add collection name here, ex. "sample_training"

// exporting this whole file of code as a module called db
export default db;