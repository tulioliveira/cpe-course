const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  price: {
    type: Number,
    required: true
  }
}, { timestamps: true });

const ProductModel = mongoose.model('Product', productSchema);

class Product {
  /**
   * Get all Products from database
   * @returns {Array} Array of Products
   */
  static getAll() {
    return new Promise((resolve, reject) => {
      ProductModel.find({}).exec().then((results) => {
        resolve(results);
      }).catch((err) => {
        reject(err);
      });
    });
  }

  /**
   * Get a Product by it's id
   * @param {string} id - Product Id
   * @returns {Object} Product Document Data
   */
  static getById(id) {
    return new Promise((resolve, reject) => {
      ProductModel.findById(id).exec().then((result) => {
        resolve(result.toObject());
      }).catch((err) => {
        reject(err);
      });
    });
  }

  /**
   * Create a new Product
   * @param {Object} project - Product Document Data
   * @returns {string} New Product Id
   */
  static create(product) {
    return new Promise((resolve, reject) => {
      const newProduct = new ProductModel(product);
      newProduct.save().then((result) => {
        resolve(result._id);
      }).catch((err) => {
        reject(err);
      });
    });
  }

  /**
   * Update a Product
   * @param {string} id - Product Id
   * @param {Object} Product - Product Document Data
   * @returns {null}
   */
  static update(id, product) {
    return new Promise((resolve, reject) => {
      ProductModel.findByIdAndUpdate(id, product).catch((err) => {
        reject(err);
      });
    });
  }

  /**
   * Delete a Product
   * @param {string} id - Product Id
   * @returns {null}
   */
  static delete(id) {
    return new Promise((resolve, reject) => {
      ProductModel.findByIdAndDelete(id).catch((err) => {
        reject(err);
      });
    });
  }
}

module.exports = Product;
