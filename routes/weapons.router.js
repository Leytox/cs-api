import Router from "express";
import weaponsController from "../controllers/weapons.controller.js";
import validate from "../middleware/validate.js";
import weaponValidation from "../validation/weapon.validation.js";

const router = Router();

/**
 * @swagger
 * tags:
 *   name: Weapons
 *   description: Weapons management endpoints
 */

/**
 * @swagger
 * /weapons:
 *   get:
 *     tags: [Weapons]
 *     summary: Get all weapons
 *     parameters:
 *       - in: query
 *         name: limit
 *         schema:
 *           type: integer
 *         description: The number of weapons to return
 *       - in: query
 *         name: offset
 *         schema:
 *           type: integer
 *         description: The number of weapons to skip
 *     responses:
 *       200:
 *         description: List of weapons
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Weapon'
 *       500:
 *         description: Server error
 *
 * /weapons/name/{name}:
 *   get:
 *     tags: [Weapons]
 *     summary: Get weapon by name
 *     parameters:
 *       - in: path
 *         name: name
 *         required: true
 *         schema:
 *           type: string
 *         description: Weapon name
 *     responses:
 *       200:
 *         description: Weapon details
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Weapon'
 *       404:
 *         description: Weapon not found
 *       500:
 *         description: Server error
 *
 * /weapons/type/{type}:
 *   get:
 *     tags: [Weapons]
 *     summary: Get weapons by type
 *     parameters:
 *       - in: path
 *         name: type
 *         required: true
 *         schema:
 *           type: string
 *         description: Weapon type
 *     responses:
 *       200:
 *         description: List of weapons
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Weapon'
 *       404:
 *         description: No weapons found
 *       500:
 *         description: Server error
 *
 * /weapons/country/{country}:
 *   get:
 *     tags: [Weapons]
 *     summary: Get weapons by country
 *     parameters:
 *       - in: path
 *         name: country
 *         required: true
 *         schema:
 *           type: string
 *         description: Country of origin
 *     responses:
 *       200:
 *         description: List of weapons
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Weapon'
 *       404:
 *         description: No weapons found
 *       500:
 *         description: Server error
 *
 * /weapons/{id}:
 *   get:
 *     tags: [Weapons]
 *     summary: Get weapon by ID
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: Weapon ID
 *     responses:
 *       200:
 *         description: Weapon details
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Weapon'
 *       404:
 *         description: Weapon not found
 *       500:
 *         description: Server error
 */

router.get(
  "/",
  validate(weaponValidation.getAll),
  weaponsController.getAllWeapons,
);
router.get(
  "/name/:name",
  validate(weaponValidation.getByName),
  weaponsController.getWeaponByName,
);
router.get(
  "/type/:type",
  validate(weaponValidation.getByType),
  weaponsController.getWeaponsByType,
);
router.get(
  "/country/:country",
  validate(weaponValidation.getByCountry),
  weaponsController.getWeaponsByCountry,
);
router.get(
  "/:id",
  validate(weaponValidation.getById),
  weaponsController.getWeaponById,
);

export default router;
