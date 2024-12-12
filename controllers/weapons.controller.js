import Weapon from "../models/weapon.model.js";

const getAllWeapons = async (req, res) => {
    const {limit, offset} = req.query;
    try {
        const weapon = await Weapon.find(undefined, "-_id -__v", undefined).limit(parseInt(limit)).skip(parseInt(offset));
        return res.status(200).json(weapon);
    } catch (error) {
        res.status(500).json({message: error.message});
    }
};

const getWeaponByName = async (req, res) => {
    const {name} = req.params;
    try {
        const weapon = await Weapon.find({name}, "-_id -__v", undefined);
        if (!weapon) return res.status(404).json({message: "Weapon not found"});
        return res.status(200).json(weapon);
    } catch (error) {
        return res.status(500).json({message: error.message});
    }
};

const getWeaponsByType = async (req, res) => {
    const {type} = req.params;
    try {
        const weapon = await Weapon.find({type}, "-_id -__v", undefined);
        if (!weapon) return res.status(404).json({message: "Weapon not found"});
        return res.status(200).json(weapon);
    } catch (error) {
        return res.status(500).json({message: error.message});
    }
};

const getWeaponsByCountry = async (req, res) => {
    const {country} = req.params;
    try {
        const weapon = await Weapon.find({countryOfOrigin: country}, "-_id -__v", undefined);
        if (!weapon) return res.status(404).json({message: "Weapon not found"});
        return res.status(200).json(weapon);
    } catch (error) {
        return res.status(500).json({message: error.message});
    }
}

const getWeaponById = async (req, res) => {
    try {
        const weapon = await Weapon.findById(req.params.id, "-_id -__v", undefined);
        if (!weapon) return res.status(404).json({message: "Weapon not found"});
        return res.status(200).json(weapon);
    } catch (error) {
        return res.status(500).json({message: error.message});
    }
};

export default {getAllWeapons, getWeaponByName, getWeaponsByType, getWeaponsByCountry, getWeaponById};
