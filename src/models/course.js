'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class Course extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
            // define association here
        }
    }
    Course.init(
        {
            courseName: DataTypes.STRING,
            description: DataTypes.STRING,
            image: DataTypes.STRING,
            level: DataTypes.STRING,
            price: DataTypes.INTEGER,
            slug: DataTypes.STRING,
            content: DataTypes.TEXT,
            categoryId: DataTypes.INTEGER,
            teacherId: DataTypes.INTEGER,
        },
        {
            sequelize,
            modelName: 'Course',
        },
    );
    return Course;
};
