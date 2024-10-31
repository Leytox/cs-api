import mongoose from "mongoose";

const mapSchema = new mongoose.Schema({
  name: { type: String, required: true },
  scenario: {
    type: String,
    enum: ["Bomb defuse (de)", "Hostage Rescue (cs)", "Assassination (as)"],
    required: true,
  },
  developers: [{ type: String, required: true }],
  terroristMission: { type: String, required: true },
  counterTerroristMission: { type: String, required: true },
});

export default mongoose.model("Map", mapSchema);
