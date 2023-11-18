const db = require('../models');
const AccountService = require('../services/AccountService');

const getHomePage = async (req, res) => {
    try {
        const data = await db.User.findAll({ raw: true });

        return res.render('home-page', { data: JSON.stringify(data) });
    } catch (error) {
        console.log(error);
    }
};

const getAccount = async (req, res) => {
    const data = await db.Account.findAll({ raw: true });
    return res.json({ status: 200, data });
};

const postAccount = async (req, res) => {
    const message = await AccountService.createNewAccount(req.body);
    return res.json({ status: 200, message, data: req.body });
};

const putAccount = async (req, res) => {
    const account = await AccountService.updateAccount(req.body);

    return res.json({ status: 200, data: account });
};

const deleteAccount = async (req, res) => {
    const message = await AccountService.deleteAccountById(req.query.id);
    return res.json({ status: 200, message });
};

module.exports = {
    getHomePage,
    getAccount,
    postAccount,
    putAccount,
    deleteAccount,
};
