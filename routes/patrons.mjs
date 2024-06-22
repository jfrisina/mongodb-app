// SET UP -------------------------------------------------------------
// import necessary packages, database, and other files/info
import express from "express";
import patronModel from "../db/models/patrons.mjs";
import db from "../db/conn.mjs";
import { ObjectId } from "mongodb";

// set variable for routing function/action/code
const router = express.Router();

// SET UP CRUD ACTIONS ------------------------------------------------
// set up to create a new patron 
router.post('/', async (req, res) => {	
	let collection = await db.collection("patrons");
	let newDocument = req.body;
	newDocument.date = new Date();
	let result = await collection.insertOne(new Document);
	res.send(result).status(204);
});

// set up /patrons page to provide all patron info 
router.get('/', async (req, res) => {
	res.send('Getting all patron info');
}); 

// set up to delete patron
router.delete('/', async (req, res) => {
	res.send('Deleting patron');
});

// set up to update patron
router.put('/', async (req, res) => {
	res.send('Updating patron');
});

// EXPORT ------------------------------------------------
// export this whole file so it can be used elsewhere (in index.mjs)
export default router;
