const dbConfig = require("../config/db.config.js");
const Sequelize = require("sequelize");
const {
  v4: uuidv4
} = require('uuid');



const sequelize = new Sequelize(dbConfig.DB, dbConfig.USER, dbConfig.PASSWORD, {
  host: dbConfig.HOST,
  port: dbConfig.PORT,
  dialect: dbConfig.dialect,
  pool: {
    max: dbConfig.pool.max,
    min: dbConfig.pool.min,
    acquire: dbConfig.pool.acquire,
    idle: dbConfig.pool.idle,
  },
});

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.categoryMenu = require("./category_menu.model.js")(sequelize, Sequelize);
db.category = require("./category.model.js")(sequelize, Sequelize);
db.files = require("./files.model.js")(sequelize, Sequelize);
db.menu = require("./menu.model.js")(sequelize, Sequelize);
db.orders_transactions = require("./orders_transactions.model.js")(sequelize, Sequelize);
db.orders = require("./orders.model.js")(sequelize, Sequelize);

db.package = require("./package.model.js")(sequelize, Sequelize);
db.store = require("./store.model.js")(sequelize, Sequelize);
db.table = require("./table.model.js")(sequelize, Sequelize);

db.packageCategory = require("./package_category.model.js")(sequelize, Sequelize);
db.tableOrder = require("./table_order.model.js")(sequelize, Sequelize);
db.users = require("./users.model.js")(sequelize, Sequelize);


// set foreign key
db.package.hasMany(
  db.packageCategory, {
    foreignKey: {
      name: 'package_ref_id',
      field: 'package_ref_id'
    },
  }
);
db.packageCategory.belongsTo(db.package, {
  foreignKey: 'id'
});




// setTimeout(() => {
//   seeds();
// }, 2000);


function seeds() {
  db.categoryMenu.bulkCreate(
    [{
      category_ref_id: 1,
      menu_ref_id: 1,
      published: true,
    }, {
      category_ref_id: 2,
      menu_ref_id: 2,
      published: true,
    }]);
  db.category.bulkCreate(
    [{
      store_ref_id: 1,
      category_order: 1,
      category_name: "Category Silver",
      category_detail: "Category 1",
      published: true,
    }, {
      store_ref_id: 1,
      category_order: 1,
      category_name: "Category Gold",
      category_detail: "Category 2",
      published: true,
    }]);
  db.menu.bulkCreate(
    [{
      store_ref_id: 1,
      menu_name: "menu 1",
      menu_detail: "menu 1",
      menu_price: 0,
      menu_image_url: "https://www.seriouseats.com/thmb/WzQz05gt5witRGeOYKTcTqfe1gs=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/butter-basted-pan-seared-steaks-recipe-hero-06-03b1131c58524be2bd6c9851a2fbdbc3.jpg",
      is_hala: false,
      published: true,
    }, {
      store_ref_id: 1,
      menu_name: "menu 2",
      menu_detail: "menu 2",
      menu_price: 0,
      menu_image_url: "https://www.seriouseats.com/thmb/WzQz05gt5witRGeOYKTcTqfe1gs=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/butter-basted-pan-seared-steaks-recipe-hero-06-03b1131c58524be2bd6c9851a2fbdbc3.jpg",
      is_hala: false,
      published: true,
    }]);
  db.packageCategory.bulkCreate(
    [{
        package_ref_id: 1,
        category_ref_id: 1,
        published: 1
      },
      {
        package_ref_id: 2,
        category_ref_id: 2,
        published: 1
      }
    ]
  );
  db.package.bulkCreate(
    [{
        store_ref_id: 1,
        package_name: "Silver",
        package_price: 299,
        published: 1
      },
      {
        store_ref_id: 1,
        package_name: "Gold",
        package_price: 399,
        published: 1
      }
    ]
  );
  db.store.create({
    store_name: "Store A",
    store_detail: "Store A",
    store_image_url: "https://www.sukishigroup.com/Sukishi/wp-content/uploads/2018/05/Logo-W-Web-03-1.png",
    published: 1
  });
  db.table.bulkCreate(
    [{
        store_ref_id: 1,
        table_no: "1",

      }, {
        store_ref_id: 1,
        table_no: "2",

      },
      {
        store_ref_id: 1,
        table_no: "3",

      },
      {
        store_ref_id: 1,
        table_no: "4",
      }
    ]
  );
  db.tableOrder.create({
    table_ref_id: 1,
    table_access_key: uuidv4(),
    package_ref_id: 1,
    customer_seat: 5,
    table_order_status: "open",
    published: 1
  });



}





module.exports = db;