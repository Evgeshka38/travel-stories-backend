import swaggerJsdoc from "swagger-jsdoc";

const options = {
  failOnErrors: true,
  definition: {
    openapi: "3.0.0",
    info: {
      title: "Travel Stories API",
      version: "1.0.0",
      description: "API documentation for the Travel Stories team project",
    },
    servers: [
      {
        url: "https://travel-stories-backend.onrender.com",
        description: "Production server",
      },
      {
        url: "http://localhost:3001",
        description: "Local server",
      },
    ],
    tags: [
      {
        name: "Auth",
        description: "Authentication endpoints",
      },
      {
        name: "Users",
        description: "Users endpoints",
      },
      {
        name: "Categories",
        description: "Categories endpoints",
      },
      {
        name: "Stories",
        description: "Stories endpoints",
      },
    ],
  },
  apis: ["./src/docs/components/*.yaml", "./src/docs/paths/*.yaml"],
};

export const swaggerSpec = swaggerJsdoc(options);
