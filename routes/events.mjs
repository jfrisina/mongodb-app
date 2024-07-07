// SET UP -------------------------------------------------------------
// import necessary packages, database, and other files/info
import express from "express";
import Event from "../db/models/events.mjs";
import mongoose from "mongoose";
// set up using router function from express by setting to a variable
const router = express.Router();


// SET UP CRUD ACTIONS ------------------------------------------------
// create
// create a new event, whether it's to an already existing event series, or as a standalone event
router.post('/', async (req, res) => {
	try {
		console.log(req.body);
		const {eventname, content} = req.body;
		// check if event name exists in database
		const dbEvent = await Event.find({ eventname });
		if (dbEvent) {
			const newEvent = await Event.create({
				eventname,
				description,
			});
			return res.json(Event);
	} else {
		const newEvent = await Event.create({ 
			eventname, 
			description
		});
		return res.json(Event);
	}
} catch (err) {
	console.error(err);
	res.status(500).json({ message: "Server error" });
}
});

// read
router.get('/', async (req, res) => {
	try {
		const result = await Event.find();
		res.json(result);
	} catch (err) {
		console.error(err);
		res.status(500).json({ message: "Server error" });
	}
});

// update
router.put('/', async (req, res) => {
	res.send('Updating event');
});

// delete
router.delete('/', async (req, res) => {
	res.send('Deleting event');
});

// EXPORT ------------------------------------------------
// export this whole file as a module for use in other files
export default router;
