import TrailSerializer from "./TrailSerializer.js"

class StateSerializer {
    static async getStateDetails(stateObject) {
        const allowedAttributes = ["id", "name"]

        let serializedStateObject = {}

        for (const attribute of allowedAttributes) {
            serializedStateObject[attribute] = stateObject[attribute]
        }

        const relatedTrails = await stateObject.$relatedQuery("trails")
        serializedStateObject.trails = TrailSerializer.getTrailDetails(relatedTrails)
        return serializedStateObject
    }
}

export default StateSerializer