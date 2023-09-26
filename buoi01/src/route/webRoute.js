import express from 'express';
import aboutController from '../controllers/AboutController';
import homeController from '../controllers/HomeController';
import UserController from '../controllers/UserController';
const router = express.Router();
const initWebRoute = (app) => {
    app.get('/', homeController);
    app.get('/about', aboutController);
    app.get('/list-user', UserController.listUser);
    app.get('/detail-user/:username', UserController.getDetailUser);
    app.get('/create-new-user', UserController.createNewUser);
    app.use('', router);
}

export default initWebRoute;