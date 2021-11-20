const { DataTypes } = require('sequelize');
module.exports = (sequelize) => {
    const Movie = sequelize.define("movie", {
        image: {
            type: DataTypes.STRING,
            allowNull: false
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        date: {
            type: DataTypes.DATEONLY,
            allowNull: false
        },
        score: {
            type: DataTypes.FLOAT,
            allowNull: false
        }
    });
} 