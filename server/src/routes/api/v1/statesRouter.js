import express from "express";
import { State } from "../../../models/index.js"

const statesRouter = new express.Router()

statesRouter.get("/", async (req, res) => {
    try {
        const responseFromStateQuery = await State.query()
        return res.status(200).json({ states: responseFromStateQuery })
    } catch(error) {
        return res.status(500).json({ error: error })
    }
})

export default statesRouter