/**
 * @swagger
 * components:
 *   schemas:
 *     Weapon:
 *       type: object
 *       properties:
 *         name:
 *           type: string
 *           description: The weapon's name
 *         type:
 *           type: string
 *           description: The type of weapon
 *         countryOfOrigin:
 *           type: string
 *           description: The country where the weapon originated
 *     Map:
 *       type: object
 *       properties:
 *         name:
 *           type: string
 *           description: The map's name
 *         scenario:
 *           type: string
 *           description: The map's scenario type
 *         developer:
 *           type: string
 *           description: The map's developer
 *     Equipment:
 *       type: object
 *       properties:
 *         name:
 *           type: string
 *           description: The equipment's name
 *         faction:
 *           type: string
 *           description: The faction that can use this equipment
 *     Class:
 *       type: object
 *       properties:
 *         name:
 *           type: string
 *           description: The class's name
 *         faction:
 *           type: string
 *           description: The faction this class belongs to
 *     Error:
 *       type: object
 *       properties:
 *         message:
 *           type: string
 *           description: Error message
 *         code:
 *           type: integer
 *           description: Error code
 *         stack:
 *           type: string
 *           description: Error stack trace (development only)
 *     PaginatedResponse:
 *       type: object
 *       properties:
 *         data:
 *           type: array
 *           items:
 *             oneOf:
 *               - $ref: '#/components/schemas/Weapon'
 *               - $ref: '#/components/schemas/Map'
 *               - $ref: '#/components/schemas/Equipment'
 *               - $ref: '#/components/schemas/Class'
 *         pagination:
 *           type: object
 *           properties:
 *             total:
 *               type: integer
 *               description: Total number of items
 *             limit:
 *               type: integer
 *               description: Items per page
 *             offset:
 *               type: integer
 *               description: Number of items skipped
 *             pages:
 *               type: integer
 *               description: Total number of pages
 *             currentPage:
 *               type: integer
 *               description: Current page number
 */
