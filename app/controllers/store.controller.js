const db = require("../models");
const table = db.tableOrder;
const package = db.package;
const packageCategory = db.packageCategory;

const Op = db.Sequelize.Op;

exports.findOne = (req, res) => {
    const id = req.body.id;
    db.sequelize.query(`select
    c.category_name, 
    mn.id as id,
    mn.menu_name,
    mn.menu_detail,
    mn.menu_image_url,
    mn.menu_price,
    0 as value
    from dbo.table_orders as tb
    join dbo.package_categories as pc  on pc.package_ref_id = tb.package_ref_id
    join dbo.categories as c on pc.category_ref_id = c.id
    join dbo.category_menus as cm on c.id = cm.category_ref_id
    join dbo.menus as mn on mn.id = cm.menu_ref_id
    where tb.table_access_key = :id
    `, {
        replacements: {
            id: id
        },
        type: db.sequelize.QueryTypes.SELECT
    }).then(data => {

        const result = data.reduce((acc, curr) => {
            const existingCategory = acc.find(item => item.category_name === curr.category_name);
            if (existingCategory) {
                existingCategory.menus.push({
                    id: curr.id,
                    menu_name: curr.menu_name,
                    menu_detail: curr.menu_detail,
                    menu_image_url: curr.menu_image_url,
                    menu_price: curr.menu_price,
                    value: curr.value
                });
            } else {
                acc.push({
                    category_name: curr.category_name,
                    store_type: 'shabu',
                    menus: [{
                        id: curr.id,
                        menu_name: curr.menu_name,
                        menu_detail: curr.menu_detail,
                        menu_image_url: curr.menu_image_url,
                        menu_price: curr.menu_price,
                        value: curr.value
                    }]
                });
            }
            return acc;
        }, []);
        res.send(result);
    });
};

