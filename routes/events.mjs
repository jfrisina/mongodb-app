// SET UP -------------------------------------------------------------
// import necessary packages, database, and other files/info
import express from "express";
import eventsModel from "../db/models/events.mjs";
import patronsModel from "../db/models/patrons.mjs";

// set up using router function from express by setting to a variable
const router = express.Router();

// SET UP CRUD ACTIONS ------------------------------------------------
// create a new event, whether it's to an already existing event series, or as a standalone event
router.post('/', async (req, res) => {
	console.log(req.body);
	const dbEvent = await eventsModel.find({ eventname });
	const {eventname, content} = req.body;
	if (dbEvent) {
		const event = await event.create({
			body: newEvent, 
			event: dbEvent._id
		});
		return res.json(event);
	} else {
		const newEvent = await event.create({ eventname });
		const event = event.create({
			body: newEvent,
			event: newEvent._id, 
			content: content, 
			eventname: newEvent.eventname
		});
		return res.json(event);
	}
});

// read
router.get('/', async (req, res) => {
	res.send("Getting all events");
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
