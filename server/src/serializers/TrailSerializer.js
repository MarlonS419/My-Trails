class TrailSerializer {
    static getTrailDetails(trails) {
        const allowedAttributes = ["id", "name", "length"]

        const serializedTrails = trails.map((trail) => {
            const serializedTrail = {}
            for (const attribute of allowedAttributes) {
                serializedTrail[attribute] = trail[attribute]
            }
            return serializedTrail
        })
        return serializedTrails
    }
}
export default TrailSerializer