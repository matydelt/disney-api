const { DataTypes } = require('sequelize');
module.exports = (sequelize) => {
    const Gender = sequelize.define("gender", {
        image: {
            type: DataTypes.STRING,
            allowNull: false

        },
        name: {
            type: DataTypes.STRING,
            allowNull: false,
            primaryKey: true
        }
    });
}