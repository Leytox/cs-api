import Router from "express";
import weaponsRouter from "./weapons.router.js";
import equipmentRouter from "./equipment.router.js";
import mapsRouter from "./maps.router.js";
import teamsRouter from "./teams.router.js";

const router = Router();

router.use("/weapons", weaponsRouter);
router.use("/equipment", equipmentRouter);
router.use("/maps", mapsRouter);
router.use("/teams", teamsRouter);

export default router;
