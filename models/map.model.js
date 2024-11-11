import mongoose from "mongoose";

const mapSchema = new mongoose.Schema({
    name: {type: String, required: true},
    scenario: {
        type: String,
        enum: ["Bomb/Defuse", "Hostage Rescue", "Assassination"],
        required: true,
    },
    developers: [{type: String, required: false}],
    background: {type: String, default: null},
    otherNotes: {type: String, default: null},
    counterTerroristsMission: {type: String, required: true},
    terroristsMission: {type: String, required: true}
});

export default mongoose.model("Map", mapSchema);
