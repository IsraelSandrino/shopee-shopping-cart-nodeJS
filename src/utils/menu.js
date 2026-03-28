import readline from "readline";
import * as cartService from "../services/cart.js";
import * as productService from "../services/products.js";
import formatCurrency from "./format.js";
import createItem from "../services/items.js";

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

function askQuestion(question) {
  return new Promise((resolve) => {
    rl.question(question, resolve);
  });
}

async function showMenu() {
  console.log(`\n--- Shopee Cart ---`);
  console.log("1. Adicionar item");
  console.log("2. Remover item");
  console.log("3. Deletar item");
  console.log("4. Exibir carrinho");
  console.log("5. Sair");

  const option = await askQuestion(`\nDigite uma opção> `);
  return option;
}

async function startMenu(cart) {
  let running = true;

  while (running) {
    const option = await showMenu();

    switch (option) {
      // Adicionar item
      case "1": {
        const products = productService.getProducts();
        products.forEach((product, index) =>
          console.log(
            `${index + 1}. ${product.name} - ${formatCurrency(product.price)}`,
          ),
        );
        const productId = await askQuestion(`\nDigite o ID do produto: `);
        const product = productService.getProductById(Number(productId));

        if (product === null) {
          console.log("Produto não encontrado");
        } else {
          const quantity = await askQuestion(`\nDigite a quantidade: `);
          const item = createItem(
            product.name,
            product.price,
            Number(quantity),
          );

          cartService.addItem(cart, item);

          console.log(`\n${product.name} adicionado ao carrinho!`);
        }
        break;
      }
      // Remover Item
      case "2": {
        cart.forEach((item, index) =>
          console.log(`${index + 1}. ${item.name}`),
        );
        const removeIndex = await askQuestion(`\nDigite o número do produto: `);
        const itemToRemove = cart[Number(removeIndex) - 1];

        if (!itemToRemove) {
          console.log("Item não encontrado");
          break;
        }

        const removeQuantity = await askQuestion(`\nDigite a quantidade: `);
        cartService.removeItem(cart, itemToRemove, Number(removeQuantity));
        console.log(`\n${itemToRemove.name} removido do carrinho!`);
        break;
      }

      // Deletar item
      case "3": {
        cart.forEach((item, index) =>
          console.log(`${index + 1}. ${item.name}`),
        );
        const deleteIndex = await askQuestion(`\nDigite o número do produto: `);
        cartService.deleteItem(cart, Number(deleteIndex) - 1);
        console.log(`\Item deletado do carrinho!`);
        break;
      }
      // Exibir carrinho
      case "4": {
        cartService.displayCart(cart);
        cartService.calculateTotal(cart);
        break;
      }
      // Sair
      case "5": {
        running = false;
        rl.close();
        console.log(`\nAté logo!`);
        break;
      }
      default:
        console.log("Opção inválida");
        break;
    }
  }
}

export { startMenu };
