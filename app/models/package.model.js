module.exports =  (sequelize, Sequelize) => {
    const model = sequelize.define("packages", {
        store_ref_id: {
            type: Sequelize.INTEGER
        },
        package_name: {
            type: Sequelize.STRING
        },
        package_price: {
            type: Sequelize.DECIMAL(10, 2)
        },
        published: {
            type: Sequelize.BOOLEAN
        }
    });
    return model;
};