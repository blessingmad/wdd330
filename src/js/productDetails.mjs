import { findProductById } from "./productData.mjs";

function productDetails(productId) {

}
function addToCart() {
    setLocalStorage("so-cart", product);

}
async function addToCartHandler(e) {
    const product = await findProductById(e.target.dataset.id);
    addToCart(product);
}
// add listener to add to chart button
document
    .getElementById("addToCart")
    .addEventListener("click", addToCartHandler);