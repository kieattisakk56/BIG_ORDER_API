module.exports = (sequelize, Sequelize) => {
    const model = sequelize.define("store", {
        store_name: {
            type: Sequelize.STRING
        },
        store_detail: {
            type: Sequelize.STRING
        },
        store_image_url: {
            type: Sequelize.STRING
        },
        published: {
            type: Sequelize.BOOLEAN
        }
    });
    return model;
};