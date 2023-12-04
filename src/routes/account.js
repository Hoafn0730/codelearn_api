const express = require('express');
const router = express.Router();

import homeController from '../controllers/homeController';
import userController from '../controllers/UserController';

router.get('/', homeController.getHomePage);
router.get('/accounts', homeController.getAccount);
router.post('/post-accounts', homeController.postAccount);
router.post('/put-accounts', homeController.putAccount);
router.post('/delete-accounts', homeController.deleteAccount);

router.post('/api/login', userController.login);

module.exports = router;
