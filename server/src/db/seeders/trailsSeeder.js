import { State } from "../../models/index.js"

class TrailSeeder {
    static async seed() {
        const ri = await State.query().findOne({ name: "Rhode Island"})
        const ma = await State.query().findOne({ name: "Massachusetts"})

        const trailData = [
            {
                stateId: ri.id,
                name: 'Old pond loop',
                length: "4"
            },
            {
                stateId: ma.id,
                name: 'Mount Greylock State Reservation',
                length: '24'
            }
        ]
    }
}