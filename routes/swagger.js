/**
 * @openapi
 * components:
 *   securitySchemes:
 *     bearerAuth:
 *       type: http
 *       scheme: bearer
 *       bearerFormat: JWT
 */

/**
 * @openapi
 * paths:
 *   /login:
 *     post:
 *       summary: Login to the system and generate a JWT token
 *       tags:
 *         - Authentication
 *       requestBody:
 *         description: User credentials for login
 *         required: true
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 username:
 *                   type: string
 *                 password:
 *                   type: string
 *       responses:
 *         '200':
 *           description: Successfully logged in. Returns a JWT token.
 *           content:
 *             application/json:
 *               example:
 *                 token: "your_generated_jwt_token_here"
 *         '401':
 *           description: Invalid credentials or user not found.
 *           content:
 *             application/json:
 *               example:
 *                 error: "Invalid credentials or user not found"
 *       security:
 *         - bearerAuth: []
 */

/**
 * @openapi
 * paths:
 *   /register:
 *     post:
 *       summary: Register a new user (Admin access only)
 *       tags:
 *         - User Management
 *       security:
 *         - bearerAuth: []
 *       requestBody:
 *         description: User information for registration
 *         required: true
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 username:
 *                   type: string
 *                 password:
 *                   type: string
 *                 name:
 *                   type: string
 *                 email:
 *                   type: string
 *                 role:
 *                   type: string
 *       responses:
 *         '200':
 *           description: User registration successful.
 *           content:
 *             application/json:
 *               example:
 *                 status: "Registration successful!"
 *         '401':
 *           description: Unauthorized. Only admin  can register new users.
 *           content:
 *             application/json:
 *               example:
 *                 error: "Unauthorized"
 */

/**
 * @openapi
 * paths:
 *   /visitorinfo:
 *     get:
 *       summary: Get visitor information based on user role
 *       tags:
 *         - Visitor Management
 *       security:
 *         - bearerAuth: []
 *       responses:
 *         '200':
 *           description: Successfully retrieved visitor information.
 *           content:
 *             application/json:
 *               example:
 *                 visitors:
 *                   - visitorname: "John Placebo"
 *                     id: "871212053345"
 *                     phoneNumber: "010202067543"
 *                     email: "johnplacebo@example.com"
 *                     appointmentDate: "2023-06-21"
 *                     carPlate: "JLB4102"
 *                     purpose: "Majlis Convo"
 *                     destination: "Dewan Seminar"
 *                     registeredBy: "aliffaizat"
 *         '401':
 *           description: Unauthorized. Only admin or security can access
 *           content:
 *             application/json:
 *               example:
 *                 error: "Unauthorized"
 *         '500':
 *           description: Internal Server Error.
 *           content:
 *             application/json:
 *               example:
 *                 error: "Internal Server Error"
 */
/**
 * @openapi
 * paths:
 *   /addvisitors:
 *     post:
 *       summary: Add a new visitor (User access only)
 *       tags:
 *         - Visitor Management
 *       security:
 *         - bearerAuth: []
 *       requestBody:
 *         description: Visitor information for registration
 *         required: true
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 visitorname:
 *                   type: string
 *                 id:
 *                   type: string
 *                 visitorpass:
 *                   type: string
 *                 phoneNumber:
 *                   type: string
 *                 email:
 *                   type: string
 *                 appointmentDate:
 *                   type: string
 *                   format: date
 *                 carPlate:
 *                   type: string
 *                 purpose:
 *                   type: string
 *                 destination:
 *                   type: string
 *                 registeredBy:
 *                   type: string
 *       responses:
 *         '200':
 *           description: Visitor registration successful.
 *           content:
 *             application/json:
 *               example:
 *                 status: "Visitor registration successful!"
 *         '401':
 *           description: Unauthorized. Only users can add visitors.
 *           content:
 *             application/json:
 *               example:
 *                 error: "Unauthorized"
 *         '500':
 *           description: Internal Server Error.
 *           content:
 *             application/json:
 *               example:
 *                 error: "Internal Server Error"
 */