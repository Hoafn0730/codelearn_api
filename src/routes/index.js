const express = require('express');

import homeController from '../controllers/homeController';

const router = express.Router();

function route(app) {
    router.get('/', homeController.getHomePage);
    router.get('/courses', homeController.getCourse);
    router.post('/courses', homeController.postAccount);

    return app.use('/', router);
}

module.exports = route;
