module.exports = (sequelize, Sequelize) => {
    const model = sequelize.define("files", {
        file_id: {
            type: Sequelize.UUID
        },
        file_path: {
            type: Sequelize.STRING
        },
        file_url: {
            type: Sequelize.STRING
        },
        published: {
            type: Sequelize.BOOLEAN
        }
    });
    return model;
};