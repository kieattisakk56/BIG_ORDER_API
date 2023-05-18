module.exports = (sequelize, Sequelize) => {
    const model = sequelize.define("orders", {
        table_order_ref_id: {
            type: Sequelize.INTEGER
        },
        package_ref_id: {
            type: Sequelize.STRING
        },
        order_no: {
            type: Sequelize.STRING
        },
        order_by: {
            type: Sequelize.STRING
        }
    });
    return model;
};