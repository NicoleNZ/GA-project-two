import "regenerator-runtime/runtime";
import newProduct from "./newProduct";
console.log("Check if this works");
import loginOrRegisterUser from "./user/loginOrRegisterUser";

$("#append-product-form").append(newProduct());

$("#append-login-register").append(loginOrRegisterUser());

