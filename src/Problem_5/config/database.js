"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.connectDB = exports.sequelize = void 0;
const sequelize_1 = require("sequelize");
const path_1 = __importDefault(require("path"));
const databasePath = path_1.default.resolve(__dirname, "..", "database", "database.sqlite");
// Khởi tạo Sequelize
exports.sequelize = new sequelize_1.Sequelize({
    dialect: "sqlite",
    storage: databasePath, // Lưu database vào thư mục database/
    logging: console.log, // Hiển thị log câu lệnh SQL trong console
});
// Hàm kết nối database
const connectDB = () => __awaiter(void 0, void 0, void 0, function* () {
    try {
        yield exports.sequelize.authenticate(); // Kết nối database
        console.log("✅ Database connected!");
        // Tự động tạo database.sqlite nếu chưa có
        yield exports.sequelize.sync({ alter: true });
        console.log("✅ All models were synchronized successfully.");
    }
    catch (error) {
        console.error("❌ Database connection error:", error);
    }
});
exports.connectDB = connectDB;
