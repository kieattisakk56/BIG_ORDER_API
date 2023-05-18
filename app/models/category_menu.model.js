module.exports =  (sequelize, Sequelize) => {
    const model = sequelize.define("category_menu", {
        category_ref_id: {
            type: Sequelize.INTEGER
        },
        menu_ref_id: {
            type: Sequelize.INTEGER
        },
        published: {
            type: Sequelize.BOOLEAN
        }
    });

    return model;
};