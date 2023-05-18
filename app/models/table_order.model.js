

const packageCategory = require("./package_category.model.js")

module.exports = (sequelize, Sequelize) => {
    const model = sequelize.define("table_order", {
        table_ref_id: {
            type: Sequelize.INTEGER
        },
        table_access_key: {
            type: Sequelize.UUID,
            primaryKey: true,
            allowNull: false,
        },
        package_ref_id: {
            type: Sequelize.INTEGER,
        },
        customer_seat: {
            type: Sequelize.STRING
        },
        table_order_status: {
            type: Sequelize.STRING
        },
    });
    return model;
};