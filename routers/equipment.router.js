import Router from "express";
import equipmentController from "../controllers/equipment.controller.js";

const router = Router();

router.post("/", equipmentController.createEquipment);
router.get("/", equipmentController.getAllEquipment);
router.get("/:name", equipmentController.getEquipmentByName);
router.get("/:id", equipmentController.getEquipmentById);

export default router;
