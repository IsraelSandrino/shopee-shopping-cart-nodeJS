// Quais ações meu carrinho pode fazer?

// Adicionar item no carrinho
async function addItem(userCart, item) {
	userCart.push(item);
}

// Calcular o total
async function calculateTotal(userCart) {
  console.log("\nShopee cart total is:")
	const result = userCart.reduce((total, item) => total + item.subtotal(), 0);
	console.log(`Total: ${result}`);
}

// Deletar item do carrinho
async function deleteItem(userCart, name) {
  const index = userCart.findIndex(item => item.name === name);

  if (index !== -1) {
    userCart.splice(index, 1);
  }
}

// Remover um item
async function removeItem(userCart, index) {

  // Encontra o índice do item
  const indexFound = userCart.findIndex(item => item.name === index.name);

  // Caso não encontre o item
  if ( indexFound == -1 ) {
    console.log("Item não encontrado");
    return;
  }

  // item > 1 subtrair um item, item = 1 deletar o item
  if ( userCart[indexFound].quantity > 1 ) {
    userCart[indexFound].quantity -= 1;
    return;
  } else {
    userCart.splice(indexFound, 1);
    return;
  }
}

async function displayCart(userCart) {
  console.log("\nShopee cart list:")
  userCart.forEach((item, index) => {
    console.log(`${index + 1}. ${item.name} - ${item.price} | ${item.quantity} | Subtotal = ${item.subtotal()}`)
  });
}

export {
  addItem,
  calculateTotal,
  deleteItem,
  removeItem,
  displayCart
}
