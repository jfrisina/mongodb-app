// import modules, packages, routes, and other files as needed
import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv"; // an npm package that loads the variables from .env into process.env. Helps keep sensitive info separate from codebase
import patrons from "./routes/patrons.mjs";
import events from "./routes/events.mjs";
import cors from "cors";

// load environment variables from .env file
dotenv.config();

// connect to Mongoose
await mongoose.connect(process.env.ATLAS_URI);

// set up express variable so you can use express functions
const app = express();

// set up port to check the environment variable set in the operating system's environment (which is where Node.js is running). Or 3000, which will be the fallback so that you always know to check there when testing an issue or a new feature
const PORT = process.env.PORT || 5000;

// security to prevent Cross-Origin Resource Sharing (CORS). The browser will restrict web pages from making requests to a different domain than the one that served the original web page. Prevents malicious websites from accessing resources on other websites. 
app.use(cors());

// set up app to automatically parse JSOM content sent in the body of incoming requests
app.use(express.json());

// set up home page GET 
app.get('/', (req, res) => {
	res.send("My Events App");
});

// Load routes
app.use("/patrons", patrons);
app.use("/events", events);

// global error handling
app.use((err, _req, res, next) => {
	// show the error stack trace for debugging
	console.error(err.stack); 
	res.status(500).send("An unexpected error has occured.")
});


// set up port listening / start the Express server
app.listen(PORT, () => {
	console.log(`Server is running on port: ${PORT}`);
})

