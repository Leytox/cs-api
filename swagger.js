import swaggerJsdoc from "swagger-jsdoc";
import dotenv from "dotenv";
dotenv.config();
const options = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "CS API",
      version: "1.0.0",
      description: "A comprehensive API for Counter-Strike game data",
      contact: {
        name: "API Support",
        url: "https://t.me/leytox",
        email: "iladevder@gmail.com",
      },
    },
    servers: [
      {
        url: `${process.env.BASE_URL}/api/v1`,
        description: "Development server",
      },
    ],
  },
  apis: ["./routes/*.js", "./routes/schemas.js"],
};

export const specs = swaggerJsdoc(options);
