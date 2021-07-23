const express = require('express');
const session = require('express-session');
const app = express();
require('./config/mongoose.js');

// Import Modules
const cors = require('cors');
const morgan = require('morgan');

// Port
const port = process.env.PORT || 5000;

// Swagger
const swagger = require('./config/swagger');
const swaggerJsdoc = require('swagger-jsdoc');
const swaggerUi = require('swagger-ui-express');
const swaggerSpec = swaggerJsdoc(swagger);

// Router
const userRouter = require('./routers/userRouter');
const storeRouter = require('./routers/storeRouter');
const postRouter = require('./routers/postRouter');
const askRouter = require('./routers/askRouter');

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

// Express - Session
app.use(
  session({
    secret: 'colamapsession',
    resave: false,
    saveUninitialized: true,
  }),
);
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use('/user', userRouter);
app.use('/store', storeRouter);
app.use('/post', postRouter);
app.use('/ask', askRouter);

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));

app.listen(port, () => {
  console.log(`✅ Server Listening on ${port}`);
});
