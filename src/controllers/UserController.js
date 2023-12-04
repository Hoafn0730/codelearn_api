const accountService = require('../services/accountService');

const login = async (req, res) => {
    const userName = req.body.userName;
    const password = req.body.password;

    if (!userName || !password) {
        return res.status(500).json({
            errCode: 1,
            errMessage: 'Missing inputs parameters',
        });
    }

    const userData = await accountService.login(userName, password);

    return res.status(200).json({
        errCode: userData.errCode,
        message: userData.message,
        data: userData.user ? userData.user : {},
    });
};

module.exports = {
    login,
};
