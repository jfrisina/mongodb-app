// SET UP -------------------------------------------------------------
// import mongoose to set up schemas
import mongoose from "mongoose";


// SCHEMA -------------------------------------------------------------
const eventSchema = new mongoose.Schema({
	// automatically sets an id number to the event
	event: {
		type: mongoose.Types.ObjectId, 
		ref: "Event"
	}, 
	librarian: {
		type: String,
		required: true,
		minLength: 1, 
		maxLength: 25
	},
	eventname: {
		type: String,
		required: true, 
		minLength: 5,
		maxLength: 50
	},
	description: {
		type: String,
		required: true,
		minLength: 1,
		maxLength: 300
	}, 
	location: {
		type: String,
		required: true,
		enum: [
			"Kilton Library",
			"Lebanon Library", 
			"Colburn Park", 
			"Other",
		],
		message: "{VALUE} is not a valid event location.", 
		default: "Lebanon Library", 
	},
	starttime: {
		type: Number,
		required: true
	}, 
	endtime: {
		type: Number,
		required: true
	}
}, {timestamps: true});


// EXPORT -------------------------------------------------------------
// export entire file for use elsewhere
export default mongoose.model("Event", eventSchema);