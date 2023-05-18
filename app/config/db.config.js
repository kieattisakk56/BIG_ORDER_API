module.exports = {
    HOST: "DESKTOP-47I8R3R",
    PORT: "1433",
    USER: "sa",
    PASSWORD: ".",
    DB: "bezkoder_db",
    dialect: "mssql",
    pool: {
        max: 5,
        min: 0,
        acquire: 30000,
        idle: 10000
    }
};