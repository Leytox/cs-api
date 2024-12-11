import Router from "express";
import classesController from "../controllers/classes.controller.js";

const router = Router();

router.get("/", classesController.getAllClasses);
router.get("/:name", classesController.getClassByName);
router.get("/:id", classesController.getClassById);

export default router;
