import express from "express";
import { State } from "../../../models/index.js"
import StateSerializer from "../../../serializers/StateSerializer.js";

const statesRouter = new express.Router()

statesRouter.get("/", async (req, res) => {
    try {
        const responseFromStateQuery = await State.query()
        return res.status(200).json({ states: responseFromStateQuery })
    } catch(error) {
        return res.status(500).json({ error: error })
    }
})

statesRouter.get("/:id", async (req, res) => {
    const id = req.params.id
    try {
        const selectedState = await State.query().findById(id)
        const serializedState = await StateSerializer.getStateDetails(selectedState)
        res.status(200).json({ state: serializedState})
    } catch (error) {
        res.status(500).json({errors: error})
    }
})

export default statesRouter