import Router from "express";
import weaponsController from "../controllers/weapons.controller.js";

const router = Router();

router.get("/", weaponsController.getAllWeapons);
router.get("/:name", weaponsController.getWeaponByName);
router.get("/:id", weaponsController.getWeaponById);

export default router;
