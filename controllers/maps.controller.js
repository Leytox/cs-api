import Map from "../models/map.model.js";

const createMap = async (req, res) => {
    try {
        const {
            name,
            scenario,
            background,
            otherNotes,
            developers,
            terroristsMission,
            counterTerroristsMission,
        } = req.body;

        // Basic validation
        if (
            !name ||
            !scenario ||
            !terroristsMission ||
            !counterTerroristsMission
        ) {
            return res.status(400).json({message: "Missing required fields"});
        }

        const newMap = new Map({
            name,
            scenario,
            developers,
            background,
            otherNotes,
            terroristsMission,
            counterTerroristsMission,
        });

        const savedMap = await newMap.save();
        return res.status(201).json(savedMap);
    } catch (error) {
        return res.status(500).json({message: error.message});
    }
};

const getAllMaps = async (_req, res) => {
    try {
        const maps = await Map.find(undefined, undefined, undefined);
        return res.status(200).json(maps);
    } catch (error) {
        res.status(500).json({message: error.message});
    }
};

const getMapByName = async (req, res) => {
    const {name} = req.params;
    try {
        const map = await Map.findOne(name, undefined, undefined);
        if (!map) return res.status(404).json({message: "Map not found"});
        return res.status(200).json(map);
    } catch (error) {
        return res.status(500).json({message: error.message});
    }
};

const getMapById = async (req, res) => {
    try {
        const map = await Map.findById(req.params.id, undefined, undefined);
        if (!map) return res.status(404).json({message: "Map not found"});
        return res.status(200).json(map);
    } catch (error) {
        return res.status(500).json({message: error.message});
    }
};

export default {createMap, getAllMaps, getMapByName, getMapById};
