const express = require('express');

import homeController from '../controllers/homeController';

const router = express.Router();

function route(app) {
    router.get('/', homeController.getHomePage);
    router.get('/accounts', homeController.getAccount);
    router.post('/post-accounts', homeController.postAccount);
    router.post('/put-accounts', homeController.putAccount);
    router.post('/delete-accounts', homeController.deleteAccount);

    return app.use('/', router);
}

module.exports = route;
