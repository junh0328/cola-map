const express = require('express');
const app = express();
const port = process.env.PORT || 5000;
const cors = require("cors");

require("./config/mongoose.js");

const swagger = require('./config/swagger');
const swaggerJsdoc = require("swagger-jsdoc");
const swaggerUi = require("swagger-ui-express");
const swaggerSpec = swaggerJsdoc(swagger)

const userRouter = require('./routers/userRouter');

app.use(express.json())

app.use('/api/v1/', userRouter);

app.use("/api-docs",
  swaggerUi.serve,
  swaggerUi.setup(swaggerSpec)
);


app.listen(port, () => {
  console.log(`Server Listening on ${port}`)
});