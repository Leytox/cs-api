import Router from "express";
import mapsController from "../controllers/maps.controller.js";

const router = Router();

router.get("/", mapsController.getAllMaps);
router.get("/:name", mapsController.getMapByName);
router.get("/:id", mapsController.getMapById);

export default router;
