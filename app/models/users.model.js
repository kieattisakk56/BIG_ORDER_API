module.exports = (sequelize, Sequelize) => {
    const model = sequelize.define("users", {
        user_id: {
            type: Sequelize.UUID,
           
            primaryKey: true,
          
        },
        name: {
            type: Sequelize.STRING
        },
        published: {
            type: Sequelize.BOOLEAN
        }
    });
    return model;
};