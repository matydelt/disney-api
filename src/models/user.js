const { DataTypes } = require('sequelize');
module.exports = (sequelize) => {
    const User = sequelize.define("User", {
        userName: {
            type: DataTypes.STRING,
            allowNull: false,
            primaryKey: true
        },
        PassWord: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        token: {
            type: DataTypes.STRING,
            allowNull: false,

        }

    });
}