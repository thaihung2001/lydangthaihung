"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Resource = void 0;
const sequelize_1 = require("sequelize");
const database_1 = require("../config/database");
exports.Resource = database_1.sequelize.define("Resource", {
    id: {
        type: sequelize_1.DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    },
    name: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
    },
    description: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
    },
});
