import Router from "express";
import weaponsController from "../controllers/weapons.controller.js";

const router = Router();

router.get("/", weaponsController.getAllWeapons);
router.get("/name/:name", weaponsController.getWeaponByName);
router.get("/type/:type", weaponsController.getWeaponsByType);
router.get("/country/:country", weaponsController.getWeaponsByCountry);
router.get("/:id", weaponsController.getWeaponById);

export default router;
