const bcrypt = require('bcryptjs');

const db = require('../models');
const salt = bcrypt.genSaltSync(10);

const createNewAccount = async (data) => {
    return new Promise(async (resolve, reject) => {
        try {
            const hashPassword = await hasAccountPassword(data.password);
            await db.Account.create({
                userName: data.userName,
                password: hashPassword,
                phoneNumber: data.phoneNumber,
                email: data.email,
                roleId: data.roleId,
            });
            resolve('Create account success!');
        } catch (error) {
            reject(error);
        }
    });
};
const hasAccountPassword = (password) => {
    return new Promise(async (resolve, reject) => {
        try {
            var hash = await bcrypt.hashSync(password, salt);
            resolve(hash);
        } catch (error) {
            reject(error);
        }
    });
};

module.exports = createNewAccount;
