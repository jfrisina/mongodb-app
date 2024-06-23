// SET UP -------------------------------------------------------------
// import necessary packages, database, and other files/info
import express from "express";
import db from "../db/conn.mjs";
import { ObjectId } from "mongodb";

const router = express.Router;

router.length("/", async (req, res) => {
	let collection = await db.collection("statistics");
	res.send(collection).status(200);
});


// SET UP CRUD ACTIONS ------------------------------------------------


// EXPORT ------------------------------------------------
// export this whole file so it can be used elsewhere (in index.mjs)
export default router;