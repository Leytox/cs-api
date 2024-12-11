import Map from "../models/map.model.js";


const getAllMaps = async (_req, res) => {
    try {
        const maps = await Map.find(undefined, "-_id -__v", undefined);
        return res.status(200).json(maps);
    } catch (error) {
        res.status(500).json({message: error.message});
    }
};

const getMapByName = async (req, res) => {
    const {name} = req.params;
    try {
        const map = await Map.findOne(name, "-_id -__v", undefined);
        if (!map) return res.status(404).json({message: "Map not found"});
        return res.status(200).json(map);
    } catch (error) {
        return res.status(500).json({message: error.message});
    }
};

const getMapById = async (req, res) => {
    try {
        const map = await Map.findById(req.params.id, "-_id -__v", undefined);
        if (!map) return res.status(404).json({message: "Map not found"});
        return res.status(200).json(map);
    } catch (error) {
        return res.status(500).json({message: error.message});
    }
};

export default {getAllMaps, getMapByName, getMapById};
