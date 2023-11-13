'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class Lesson extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
            // define association here
        }
    }
    Lesson.init(
        {
            lessonName: DataTypes.STRING,
            description: DataTypes.STRING,
            videoId: DataTypes.STRING,
            duration: DataTypes.STRING,
            image: DataTypes.STRING,
            slug: DataTypes.STRING,
            content: DataTypes.TEXT,
        },
        {
            sequelize,
            modelName: 'Lesson',
        },
    );
    return Lesson;
};
