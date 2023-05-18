module.exports = (sequelize, Sequelize) => {
    const model = sequelize.define("orders_transactions", {
        order_ref_id: {
            type: Sequelize.INTEGER
        },
        menu_ref_id: {
            type: Sequelize.INTEGER
        },
        quantity: {
            type: Sequelize.STRING
        },
        menu_price: {
            type: Sequelize.DECIMAL(10, 2)
        },
        menu_price_summary: {
            type: Sequelize.DECIMAL(10, 2)
        },
        order_remark: {
            type: Sequelize.STRING
        }
    });
    return model;
};