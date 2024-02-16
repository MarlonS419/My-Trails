import express from "express";
import { Trail } from "../../../models/index.js"

const trailsRouter = new express.Router()

// trailsRouter.get("/", async (req, res) => {
//     try {
//         const trailQuery = await Trail.query()
//         return res.status(200).json({ trail: trailQuery })
//     } catch(error) {
//         return res.status(500).json({ error: error })
//     }
// })

export default trailsRouter