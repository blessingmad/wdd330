import {getData} from "./productData.mjs";
import {renderListWithTemplate} from "./utils.mjs"




function productCardTemplate(product) {
    return `<li class="product-card">
    <a href="product_pages/index.html?product=${product.id}">
    <img
        src="${product.Image}"
        alt="Image of${product.name}"
        />
        <h3 class="card_brand">${product.Brand.name}</h3>
        <h2 class="card_name">${product.NameWithoutBrand}</h2>
        <p class="product-card_price">$${product.FinalPrice}</p></a>
        </li>`
}






export default async function productList(selector, category) {
    const el = document.querySelector(selector);
    const products = await getData(category);
    console.log(products);
    renderListWithTemplate(productCardTemplate, el, products);
}