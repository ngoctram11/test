import dotenv, { config } from 'dotenv';
import express from 'express';
import configViewEngine from './configs/viewEngine';
import initWebRoute from './route/webRoute';

dotenv.config();
const app = express();
const port = process.env.PORT || 3000;
configViewEngine(app);
app.use(express.static('src/public'));
initWebRoute(app);


app.listen(port, () =>
    console.log(`Example app listening on port ${process.env.PORT}!`),
);