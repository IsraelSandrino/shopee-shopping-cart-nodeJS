import { startMenu } from "./utils/menu.js";

(async function main() {
  try {
    const myCart = [];
    await startMenu(myCart);
  } catch (error) {
    console.error("Erro inesperado:", error.message);
  }
})();
