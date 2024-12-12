import Router from "express";
import equipmentController from "../controllers/equipment.controller.js";

const router = Router();

router.get("/", equipmentController.getAllEquipment);
router.get("/name/:name", equipmentController.getEquipmentByName);
router.get("/faction/:faction", equipmentController.getEquipmentByFaction);
router.get("/:id", equipmentController.getEquipmentById);

export default router;
