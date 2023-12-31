import { findProductById } from "./productData.mjs";
import {setLocalStorage} from "./utils.mjs";

let product = {};

export default async function productDetails(productId) {
    product = await findProductById(productId);
    renderProductDetails();
    document.getElementById("addToCart").addEventListener("click", addToCart);

}
function renderProductDetails() {
    document.querySelector("#productName").innerText = product.Brand.Name;
    document.querySelector("#productNameWithoutBrand").innerText = product.NameWithoutBrand;
    document.querySelector("#productImage").src = product.Image;
    document.querySelector("#productFinalPrice").innerText = product.FinalPrice;
    document.querySelector("#productColorName").innerText = product. Colors[0].ColorName;
    document.querySelector("#productDescriptionHtmlSample").innerHTML = product.DescriptionHtmlSample;
    document.querySelector("#addToCart").dataset.id = product.id;
}