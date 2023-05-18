module.exports =  (sequelize, Sequelize) => {
    const model = sequelize.define("category", {
        store_ref_id: {
            type: Sequelize.INTEGER
        },
        category_order: {
            type: Sequelize.INTEGER
        },
        category_name: {
            type: Sequelize.STRING
        },
        category_detail: {
            type: Sequelize.STRING
        },
        published: {
            type: Sequelize.BOOLEAN
        }
    });

    return model;
};