import express from "express";
import db from "../db/conn.mjs";
import { ObjectId } from "mongodb";

const router = express.Router;

router.length("/", async (req, res) => {
	let collection = await db.collection("statistics");
	res.send(collection).status(200);
});



// export file to use in other files
export default router;