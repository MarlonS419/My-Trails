import express from "express";
import { Trail } from "../../../models/index.js"
import TrailSerializer from "../../../serializers/TrailSerializer.js";

const trailsRouter = new express.Router()

trailsRouter.get("/:id", async (req, res) => {
    const id = req.params.id
    try {
        const selectedTrail = await Trail.query().findById(id)
        const serializedTrail = await TrailSerializer.getInfoForTrailShow(selectedTrail)
        return res.status(200).json({ trail: serializedTrail })
    } catch(error) {
        return res.status(500).json({ error: error })
    }
})

export default trailsRouter