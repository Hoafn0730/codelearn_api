const db = require('../models');
const createNewAccount = require('../services/AccountService');

const getHomePage = async (req, res) => {
    try {
        const data = await db.User.findAll({ raw: true });

        return res.render('home-page', { data: JSON.stringify(data) });
    } catch (error) {
        console.log(error);
    }
};

const getCourse = async (req, res) => {
    const data = await db.User.findAll({ raw: true });
    return res.json({ status: 200, data });
};

const postAccount = async (req, res) => {
    const message = await createNewAccount(req.body);
    return res.json({ status: 200, message, data: req.body });
};

module.exports = {
    getHomePage,
    getCourse,
    postAccount,
};
