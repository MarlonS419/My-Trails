const Model = require("./Model.js")

class Trail extends Model {
    static get tableName() {
        return "trails"
    }

    static get jsonSchema () {
        return {
            type: "object",
            required: ["name"],
            properties: {
                name: { type: "string" },
                length: { type: ["string", "integer"] }
            }
        }
    }

    static get relationMappings () {
        const { State } = require("./index.js")

        return {
            state: {
                relation: Model.BelongsToOneRelation,
                modelClass: State,
                join: {
                    from: "trails.stateId",
                    to: "states.id"
                }
            }
        }
    }
}

module.exports = Trail