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
	try {
		let newPatron = new patronModel(req.body);
		newPatron.date = new Date();
		let result = await newPatron.save();
		res.status(201).json(result);
	} catch (error) {
		res.status(500).json({error: error.message });
	}
	// if I was using plain mongodb without mongoose:
	// let collection = await db.collection("patrons");
	// let newDocument = req.body;
	// newDocument.date = new Date();
	// let result = await collection.insertOne(new Document);
	// res.send(result).status(204);
});

// set up /patrons page to provide all patron info 
router.get('/', async (req, res) => {
	try {
		let patrons = await patronModel.find();
		res.status(200).json(patrons);
	} catch (error) {
		res.status(500).json({ error: error.message })
	}
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
