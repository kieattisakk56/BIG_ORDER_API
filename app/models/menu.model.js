module.exports =  (sequelize, Sequelize) => {
    const model = sequelize.define("menu", {
        store_ref_id: {
            type: Sequelize.INTEGER
        },
        menu_name: {
            type: Sequelize.STRING
        },
        menu_detail: {
            type: Sequelize.STRING
        },
        menu_price: {
            type: Sequelize.DECIMAL(10, 2)
        },
        menu_image_url: {
            type: Sequelize.STRING
        },
        is_hala: {
            type: Sequelize.BOOLEAN
        },
        published: {
            type: Sequelize.BOOLEAN
        }
    });


    return model;
};