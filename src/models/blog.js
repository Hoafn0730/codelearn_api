'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class Blog extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
            // define association here
        }
    }
    Blog.init(
        {
            title: DataTypes.STRING,
            description: DataTypes.STRING,
            content: DataTypes.TEXT,
            image: DataTypes.STRING,
            slug: DataTypes.STRING,
            userId: DataTypes.INTEGER,
        },
        {
            sequelize,
            modelName: 'Blog',
        },
    );
    return Blog;
};
