import StateSerializer from "../serializers/StateSerializer.js"
import { State } from "../models/index.js"

class TrailSerializer {
    static getTrailDetails(trails) {
        const allowedAttributes = ["id", "name", "length"]

        const serializedTrails = trails.map((trail) => {
            let serializedTrail = {}
            for (const attribute of allowedAttributes) {
                serializedTrail[attribute] = trail[attribute]
            }
            return serializedTrail
        })
        return serializedTrails
    }

    static async getInfoForTrailShow(trail) {
        const allowedAttributes = ["id", "stateId", "name", "length"]

        let serializedTrail = {}

        for (const attribute of allowedAttributes) {
            serializedTrail[attribute] = trail[attribute]
        }

        const relatedState = await trail.$relatedQuery("state")
        serializedTrail.state = relatedState.name
        return serializedTrail
    }
}
export default TrailSerializer