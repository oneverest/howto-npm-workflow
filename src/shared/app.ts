// Standard usage of TypeScript
import {ExampleImpl} from "./core/ExampleImpl";
const ex = new ExampleImpl("Hello World");
console.log(ex.capitalize());

// TODO fix
// Usage of third-party ES5 JavaScript
// const ThirdPartyES5 = require("./third-party/ThirdPartyES5.js");
// let es5 = new ThirdPartyES5("Usage of third-party ES5 JavaScript");
// console.log(es5.getValue());

// Usage of third-party ES6 JavaScript
// (requires TypeScript compiler option "allowJs" to true)
import ThirdPartyES6 from "./third-party/ThirdPartyES6.js";
let es6 = new ThirdPartyES6("Usage of third-party ES6 JavaScript");
console.log(es6.getValue());

// Usage of ES7 features
// (requires TypeScript compiler option "target" to "es6")
// (requires "transform-runtime" Babel plugin)
async function es7() {
    const value = await Promise.resolve("Usage of ES7 TypeScript features");
    console.log(value);
}
es7();

// Checking Source Map support
es6.throwException();