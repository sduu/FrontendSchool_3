import ColaGenerator from "./components/colaGenerator.js";
import Vendingmachine from "./components/vendingmachine.js";

const colaGenerator = new ColaGenerator();
const vendingmachine = new Vendingmachine();

// (async () => {
//     await colaGenerator.setup();
//     vendingmachine.setup();
// })();

// https://v8.dev/features/top-level-await
await colaGenerator.setup();
vendingmachine.setup();
