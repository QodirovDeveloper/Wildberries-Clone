import {} from "./searchProducts.js";
import { renderUi } from "./renderUi.js";
import { products } from "./data.js";

const $ = (e) => document.querySelector(e);

// ! price-sort with ul=================
const priceSort = document.getElementById("price-sort");
renderUi(products);
priceSort.addEventListener("click", (e) => {
  const target = e.target;
  const price = target.getAttribute("data-price");
  if (!price) return;
  const productsForSorting = [...products];
  if (price === "low") {
    const newSort = productsForSorting.sort((a, b) => a.price - b.price);
    renderUi(newSort);
  } else if (price === "hight") {
    const newSort = productsForSorting.sort((a, b) => b.price - a.price);
    renderUi(newSort);
  }
});

// ! rating-sort =================
const ratingSort = document.getElementById("rating-sort");
const ratingRadio = document.getElementById("rating-radio");

ratingSort.addEventListener("click", () => {
  ratingRadio.checked = true;
  const sorted = [...products].sort((a, b) => b.rating - a.rating);
  renderUi(sorted);
});

// ! brand-sort =================
const uniqueBrands = [...new Set(products.map((p) => p.brand))];
const brandList = document.getElementById("brand-list");
uniqueBrands.forEach((brand) => {
  const li = document.createElement("li");
  li.textContent = brand;
  li.className = "block px-4 py-2 hover:bg-gray-100 cursor-pointer";
  li.setAttribute("data-brand", brand);
  brandList.appendChild(li);
});
brandList.addEventListener("click", (e) => {
  const li = e.target.closest("li");
  if (!li) return;
  const brand = li.getAttribute("data-brand");
  if (!brand) return;
  const filteredProducts = products.filter((p) => p.brand === brand);
  renderUi(filteredProducts);
});

// ! tags ========================
const allTags = products.flatMap((p) => p.tags);
const uniqueTags = [...new Set(allTags)];
const tagList = document.getElementById("tag-list");
uniqueTags.forEach((tag) => {
  const li = document.createElement("li");
  li.textContent = tag;
  li.className = "block px-4 py-2 hover:bg-gray-100 cursor-pointer";
  li.setAttribute("data-tag", tag);
  tagList.appendChild(li);
});
tagList.addEventListener("click", (e) => {
  const li = e.target.closest("li");
  if (!li) return;
  const tag = li.getAttribute("data-tag");
  if (!tag) return;
  const filteredProducts = products.filter((p) => p.tags.includes(tag));
  renderUi(filteredProducts);
});

// ! price-sort with select=================
// priceSort.addEventListener("change", (e) => {
//   const price =
//     e.target.options[e.target.selectedIndex].getAttribute("data-price");
//   const productsForSorting = [...products];
//   if (price == "low") {
//     const newSort = productsForSorting.sort((a, b) => {
//       return a.price - b.price;
//     });
//     renderUi(newSort);
//   } else if (price == "hight") {
//     const newSort = productsForSorting.sort((a, b) => {
//       return b.price - a.price;
//     });
//     renderUi(newSort);
//   }
// });

// ! carousel =================
const max = 3;
const next = $(".next");
const prev = $(".prev");
const carousel = $(".carousel-inner");
let activeIndex = 0;

const animate = () => {
  carousel.style.transform = `translateX(-${(100 / max) * activeIndex}%)`;
};

next.addEventListener("click", () => {
  activeIndex = activeIndex >= max - 1 ? 0 : activeIndex + 1;
  animate();
});

prev.addEventListener("click", () => {
  activeIndex = activeIndex <= 0 ? max - 1 : activeIndex - 1;
  animate();
});
