import Equipment from "../models/equipment.model.js";

const getAllEquipment = async (req, res) => {
  try {
    const equipment = await Equipment.find(undefined, undefined, undefined);
    return res.status(200).json(equipment);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const getEquipmentByName = async (req, res) => {
  const { name } = req.params;
  try {
    const equipment = await Equipment.find(name, undefined, undefined);
    if (!equipment)
      return res.status(404).json({ message: "Equipment not found" });
    return res.status(200).json(equipment);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

const getEquipmentById = async (req, res) => {
  try {
    const equipment = await Equipment.findById(
      req.params.id,
      undefined,
      undefined,
    );
    if (!equipment)
      return res.status(404).json({ message: "Equipment not found" });
    return res.status(200).json(equipment);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

export default { getAllEquipment, getEquipmentByName, getEquipmentById };
