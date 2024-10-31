import Router from "express";
import teamsController from "../controllers/teams.controller.js";

const router = Router();

router.get("/", teamsController.getAllTeams);
router.get("/:name", teamsController.getTeamByName);
router.get("/:id", teamsController.getTeamById);

export default router;
