const Model = require("./Model.js")

class State extends Model {
    static get tableName() {
        return "states"
    }

    static get jsonSchema () {
        return {
            type: "object",
            required: ["name"],
            properties: {
                name: { type: "string" }
            }
        }
    }

    static get relationMappings() {
        const { Trail } = require("./index.js")

        return {
            trails: {
                relation: Model.HasManyRelation,
                modelClass: Trail,
                join: {
                    from: "states.id",
                    to: "trails.stateId"
                }
            }
        }
    }
}

module.exports = State