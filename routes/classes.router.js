import Router from "express";
import classesController from "../controllers/classes.controller.js";
import validate from "../middleware/validate.js";
import classValidation from "../validation/class.validation.js";

const router = Router();
/**
 * @swagger
 * tags:
 *   name: Classes
 *   description: Classes management endpoints
 */

/**
 * @swagger
 * /classes:
 *   get:
 *     tags: [Classes]
 *     summary: Get all classes
 *     parameters:
 *       - in: query
 *         name: limit
 *         schema:
 *           type: integer
 *         description: The number of classes to return
 *       - in: query
 *         name: offset
 *         schema:
 *           type: integer
 *         description: The number of classes to skip
 *     responses:
 *       200:
 *         description: List of classes
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Class'
 *       500:
 *         description: Server error
 *
 * /classes/name/{name}:
 *   get:
 *     tags: [Classes]
 *     summary: Get class by name
 *     parameters:
 *       - in: path
 *         name: name
 *         required: true
 *         schema:
 *           type: string
 *         description: Class name
 *     responses:
 *       200:
 *         description: Class details
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Class'
 *       404:
 *         description: Class not found
 *       500:
 *         description: Server error
 *
 * /classes/faction/{faction}:
 *   get:
 *     tags: [Classes]
 *     summary: Get classes by faction
 *     parameters:
 *       - in: path
 *         name: faction
 *         required: true
 *         schema:
 *           type: string
 *         description: Class faction
 *     responses:
 *       200:
 *         description: List of classes
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Class'
 *       404:
 *         description: No classes found
 *       500:
 *         description: Server error
 *
 * /classes/{id}:
 *   get:
 *     tags: [Classes]
 *     summary: Get class by ID
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: Class ID
 *     responses:
 *       200:
 *         description: Class details
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Class'
 *       404:
 *         description: Class not found
 *       500:
 *         description: Server error
 */

router.get(
  "/",
  validate(classValidation.getAll),
  classesController.getAllClasses,
);
router.get(
  "/name/:name",
  validate(classValidation.getByName),
  classesController.getClassByName,
);
router.get(
  "/faction/:faction",
  validate(classValidation.getByFaction),
  classesController.getClassesByFaction,
);
router.get(
  "/:id",
  validate(classValidation.getById),
  classesController.getClassById,
);

export default router;
