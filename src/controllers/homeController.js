const db = require('../models');
const accountService = require('../services/accountService');

// [GET] /
const getHomePage = async (req, res) => {
    try {
        const data = await db.User.findAll({ raw: true });

        return res.render('home-page', { data: JSON.stringify(data) });
    } catch (error) {
        console.log(error);
    }
};

// [GET] /accounts
const getAccount = async (req, res) => {
    const data = await db.Account.findAll({ raw: true });
    return res.json({ status: 200, data });
};

// [POST] /post-accounts
const postAccount = async (req, res) => {
    const message = await accountService.createNewAccount(req.body);
    return res.json({ status: 200, message, data: req.body });
};

// [POST] /put-accounts
const putAccount = async (req, res) => {
    const account = await accountService.updateAccount(req.body);

    return res.json({ status: 200, data: account });
};

// [POST] /delete-accounts
const deleteAccount = async (req, res) => {
    const message = await accountService.deleteAccountById(req.query.id);
    return res.status(200).json({ status: 200, message });
};

module.exports = {
    getHomePage,
    getAccount,
    postAccount,
    putAccount,
    deleteAccount,
};
