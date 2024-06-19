// import MongoClient class from mongodb package to interact with MongoDB database and perform database actions
import { MongoClient } from "mongodb";

const connectionString = process.env.ATLAS_URI || "";

const client = new MongoClient(connectionString);

let conn;

try {
	conn = await client.connect();
} catch (e) {
	console.error(e);
}

let db = conn.db(""); // add collection name here, ex. "sample_training"

export default db;