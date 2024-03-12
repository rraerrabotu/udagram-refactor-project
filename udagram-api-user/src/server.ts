import cors from 'cors';
import express from 'express';
import {sequelize} from './sequelize';


import {IndexRouter} from './controllers/v0/index.router';

import bodyParser from 'body-parser';
import {config} from './config/config';
//import {V0_FEED_MODELS, V0_USER_MODELS} from './controllers/v0/model.index';
import {V0_USER_MODELS} from './controllers/v0/model.index';


(async () => {
  //await sequelize.addModels(V0_FEED_MODELS);
  await sequelize.addModels(V0_USER_MODELS);

  console.debug("Initialize database connection...");
  console.debug("UserName: "+config.username);
  console.debug("Password: "+config.password);
  console.debug("database: "+config.database);
  console.debug("Host: "+config.host);
  console.debug("URL: "+config.backend_url);
  console.debug("User Backend Port: "+config.backend_port);
  console.debug("Frontend Port: "+config.frontend_port);

  await sequelize.sync();



  const app = express();
  const port = process.env.APIUSER_PORT || 8080;
  //const port = 8080;

  app.use(bodyParser.json());

  // We set the CORS origin to * so that we don't need to
  // worry about the complexities of CORS this lesson. It's
  // something that will be covered in the next course.
  app.use(cors({
    allowedHeaders: [
      'Origin', 'X-Requested-With',
      'Content-Type', 'Accept',
      'X-Access-Token', 'Authorization',
    ],
    methods: 'GET,HEAD,OPTIONS,PUT,PATCH,POST,DELETE',
    preflightContinue: true,
    origin: '*',
  }));

  app.use('/api/v0/', IndexRouter);

  // Root URI call
  app.get( '/', async ( req, res ) => {
    res.send( '/api/v0/' );
  } );


  // Start the Server
  app.listen( port, () => {
    console.log( `server running ${config.backend_url}` );
    console.log( `press CTRL+C to stop server` );
  } );
})();
