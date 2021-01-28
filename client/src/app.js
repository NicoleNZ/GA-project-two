import "regenerator-runtime/runtime";
import newProduct from "./newProduct.js";
console.log("Check if this works");
import loginUser from "./user/loginUser.js";
import newUser from "./user/newUser.js";

$("#append-product-form").append(newProduct());

$("#append-login-details").append(loginUser());

$("#append-register-details").append(newUser());