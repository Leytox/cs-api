import Router from "express";
import teamsController from "../controllers/classes.controller.js";

const router = Router();

router.post("/", teamsController.createClass);
router.get("/", teamsController.getAllClasses);
router.get("/:name", teamsController.getClassByName);
router.get("/:id", teamsController.getClassById);

export default router;
