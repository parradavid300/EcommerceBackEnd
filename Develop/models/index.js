// import models
const Product = require('./Product');
const Category = require('./Category');
const Tag = require('./Tag');
const ProductTag = require('./ProductTag');

// Products belongsTo Category
Products.belongsTo(Category, {
  foreignKey: 'product_id',
});
// Categories have many Products
Categories.hasMany(Products, {
  foreignKey: 'category_id',
  onDelete: 'CASCADE',
});
// Products belongToMany Tags (through ProductTag)
const Products = sequelize.define('Products', { name: DataTypes.STRING });
const Tags = sequelize.define('Tags', { name: DataTypes.STRING });
Products.belongsToMany(Tags, { through: 'ProductTag' });
Tags.belongsToMany(Products, { through: 'ProductTag' });
// Tags belongToMany Products (through ProductTag)

module.exports = {
  Product,
  Category,
  Tag,
  ProductTag,
};
