import Router from "express";
import weaponsRouter from "./weapons.router.js";
import equipmentRouter from "./equipment.router.js";
import mapsRouter from "./maps.router.js";
import classesRouter from "./classes.router.js";

const router = Router();

router.use("/weapons", weaponsRouter);
router.use("/equipment", equipmentRouter);
router.use("/maps", mapsRouter);
router.use("/classes", classesRouter);

export default router;
