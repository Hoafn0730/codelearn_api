const express = require('express');

const router = express.Router();

function route(app) {
    router.get('/', (req, res) => {
        return res.send('hello');
    });
    return app.use('/', router);
}

module.exports = route;
