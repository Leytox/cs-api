import Router from "express";
import equipmentController from "../controllers/equipment.controller.js";

const router = Router();

/**
 * @swagger
 * tags:
 *   name: Equipment
 *   description: Equipment management endpoints
 */

/**
 * @swagger
 * /equipment:
 *   get:
 *     tags: [Equipment]
 *     summary: Get all equipment
 *     parameters:
 *       - in: query
 *         name: limit
 *         schema:
 *           type: integer
 *         description: The number of equipment items to return
 *       - in: query
 *         name: offset
 *         schema:
 *           type: integer
 *         description: The number of equipment items to skip
 *     responses:
 *       200:
 *         description: List of equipment
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Equipment'
 *       500:
 *         description: Server error
 *
 * /equipment/name/{name}:
 *   get:
 *     tags: [Equipment]
 *     summary: Get equipment by name
 *     parameters:
 *       - in: path
 *         name: name
 *         required: true
 *         schema:
 *           type: string
 *         description: Equipment name
 *     responses:
 *       200:
 *         description: Equipment details
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Equipment'
 *       404:
 *         description: Equipment not found
 *       500:
 *         description: Server error
 *
 * /equipment/faction/{faction}:
 *   get:
 *     tags: [Equipment]
 *     summary: Get equipment by faction
 *     parameters:
 *       - in: path
 *         name: faction
 *         required: true
 *         schema:
 *           type: string
 *         description: Equipment faction
 *     responses:
 *       200:
 *         description: List of equipment
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Equipment'
 *       404:
 *         description: No equipment found
 *       500:
 *         description: Server error
 *
 * /equipment/{id}:
 *   get:
 *     tags: [Equipment]
 *     summary: Get equipment by ID
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: Equipment ID
 *     responses:
 *       200:
 *         description: Equipment details
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Equipment'
 *       404:
 *         description: Equipment not found
 *       500:
 *         description: Server error
 */

router.get("/", equipmentController.getAllEquipment);
router.get("/name/:name", equipmentController.getEquipmentByName);
router.get("/faction/:faction", equipmentController.getEquipmentByFaction);
router.get("/:id", equipmentController.getEquipmentById);

export default router;
