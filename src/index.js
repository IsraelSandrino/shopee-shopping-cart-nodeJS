import createItem from "./services/items.js";
import * as cartService from "./services/cart.js";

const myCart = [];
const myWhishList = [];

const item1 = await createItem("hotwheels ferrari", 20.99, 1);
const item2 = await createItem("hotwheels lamborghini", 39.99, 3);

console.log("Welcome to the your Shopee Cart!")

// Adicionar itens ao carrinho
await cartService.addItem(myCart, item1);
await cartService.addItem(myCart, item2);

// Deletar itens do carrinho
await cartService.removeItem(myCart, item2);
await cartService.removeItem(myCart, item2);
await cartService.removeItem(myCart, item2);

// Calcular o total)
await cartService.displayCart(myCart);

// Deleta itens ao carrinho
// await cartService.deleteItem(myCart, item2.name);

await cartService.calculateTotal(myCart);