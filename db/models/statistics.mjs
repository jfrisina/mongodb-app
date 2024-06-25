// SET UP -------------------------------------------------------------
// import mongoose to set up schemas
import mongoose from "mongoose";

// SCHEMA -------------------------------------------------------------
const statisticSchema = new mongoose.Schema({
	attendees: {
		type: Number, 
		minLength: 1, 
		maxLength: 9000,
		required: true
	},
	eventname: {
		type: String,
		required: true
	}, 
	date: {
		type: Date,
		required: true
	}
});


// EXPORT -------------------------------------------------------------
// export entire file for use elsewhere
const Statistic = mongoose.model("Statistic", statisticSchema);

export default Statistic;