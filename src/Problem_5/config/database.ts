import { Sequelize } from "sequelize";
import path from "path";

const databasePath = path.resolve(__dirname, "..", "database", "database.sqlite");

// Khởi tạo Sequelize
export const sequelize = new Sequelize({
    dialect: "sqlite",
    storage: databasePath,  // Lưu database vào thư mục database/
    logging: console.log,    // Hiển thị log câu lệnh SQL trong console
});

// Hàm kết nối database
export const connectDB = async () => {
    try {
        await sequelize.authenticate(); // Kết nối database
        console.log("Database connected!");

        // Tự động tạo database.sqlite nếu chưa có
        await sequelize.sync({ alter: true }); 
        console.log("All models were synchronized successfully.");
    } catch (error) {
        console.error("Database connection error:", error);
    }
};
