const productsCounterElements =
  document.getElementsByClassName("products-counter");
let products = localStorage.getItem("products")
  ? JSON.parse(localStorage.getItem("products"))
  : [];

function calculate() {
  let totalAmount = 0;
  products.forEach((p) => {
    totalAmount += p.amount;
  });
  return totalAmount;
}

function updateProductsCounter() {
  const total = calculate();
  for (const element of productsCounterElements) {
    element.textContent = total;
  }
}

if (products.length) {
  updateProductsCounter();
}

export function addBasket(product) {
  const item = products.find((p) => p.id == product.id);
  if (item) {
    item.amount += 1;
  } else {
    products.push({ ...product, amount: 1 }); // Ensure `amount` is initialized
  }
  localStorage.setItem("products", JSON.stringify(products));
  products = JSON.parse(localStorage.getItem("products"));
  updateProductsCounter();
}
