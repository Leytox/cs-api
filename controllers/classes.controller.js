import Team from "../models/team.model.js";

const createTeam = async (req, res) => {
  try {
    const { name, description, faction, image } = req.body;

    // Basic validation
    if (!name || !description || !faction || !image) {
      return res.status(400).json({ message: "Missing required fields" });
    }

    const newTeam = new Team({
      name,
      description,
      faction,
      image,
    });

    const savedTeam = await newTeam.save();
    return res.status(201).json(savedTeam);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

const getAllTeams = async (_req, res) => {
  try {
    const maps = await Team.find(undefined, undefined, undefined);
    return res.status(200).json(maps);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const getTeamByName = async (req, res) => {
  const { name } = req.params;
  try {
    const map = await Team.findOne(name, undefined, undefined);
    if (!map) return res.status(404).json({ message: "Team not found" });
    return res.status(200).json(map);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

const getTeamById = async (req, res) => {
  try {
    const map = await Team.findById(req.params.id, undefined, undefined);
    if (!map) return res.status(404).json({ message: "Team not found" });
    return res.status(200).json(map);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

export default { createTeam, getAllTeams, getTeamByName, getTeamById };
