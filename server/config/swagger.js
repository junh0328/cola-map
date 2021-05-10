const swagger = {
  swaggerDefinition: {
    openapi: "3.0.0",
    info: {
      title: "Boiler-Plate API with Swagger",
      version: "0.1.0",
      decription:
        "This is Boiler-Plate API",
      license: {
        name: "MIT",
        url: "https://spdx.org/licenses/MIT.html",
      },
      contact: {
        name: "JINSOO YOO",
        email: "wlstn4966@gmail.com"
      }
    },
    servers: [
      {
        url: `http://localhost:${process.env.PORT}/api/v1`
      }
    ],
    components: {
      securitySchemes: {
        bearerAuth: {
          type: "http",
          scheme: "bearer",
          bearerFormat: "JWT",
        }
      }
    },
    security: {
      bearerAuth: []
    }
  },
  apis: ["swaggers/*.yaml"],
}

module.exports = swagger
