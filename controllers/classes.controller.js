import Class from "../models/class.model.js";


const getAllClasses = async (_req, res) => {
    try {
        const classes = await Class.find(undefined, "-_id -__v", undefined);
        return res.status(200).json(classes);
    } catch (error) {
        res.status(500).json({message: error.message});
    }
};

const getClassByName = async (req, res) => {
    const {name} = req.params;
    try {
        const unique_class = await Class.findOne(name, "-_id -__v", undefined);
        if (!unique_class) return res.status(404).json({message: "Class not found"});
        return res.status(200).json(unique_class);
    } catch (error) {
        return res.status(500).json({message: error.message});
    }
};

const getClassesByFaction = async (req, res) => {
    const {faction} = req.params;
    try {
        const classes = await Class.find({faction}, "-_id -__v", undefined);
        if (!classes) return res.status(404).json({message: "Classes not found"});
        return res.status(200).json(classes);
    } catch (error) {
        return res.status(500).json({message: error.message});
    }
}

const getClassById = async (req, res) => {
    try {
        const unique_class = await Class.findById(req.params.id, "-_id -__v", undefined);
        if (!unique_class) return res.status(404).json({message: "Class not found"});
        return res.status(200).json(unique_class);
    } catch (error) {
        return res.status(500).json({message: error.message});
    }
};

export default {getAllClasses, getClassByName, getClassesByFaction, getClassById};
