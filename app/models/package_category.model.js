module.exports = (sequelize, Sequelize) => {
    const model = sequelize.define("package_category", {
        package_ref_id: {
            type: Sequelize.INTEGER
        },
        category_ref_id: {
            type: Sequelize.INTEGER
        },
        published: {
            type: Sequelize.BOOLEAN
        }
    });
    return model;
};