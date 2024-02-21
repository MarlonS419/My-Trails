import express from "express";
import { User } from "../../../models/index.js"
import UserSerializer from "../../../serializers/UserSerializer.js"

const userDataRouter = new express.Router()

userDataRouter.get("/:id", async (req, res) => {
    const userID = req.params.id
    try {
        const queriedUser = await User.query().findById(userID)
        const serializedUser = UserSerializer.serializeUser(queriedUser)
        return res.status(200).json({
            user: serializedUser
        })
    } catch (error) {
        return res.status(500).json({ errors: error })
    }
})

export default userDataRouter