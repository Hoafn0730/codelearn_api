const express = require('express');

import homeController from '../controllers/homeController';

const router = express.Router();

function route(app) {
    router.get('/', homeController.getHomePage);

    router.get('/asds', (req, res) => {
        return res.send('hello');
    });
    return app.use('/', router);
}

module.exports = route;
