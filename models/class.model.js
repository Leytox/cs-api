import mongoose from "mongoose";
const classSchema = new mongoose.Schema({
  name: { type: String, required: true },
  description: { type: String, required: true },
  faction: {
    type: String,
    enum: ["Terrorist", "Counter-Terrorist"],
    required: true,
  },
  image: { type: String, required: true },
});
export default mongoose.model("Class", classSchema);
