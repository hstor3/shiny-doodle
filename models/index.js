// import models
const Product = require('./Product');
const Category = require('./Category');
const Tag = require('./Tag');
const ProductTag = require('./ProductTag');
const { belongsToMany } = require('./ProductTag');

// Products belongsTo Category
Product.belongsTo(Category, {
  foreignKey: 
});

// Categories have many Products
Category.hasMany(Product, {
  foreignKey:,
  onDelete: 'CASCADE',
});

// Products belongToMany Tags (through ProductTag)
Product.belongsToMany(Tag, {
  through: {
    model: ProductTag,
    unique: false
  },
  as:
});

// Tags belongToMany Products (through ProductTag)
Tag.belongsToMany(Product, {
  through: {
    model: ProductTag,
    unique: false
  },
  as: 
});

module.exports = {
  Product,
  Category,
  Tag,
  ProductTag,
};

// and Category has many Product models, as a category can have multiple products but a product can only belong to one category.

// Allow products to have multiple tags and tags to have many products by using the ProductTag through model.