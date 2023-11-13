const db = require('../models');

const getHomePage = async (req, res) => {
    try {
        const data = await db.User.findAll({ raw: true });
        return res.render('home-page', { data: JSON.stringify(data) });
    } catch (error) {
        console.log(error);
    }
};

module.exports = {
    getHomePage,
};
