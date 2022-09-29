const BD = require("../db/index");

class ProductsController {
  /* Crear productos */
  static postProduct(data) {
    try {
      const result = BD.postProduct(data);
      const product = BD.getProId(result.insertedId);
      return product;
    } catch (error) {
      throw error;
    }
  }

  /* Obtener todos los productos */
  static getProduct(query) {
    try {
      const products = BD.getProduct();

      return products;
    } catch (error) {
      throw error;
    }
  }
  /* Obtener productos por ID*/
  static async getProId(id) {
    try {
      console.log("params.id", id);
      return products[0];
    } catch (error) {
      throw error;
    }
  }
}

module.exports = ProductsController;
