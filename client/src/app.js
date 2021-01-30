import "regenerator-runtime/runtime";
import newProduct from "./newProduct.js";
console.log("Check if this works");
import loginOrRegisterUser from "./user/loginOrRegisterUser.js";

$("#append-product-form").append(newProduct());

$("#append-login-register").append(loginOrRegisterUser());
