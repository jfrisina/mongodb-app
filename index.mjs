// import modules
import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv"; // an npm package that loads the variables from .env into process.env. Helps keep sensitive info separate from codebase

// add import statements for the routes
//import userRouter from './routes/users.js'



// load environment variables from .env file
dotenv.config();

// connect to Mongoose
//await mongoose.connect(process.env.ATLAS_URI);

// add try/catch block for error handling for if there's an issue connecting to mongoose
  



// set up express variable so you can use express functions
const app = express();

// set up port to check the environment variable set in the operating system's environment (which is where Node.js is running). Or 3000, which will be the fallback so that you always know to check there when testing an issue or a new feature
const PORT = process.env.PORT || 3000;

// set up app to automatically parse JSOM content sent in the body of incoming requests
app.use(express.json());

// telling express to use the router for /users
//app.use('/users', userRouter);

// set up home page GET 
app.get('/', (req, res) => {
	res.send("My AirBNB/Events API");
});


// set up port listening / start the Express server
app.listen(PORT, () => {
	console.log(`Server is running on port: ${PORT}`);
})

