import data from "../data/products.json" assert { type: "json" };

function getProducts () {
  return data;
}

function getProductById(id) {
  return data.find(product => product.id === id) ?? null;
}

export {
  getProducts,
  getProductById
}