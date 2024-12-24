import Router from "express";
import mapsController from "../controllers/maps.controller.js";
import validate from "../middleware/validate.js";
import mapValidation from "../validation/map.validation.js";

const router = Router();

/**
 * @swagger
 * tags:
 *   name: Maps
 *   description: Maps management endpoints
 */

/**
 * @swagger
 * /maps:
 *   get:
 *     tags: [Maps]
 *     summary: Get all maps
 *     parameters:
 *       - in: query
 *         name: limit
 *         schema:
 *           type: integer
 *         description: The number of maps to return
 *       - in: query
 *         name: offset
 *         schema:
 *           type: integer
 *         description: The number of maps to skip
 *     responses:
 *       200:
 *         description: List of maps
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Map'
 *       500:
 *         description: Server error
 *
 * /maps/name/{name}:
 *   get:
 *     tags: [Maps]
 *     summary: Get map by name
 *     parameters:
 *       - in: path
 *         name: name
 *         required: true
 *         schema:
 *           type: string
 *         description: Map name
 *     responses:
 *       200:
 *         description: Map details
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Map'
 *       404:
 *         description: Map not found
 *       500:
 *         description: Server error
 *
 * /maps/scenario/{scenario}:
 *   get:
 *     tags: [Maps]
 *     summary: Get maps by scenario
 *     parameters:
 *       - in: path
 *         name: scenario
 *         required: true
 *         schema:
 *           type: string
 *         description: Map scenario
 *     responses:
 *       200:
 *         description: List of maps
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Map'
 *       404:
 *         description: No maps found
 *       500:
 *         description: Server error
 *
 * /maps/developer/{developer}:
 *   get:
 *     tags: [Maps]
 *     summary: Get maps by developer
 *     parameters:
 *       - in: path
 *         name: developer
 *         required: true
 *         schema:
 *           type: string
 *         description: Map developer
 *     responses:
 *       200:
 *         description: List of maps
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Map'
 *       404:
 *         description: No maps found
 *       500:
 *         description: Server error
 *
 * /maps/{id}:
 *   get:
 *     tags: [Maps]
 *     summary: Get map by ID
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: Map ID
 *     responses:
 *       200:
 *         description: Map details
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Map'
 *       404:
 *         description: Map not found
 *       500:
 *         description: Server error
 */

router.get("/", validate(mapValidation.getAll), mapsController.getAllMaps);
router.get(
  "/name/:name",
  validate(mapValidation.getByName),
  mapsController.getMapByName,
);
router.get(
  "/scenario/:scenario",
  validate(mapValidation.getByScenario),
  mapsController.getMapsByScenario,
);
router.get(
  "/developer/:developer",
  validate(mapValidation.getByDeveloper),
  mapsController.getMapsByDeveloper,
);
router.get("/:id", validate(mapValidation.getById), mapsController.getMapById);

export default router;
