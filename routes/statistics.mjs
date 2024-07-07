// SET UP -------------------------------------------------------------
// import necessary packages, database, and other files/info
import express from "express";
import statisticModel from "../db/models/statistics.mjs";
import db from "../db/conn.mjs";
import { ObjectId } from "mongodb";

// set variable for routing function/action/code
const router = express.Router();


// SET UP CRUD ACTIONS ------------------------------------------------
// CREATE: set up to create a new statistic
router.post('/', async (req, res) => {
	try {
		let newStatistic = new statisticModel(req.body);
		let result = await newStatistic.save();
		res.status (201).json(result);
	} catch (error) {
		res.status(500).json({ error: error.message });
	}
})

// READ: set up /statistics page to provide all statistics info
router.get('/', async (req, res) => {
	try {
		let statistics = await statisticModel.find();
		res.status(200).json(statistics);
	} catch (error) {
		res.status(500).json({ error: error.message });
	}
});

// READ: set up /add-statistics page to have a form
router.get('/add-statistic', async (req, res) => {
	res.render('addItem');
});


// Is this the right code for if I wasn't using mongoose? 

// router.get("/", async (req, res) => {
// 	try {
// 		let collection = await db.collection("statistics");
// 		res.status(200).send(collection);
// 	} catch (error) {
// 		console.error("Error getting statistics:", error);
// 		res.status(500).send("Internal Server Error");
// 	}
// });

// UPDATE: set up to update a statistic
router.put('/', async (req, res) => {
	res.send('Updating statistic');
});

// DELETE: set up to delete statistic 
router.delete('/', async (req, res) => {
	res.send('Deleting statistic');
});

// EXPORT ------------------------------------------------
// export this whole file so it can be used elsewhere (in index.mjs)
export default router;