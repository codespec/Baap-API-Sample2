var models  = require('../api/models');
var crypto = require('crypto');

var Sequelize = require('sequelize');

const dbconfig  = require('./config.js');

const sequelize = new Sequelize(dbconfig.database, dbconfig.username, dbconfig.password, {
  host: dbconfig.hostname,
  dialect: dbconfig.dialect,
  logging: console.log,  
  define: {  
    timestamps: false  
  },
  pool: {
    max: 5,
    min: 0,
    idle: 10000
  }
});


const RestaurantModel = sequelize.define('restaurant', {
      id: { type: Sequelize.INTEGER(11), primaryKey: true},
      userid: { type: Sequelize.STRING},
      name: { type: Sequelize.STRING},
      phone: { type: Sequelize.STRING},
      email: { type: Sequelize.STRING},
      note: { type: Sequelize.STRING, allowNull: true}
    },
    {
      freezeTableName: true,
      timestamps: false,    
    }
  );  

const DishgroupModel = sequelize.define('dishgroup', {
      id: { type: Sequelize.INTEGER(11), primaryKey: true},
      name: { type: Sequelize.STRING},
      note: { type: Sequelize.STRING, allowNull: true}
    },
    {
      freezeTableName: true,
      timestamps: false,    
    }
  );  

const DishModel = sequelize.define('dish', {
      id: { type: Sequelize.INTEGER(11), primaryKey: true},
      rid: { type: Sequelize.INTEGER(11)},
      groupid: { type: Sequelize.INTEGER(11)},
      name: { type: Sequelize.STRING},
      price: { type: Sequelize.DECIMAL(4, 2)},
      cookbox: { type: Sequelize.INTEGER(1) },
      note: { type: Sequelize.STRING, allowNull: true}
    },
    {
      freezeTableName: true,
      timestamps: false,    
    }
  );

const DishPictureModel = sequelize.define('dishpicture', {
    id: { type: Sequelize.INTEGER(11), primaryKey: true},
    rid: { type: Sequelize.INTEGER(11)},
    dishid: { type: Sequelize.INTEGER(11)},
    filename: { type: Sequelize.STRING}
  },
  {
    freezeTableName: true,
    timestamps: false,    
  }
);

const OrderModel = sequelize.define('orderbox', {
      id: { type: Sequelize.INTEGER(11), primaryKey: true},
      rid: { type: Sequelize.INTEGER(11)},
      cid: { type: Sequelize.INTEGER(11)},
      ordertype: { type: Sequelize.INTEGER(1)},
      orderdate: { type: Sequelize.DATE, allowNull: true},
      scheduledate: { type: Sequelize.DATE, allowNull: true},
      takeoutdate: { type: Sequelize.DATE, allowNull: true},
      rstate: { type: Sequelize.INTEGER(1)},
      cstate: { type: Sequelize.INTEGER(1)},
      reward: { type: Sequelize.INTEGER(1)}
    },
    {
      freezeTableName: true,
      timestamps: false,    
    }
  ); 

const OrderItemModel = sequelize.define('orderitem', {
      id: { type: Sequelize.INTEGER(11), primaryKey: true },
      orderid: { type: Sequelize.INTEGER(11) },
      dishid: { type: Sequelize.INTEGER(11) },
      qty: { type: Sequelize.INTEGER(11) },
      createdate: { type: Sequelize.DATE },
      state: { type: Sequelize.INTEGER(1) }
    },
    {
      freezeTableName: true,
      timestamps: false
    }
  );  

const ReceiptModel = sequelize.define('receipt', {
    id: { type: Sequelize.INTEGER(11), primaryKey: true},
    rid: { type: Sequelize.INTEGER(11)},
    cid: { type: Sequelize.INTEGER(11)},
    orderid: { type: Sequelize.INTEGER(11)}        
  },
  {
    freezeTableName: true,
    timestamps: false,    
  }
);   

OrderModel.hasMany(OrderItemModel, {foreignKey: 'orderid'});

DishModel.hasMany(DishPictureModel, { foreignKey: 'dishid'});  
DishPictureModel.belongsTo(DishModel, { foreignKey: 'dishid'});

DishModel.hasMany(OrderItemModel, { foreignKey: 'dishid'});  
OrderItemModel.belongsTo(DishModel, { foreignKey: 'dishid'});

ReceiptModel.hasMany(OrderModel, {foreignKey: 'orderid'});
OrderModel.belongsTo(ReceiptModel, { foreignKey: 'orderid'});

module.exports = function() {
  return {
    restaurantList : [],
    
    /*
      * Save the restaurant inside the "db".
      */
    save(restaurant) {
      //restaurant.id = crypto.randomBytes(20).toString('hex');
      return 1;           
    },

    /*
      * Retrieve a restaurant with a given id or return all the restaurants 
      * if the id is undefined.
      */
    find(id, res) {
      if(id > 0) {
        models.Restaurant.findOne({
          attributes: ['id','userid','name','phone','email','note'],
          where: {id: id}
        }).then(restaurant => {
          res.json(restaurant);
        });        
      }
      else {
        models.Restaurant.findAll({
          attributes: ['id','userid','name']
        }).then(restaurants => {
          res.json({ restaurants: restaurants});
        });
      }
    },

    finddishgroup(rid, id,res) {
      /*
      if(id > 0) {
        DishgroupModel.findOne({
          where: {rid: rid, id: id}
        }).then(dishgroup => {
          res.json(dishgroup);
        });        
      }
      else {
        DishgroupModel.findAll({
          where: {rid: rid}
        }).then(dishgroups => {
          res.json({ dishgroups: dishgroups});
        });
      }*/
    },

    finddish(rid, id,res) {
      /*
      if(id > 0) {
        DishModel.findOne({
          include: {
            model: DishPictureModel, attributes: ['filename']
          },          
          where: {rid: rid, id: id}
        }).then(dish => {
          res.json(dish);
        });        
      }
      else {
        DishModel.findAll({
          include: {
            model: DishPictureModel, attributes: ['filename']
          },              
          where: {rid: rid}
        }).then(dishes => {
          res.json({ dishes: dishes});
        });
      }*/
    },

    findorder(rid, id,res) {
      /*
      if(id > 0) {
        OrderModel.findAll({
          include: [{
              model: OrderItemModel, 
              include: [{model: DishModel}]
            }],    
          where: {rid: rid, id: id}
        }).then(order => {
          res.json(order);
        });        
      }
      else {
        OrderModel.findAll({
          where: {rid: rid}
        }).then(orders => {
          res.json({ orders: orders});
        });
      }*/
    },

    findreceipt(rid, id,res) {
      /*
      if(id > 0) {
        ReceiptModel.findAll({
          include: [{
            model: OrderModel,
            include: [{
              model: OrderItemModel, 
              include: [{
                model: DishModel
              }],
            }],
          }],      
          where: {rid: rid, id: id}
        }).then(receipt => {
          res.json(receipt);
        });        
      }
      else {
        ReceiptModel.findAll({
          where: {rid: rid}
        }).then(receipts => {
          res.json({ receipts: receipts});
        });
      }*/
    }, 

    /*
      * Delete a restaurant with the given id.
      */
    remove(id) {
        var found = 0;
        return found;           
    },
    /*
      * Update a restaurant with the given id
      */
    update(id, restaurant) {
      return 1;
    }       
  }
};    