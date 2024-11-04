import Router from "express";
import mapsController from "../controllers/maps.controller.js";

const router = Router();

router.post("/", mapsController.createMap);
router.get("/", mapsController.getAllMaps);
router.get("/:name", mapsController.getMapByName);
router.get("/:id", mapsController.getMapById);

export default router;
