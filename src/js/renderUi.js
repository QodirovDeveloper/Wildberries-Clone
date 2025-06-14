const $ = (e) => document.querySelector(e);

// ! productsList =============
const template = document.querySelector("template");
const productsList = document.getElementById("products-list");

export function renderUi(products) {
  productsList.textContent = "";
  products.forEach((product) => {
    const clone = template.content.cloneNode(true);

    // !=============================
    const cardImage = clone.querySelector(".card-image");
    const cardTitle = clone.querySelector(".title");
    const rating = clone.querySelector(".rating");
    const price = clone.querySelector(".price");
    const discountPrice = clone.querySelector(".discount-price");
    const brand = clone.querySelector(".brand");
    const category = clone.querySelector(".category");
    const comment = clone.querySelector(".comment");
    const nowPriceElement = clone.querySelector(".now-price");

    //!=======================
    cardTitle.textContent = product.title;
    category.textContent = product.category;
    brand.textContent = product.brand;
    rating.textContent = product.rating;
    price.textContent = `${product.price.toFixed(2)} ₽`;
    discountPrice.textContent = `${product.discountPercentage}%`;
    comment.textContent = product.reviews.map((r) => r.comment).join(" | ");
    cardImage.src = product.thumbnail;

    // !nowPrice============================
    const discountAmount = product.price * (product.discountPercentage / 100);
    const nowPrice = product.price - discountAmount;
    nowPriceElement.textContent = `${nowPrice.toFixed(2)} ₽`;

    productsList.appendChild(clone);
  });
}
