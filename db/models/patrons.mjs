// SET UP -------------------------------------------------------------
// import mongoose to set up schemas
import mongoose from "mongoose";

// SCHEMA -------------------------------------------------------------
const patronSchema = new mongoose.Schema({
	// automatically sets an id number to the patron
	patron: {
		type: mongoose.Types.ObjectId,
		ref: "Patron"
	}, 
	name: {
		type: String,
		required: true,
		minLength: 1,
		maxLength: 25
	}, 
	email: {
		type: String, 
		match: [/^\S+@\S+\.\S+$/, 'Please enter a valid email address']
	},
	phone: {
		type: String, 
		match: [\d{10}, 'Please enter a valid phone number.']
	}
});

// EXPORT -------------------------------------------------------------
// export entire file for use elsewhere
export default mongoose.model("Patron", patronSchema);