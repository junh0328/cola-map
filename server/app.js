const express = require('express');
const app = express();
const port = process.env.PORT || 5000;
const cors = require("cors");
const cors = require('cors');
const morgan = require('morgan');

require("./config/mongoose.js");

const swagger = require('./config/swagger');
const swaggerJsdoc = require("swagger-jsdoc");
const swaggerUi = require("swagger-ui-express");
const swaggerSpec = swaggerJsdoc(swagger)

const userRouter = require('./routers/userRouter');

app.use(express.json())
// Proxy set
app.set('trust proxy', 1);
if (process.env.NODE_ENV === 'production') {
  // Product
  app.use(morgan('combined'));
  app.use(helmet());
  app.use(
    cors({
      origin: ['http://example.com'],
      credentials: true,
    })
  );
} else {
  // Develop
  app.use(morgan('dev'));
  app.use(
    cors({
      origin: 'http://localhost:3000',
      credentials: true,
    })
  );
}

app.use(express.json());

app.use('/api/v1/', userRouter);

app.use("/api-docs",
  swaggerUi.serve,
  swaggerUi.setup(swaggerSpec)
);


app.listen(port, () => {
  console.log(`Server Listening on ${port}`)
});