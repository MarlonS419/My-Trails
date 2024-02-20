import { State, Trail } from "../../models/index.js"

class TrailSeeder {
    static async seed() {
        const ri = await State.query().findOne({ name: "Rhode Island"})
        // const ma = await State.query().findOne({ name: "Massachusetts"})

        const trailData = [
            {
                stateId: ri.id,
                name: 'Old pond loop',
                length: 4
            },
            {
                stateId: ri.id,
                name: 'Mount Greylock State Reservation',
                length: 24
            }
        ]

        for(const trail of trailData) {
            const currentTrail = await Trail.query().findOne(trail)
            if (!currentTrail) {
                await Trail.query().insert(trail)
            }
        };
    }
}

export default TrailSeeder