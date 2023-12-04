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

const updateAccount = async (data) => {
    return new Promise(async (resolve, reject) => {
        try {
            const account = await db.Account.findOne({ where: { id: data.id } });
            account.phoneNumber = data.phoneNumber;
            account.email = data.email;
            await account.save();

            resolve(account);
        } catch (e) {
            reject(e);
        }
    });
};

const deleteAccountById = async (accountId) => {
    return new Promise(async (resolve, reject) => {
        try {
            const account = await db.Account.findOne({ where: { id: accountId } });

            await account.destroy();
            resolve('Xoa thanh cong');
        } catch (e) {
            reject(e);
        }
    });
};

const login = (userName, password) => {
    return new Promise(async (resolve, reject) => {
        try {
            let userData = {};
            const isExist = await checkUserName(userName);

            if (isExist) {
                const user = await db.Account.findOne({
                    where: {
                        userName,
                    },
                    raw: true,
                    attributes: ['userName', 'password', 'roleId'],
                });
                if (user) {
                    const check = await bcrypt.compareSync(password, user.password);

                    if (check) {
                        userData.errCode = 0;
                        userData.message = 'OK';
                        delete user.password;
                        userData.user = user;
                    } else {
                        userData.errCode = 3;
                        userData.message = 'Wrong password';
                    }
                } else {
                    userData.errCode = 2;
                    userData.message = `User's not found`;
                }
            } else {
                userData.errCode = 1;
                userData.message = `Your's username isn't exist in your system. Plz try other username!`;
            }

            resolve(userData);
        } catch (e) {
            reject(e);
        }
    });
};

const checkUserName = (userName) => {
    return new Promise(async (resolve, reject) => {
        try {
            const user = await db.Account.findOne({
                where: {
                    userName,
                },
            });
            if (user) {
                resolve(true);
            } else {
                resolve(false);
            }
        } catch (e) {
            reject(e);
        }
    });
};

module.exports = { createNewAccount, updateAccount, deleteAccountById, login };
