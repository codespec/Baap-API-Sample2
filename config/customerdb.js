var Sequelize = require('sequelize');
var crypto = require('crypto');

const dbconfig  = require('./config.js');
var models  = require('../api/models');

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

const CustomerModel = sequelize.define('customer', {
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

OrderModel.hasMany(OrderItemModel, {foreignKey: 'orderid'});

DishModel.hasMany(DishPictureModel, { foreignKey: 'dishid'});  
DishPictureModel.belongsTo(DishModel, { foreignKey: 'dishid'});

DishModel.hasMany(OrderItemModel, { foreignKey: 'dishid'});  
OrderItemModel.belongsTo(DishModel, { foreignKey: 'dishid'});


module.exports = function() {
  return {
    customerList : [],
    
    /*
      * Save the restaurant inside the "db".
      */
    save(customer) {
      //customer.id = crypto.randomBytes(20).toString('hex');
      return 1;           
    },

    /*
      * Retrieve a customer with a given id or return all the customers 
      * if the id is undefined.
      */
    find(id, res) {
      if(id > 0) {
        CustomerModel.findOne({
          attributes: ['id','userid','name','phone','email','note'],
          where: {id: id}
        }).then(customer => {
          res.json(customer);
        });        
      }
      else {
        CustomerModel.findAll({
          attributes: ['id','userid','name']
        }).then(customers => {
          res.json({ customers: customers});
        });
      }
    },

    findorder(cid, id,res) {
      if(id > 0) {
        OrderModel.findAll({
          include: [{
              model: OrderItemModel, 
              include: [{model: DishModel}]
            }],    
          where: {cid: cid, id: id}
        }).then(order => {
          res.json(order);
        });        
      }
      else {
        OrderModel.findAll({
          where: {cid: cid}
        }).then(orders => {
          res.json({ orders: orders});
        });
      }
    }, 

    findreceipt(cid, id,res) {
      if(id > 0) {
        OrderModel.findAll({
          include: [{
              model: OrderItemModel, 
              include: [{model: DishModel}]
            }],    
          where: {cid: cid, id: id}
        }).then(receipt => {
          res.json(receipt);
        });        
      }
      else {
        OrderModel.findAll({
          where: {cid: cid}
        }).then(receipts => {
          res.json({ receipts: receipts});
        });
      }
    },    

    /*
      * Delete a customer with the given id.
      */
    remove(id) {
        var found = 0;
        return found;           
    },
    /*
      * Update a customer with the given id
      */
    update(id, customer) {
      return 1;
    }       
  }
};    