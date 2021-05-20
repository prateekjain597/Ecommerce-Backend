const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const PORT = 8081;
const routes = require('./routes');
const cors=require('cors');
const dotenv = require('dotenv');
dotenv.config();
const app = express();
app.use(cors());

const swaggerUI = require('swagger-ui-express')
const swaggerJSDoc = require('swagger-jsdoc')

const options = {
  definition: {
      openapi: "3.0.0",
      info: {
          title: "Ecommerce",
          version: "1.0.0",
          description: "This is a simple Ecommerce API made with Express and documented with Swagger",
      },
      servers: [
          {
              url: `http://localhost:8081/`,
          },
      ],
  },
  apis: ["./api-docs/api.js"],
};

const specs = swaggerJSDoc(options)
app.use("/api/docs", swaggerUI.serve, swaggerUI.setup(specs))
//-------------------------------


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

 routes(app);
 routes(app);
 mongoose.connect(process.env.db_connect, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
  useFindAndModify: false
 })
app.get('/',(req,res)=>{
  res.send('Welcome');
})
app.listen(process.env.PORT || PORT, () => {
  console.log('Server listening on port: ' + PORT);
});