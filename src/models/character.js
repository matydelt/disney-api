const { DataTypes } = require('sequelize');
module.exports = (sequelize) => {
    const Character = sequelize.define("character", {
        image: {
            type: DataTypes.STRING,
            allowNull: false

        },
        name: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        age: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        weight: {
            type: DataTypes.FLOAT,
            allowNull: false
        },
        history: {
            type: DataTypes.TEXT,
        },
        detail: {
            type: DataTypes.VIRTUAL,
            get() {
                const { image, name, age, weight, history } = this
                return { image, name, age, weight, history }
            }
        }

    });
}