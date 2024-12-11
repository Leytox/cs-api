import Class from "../models/class.model.js";


const getAllClasses = async (_req, res) => {
    try {
        const maps = await Class.find(undefined, "-_id -__v", undefined);
        return res.status(200).json(maps);
    } catch (error) {
        res.status(500).json({message: error.message});
    }
};

const getClassByName = async (req, res) => {
    const {name} = req.params;
    try {
        const map = await Class.findOne(name, "-_id -__v", undefined);
        if (!map) return res.status(404).json({message: "Class not found"});
        return res.status(200).json(map);
    } catch (error) {
        return res.status(500).json({message: error.message});
    }
};

const getClassById = async (req, res) => {
    try {
        const map = await Class.findById(req.params.id, "-_id -__v", undefined);
        if (!map) return res.status(404).json({message: "Class not found"});
        return res.status(200).json(map);
    } catch (error) {
        return res.status(500).json({message: error.message});
    }
};

export default {getAllClasses, getClassByName, getClassById};
