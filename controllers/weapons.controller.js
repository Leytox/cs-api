import Weapon from "../models/weapon.model.js";

const createWeapon = async (req, res) => {
  try {
    const {
      name,
      type,
      price,
      countryOfOrigin,
      caliber,
      clipCapacity,
      rateOfFire,
      weight,
      projectileWeight,
      muzzleVelocity,
      muzzleEnergy,
      image,
    } = req.body;

    // Basic validation
    if (
      !name ||
      !type ||
      !price ||
      !countryOfOrigin ||
      !caliber ||
      !clipCapacity ||
      !rateOfFire ||
      !weight ||
      !projectileWeight ||
      !muzzleVelocity ||
      !muzzleEnergy
    ) {
      return res.status(400).json({ message: "Missing required fields" });
    }

    const newWeapon = new Weapon({
      name,
      type,
      price,
      countryOfOrigin,
      caliber,
      clipCapacity,
      rateOfFire,
      weight,
      projectileWeight,
      muzzleVelocity,
      muzzleEnergy,
      image,
    });

    const savedWeapon = await newWeapon.save();
    return res.status(201).json(savedWeapon);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

const getAllWeapons = async (_req, res) => {
  try {
    const weapon = await Weapon.find(undefined, undefined, undefined);
    return res.status(200).json(weapon);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const getWeaponByName = async (req, res) => {
  const { name } = req.params;
  try {
    const weapon = await Weapon.find(name, undefined, undefined);
    if (!weapon) return res.status(404).json({ message: "Weapon not found" });
    return res.status(200).json(weapon);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

const getWeaponById = async (req, res) => {
  try {
    const weapon = await Weapon.findById(req.params.id, undefined, undefined);
    if (!weapon) return res.status(404).json({ message: "Weapon not found" });
    return res.status(200).json(weapon);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

export default { createWeapon, getAllWeapons, getWeaponByName, getWeaponById };
