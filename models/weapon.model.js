import mongoose from "mongoose";

const weaponSchema = new mongoose.Schema({
  name: { type: String, required: true },
  type: { type: String, required: true },
  price: { type: Number, required: true },
  countryOfOrigin: { type: String, required: true },
  faction: [{
    type: String,
    enum: ["Terrorist", "Counter-Terrorist"],
    required: true,
  }],
  caliber: { type: String, required: true },
  clipCapacity: { type: Number, required: true },
  rateOfFire: { type: Number, required: true },
  weight: { type: Number, required: true },
  projectileWeight: { type: Number, required: true },
  muzzleVelocity: { type: Number, required: true },
  muzzleEnergy: { type: Number, required: true },
  image: { type: String },
});

export default mongoose.model("Weapon", weaponSchema);
