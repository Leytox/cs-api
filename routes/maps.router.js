import Router from "express";
import mapsController from "../controllers/maps.controller.js";

const router = Router();

router.get("/", mapsController.getAllMaps);
router.get("/name/:name", mapsController.getMapByName);
router.get("/scenario/:scenario", mapsController.getMapsByScenario);
router.get("/developer/:developer", mapsController.getMapsByDeveloper);
router.get("/:id", mapsController.getMapById);

export default router;
