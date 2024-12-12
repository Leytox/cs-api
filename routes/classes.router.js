import Router from "express";
import classesController from "../controllers/classes.controller.js";

const router = Router();

router.get("/", classesController.getAllClasses);
router.get("/name/:name", classesController.getClassByName);
router.get("/faction/:faction", classesController.getClassesByFaction);
router.get("/:id", classesController.getClassById);

export default router;
