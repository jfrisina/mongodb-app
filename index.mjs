// import modules
import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv"; // an npm package that loads the variables from .env into process.env. Helps keep sensitive info separate from codebase

// load environment variables from .env file
dotenv.config();

// connect to Mongoose
await mongoose.connect(process.env.ATLAS_URI);

// set up express variable so you can use express functions
const app = express();

// set up app to automatically parse JSOM content sent in the body of incoming requests
app.use(express.json());

// set up home page GET 
app.get('/', (req, res) => {
	res.send("My Events API");
})



// set up port listening / start the Express server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
	console.log(`Server is running on port: ${PORT}`);
})

