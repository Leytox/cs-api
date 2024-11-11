import Class from "../models/class.model.js";

const createClass = async (req, res) => {
  try {
    const { name, description, faction, image } = req.body;

    // Basic validation
    if (!name || !description || !faction || !image) {
      return res.status(400).json({ message: "Missing required fields" });
    }

    const newClass = new Class({
      name,
      description,
      faction,
      image,
    });

    const savedClass = await newClass.save();
    return res.status(201).json(savedClass);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

const getAllClasses = async (_req, res) => {
  try {
    const maps = await Class.find(undefined, undefined, undefined);
    return res.status(200).json(maps);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const getClassByName = async (req, res) => {
  const { name } = req.params;
  try {
    const map = await Class.findOne(name, undefined, undefined);
    if (!map) return res.status(404).json({ message: "Class not found" });
    return res.status(200).json(map);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

const getClassById = async (req, res) => {
  try {
    const map = await Class.findById(req.params.id, undefined, undefined);
    if (!map) return res.status(404).json({ message: "Class not found" });
    return res.status(200).json(map);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

export default { createClass, getAllClasses, getClassByName, getClassById };
