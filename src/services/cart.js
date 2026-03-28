import formatCurrency from "../utils/format.js";

// Adicionar item no carrinho
function addItem(userCart, item) {
  userCart.push(item);
}

// Calcular o total
function calculateTotal(userCart) {
  const result = userCart.reduce((total, item) => total + item.subtotal(), 0);
  console.log(`\nTotal: ${formatCurrency(result)}`);
}

// Deletar item do carrinho
function deleteItem(userCart, index) {
  if (index < 0 || index >= userCart.length) {
    console.log("Item não encontrado.");
    return;
  }

  userCart.splice(index, 1);
}

// Remover um item
function removeItem(userCart, item, quantity = 1) {
  // Encontra o índice do item
  const indexFound = userCart.findIndex((i) => i.id === item.id);

  // Caso não encontre o item
  if (indexFound == -1) {
    console.log("Item não encontrado");
    return;
  }

  const cartItem = userCart[indexFound];

  if (quantity > cartItem.quantity) {
    userCart.splice(indexFound, 1);
  } else {
    cartItem.quantity -= quantity;
  }
}

// Mostra o(s) item(s) que estão no carrinho
function displayCart(userCart) {
  console.log("\nShopee cart list:");
  userCart.forEach((item, index) => {
    console.log(
      `${index + 1}. ${item.name} - ${formatCurrency(item.price)} | ${item.quantity} | Subtotal = ${formatCurrency(item.subtotal())}`,
    );
  });
}

export { addItem, calculateTotal, deleteItem, removeItem, displayCart };
