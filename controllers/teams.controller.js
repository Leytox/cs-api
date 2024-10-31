import Team from "../models/team.model.js";

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

export default { getAllTeams, getTeamByName, getTeamById };
