const firebase = require('firebase');

const productsRef = firebase.firestore().collection('products');

class Product {
  /**
   * Get all products from database
   * @returns {Array} Array of Products
   */
  static getAll() {
    return new Promise((resolve, reject) => {
      productsRef.get().then((snapshot) => {
        const products = snapshot.docs.map((doc) => {
          const product = {
            id: doc.id,
            ...doc.data()
          };
          return product;
        });
        resolve(products);
      }).catch((err) => {
        reject(err);
      });
    });
  }

  /**
   * Get a product by it's id
   * @param {string} id - Product Id
   * @returns {Object} Product Document Data
   */
  static getById(id) {
    return new Promise((resolve, reject) => {
      productsRef.doc(id).get().then((doc) => {
        if (!doc.exists) {
          resolve(null);
        }
        else {
          resolve(doc.data());
        }
      }).catch((err) => {
        reject(err);
      });
    });
  }

  /**
   * Create a new product
   * @param {Object} project - Product Document Data
   * @returns {string} New Product Id
   */
  static create(product) {
    return new Promise((resolve, reject) => {
      productsRef.add(product).then((doc) => {
        resolve(doc.id);
      }).catch((err) => {
        reject(err);
      });
    });
  }

  /**
   * Update a product
   * @param {string} id - Product Id
   * @param {Object} product - Product Document Data
   * @returns {null}
   */
  static update(id, product) {
    return new Promise((resolve, reject) => {
      productsRef.doc(id).update(product).catch((err) => {
        reject(err);
      });
    });
  }

  /**
   * Delete a product
   * @param {string} id - Product Id
   * @returns {null}
   */
  static delete(id) {
    return new Promise((resolve, reject) => {
      productsRef.doc(id).delete().catch((err) => {
        reject(err);
      });
    });
  }
}

module.exports = Product;
