module.exports =  (sequelize, Sequelize) => {
    const model = sequelize.define("table", {
        store_ref_id: {
            type: Sequelize.INTEGER
        },
        table_no: {
            type: Sequelize.STRING
        },

    });
    return model;
};