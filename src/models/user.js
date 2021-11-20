const { DataTypes } = require('sequelize');
module.exports = (sequelize) => {
    const User = sequelize.define("user", {
        userName: {
            type: DataTypes.STRING,
            allowNull: false,
            primaryKey: true
        },
        passWord: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        token: {
            type: DataTypes.STRING,
            allowNull: false,

        }

    });
}