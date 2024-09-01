import products from "./products.js";

/* DOM Elements */
const productsWrappers = document.querySelector("#product-wrapper");
const cartCount = document.querySelector("#cart-count");
const fitlersContainer = document.querySelector("#filters-container");
const seachInput = document.querySelector("#search");
const checkBoxes = document.querySelectorAll(".check");

let cartItemCount = 0;
const productElements = [];

/* create a product element in DOM */
function createProductElement(product) {
  const productElement = document.createElement("div");
  productElement.className =
    "bg-gray-700 rounded-lg mx-4 p-6 flex-1 min-w-[280px] transform transition-transform duration-700";

  productElement.innerHTML = `
   <div class="overflow-hidden rounded-lg">
      <img
        src="https://via.placeholder.com/150"
        alt="${product.name}"
        class="w-full h-40 object-cover transform transition-transform duration-500 hover:scale-110"
      />
   
    </div>
    <div class="p-4">
       <small class="text-white mb-2">${product.category.toUpperCase()}</small>

      <p class="text-xl font-semibold text-white mb-2">${product.name}</p>
      <p class="text-gray-300 mb-4"><span>$${product.price.toLocaleString()}</span></p>
      <div class="flex items-center justify-between mt-4">
        <div class="space-x-2">
          <button
            class="status bg-gray-500 text-white px-4 py-2 rounded transition-colors duration-200"
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  `;
  productElement.querySelector(".status").addEventListener("click", updateCart);
  return productElement;
}

/* update cart */
function updateCart(e) {
  const statusElement = e.target;
  if (statusElement.classList.contains("added")) {
    // remove from cart
    statusElement.classList.remove("added");
    statusElement.innerText = "Add to Cart";
    statusElement.classList.add("bg-gray-500");
    statusElement.classList.remove("bg-red-500");
    cartItemCount--;
  } else {
    // add to the cart
    statusElement.classList.add("added");
    statusElement.innerText = "Remove from Cart";
    statusElement.classList.remove("bg-gray-500");
    statusElement.classList.add("bg-red-500");
    cartItemCount++;
  }

  // Update cart Item
  cartCount.innerText = cartItemCount.toString();
}

/* Loop over the products */
products.forEach((product) => {
  const productElement = createProductElement(product);
  productElements.push(productElement);
  productsWrappers.appendChild(productElement);
});
