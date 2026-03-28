// Casos de uso dos itens

class Item {
  constructor(name, price, quantity) {
    this.name = name;
    this.price = price;
    this.quantity = quantity;
  }

  subtotal() {
    return this.price * this.quantity;
  }
}

// Criar item com subtotal certo
function createItem(name, price, quantity) {
  return new Item(name, price, quantity);
}

export default createItem;
