import products from "./products.js";

/* DOM Elements */
const productsWrappers = document.querySelector("#product-wrapper");
const cartCount = document.querySelector("#cart-count");
const fitlersContainer = document.querySelector("#filters-container");
const seachInput = document.querySelector("#search");
const checkBoxes = document.querySelectorAll(".check");

let cartItemCount = 0;
const productElements = [];

/* Loop over the products */
products.forEach((product) => {
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
            class="bg-gray-500 text-white px-4 py-2 rounded transition-colors duration-200"
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  `;

  productElements.push(productElement);
  productsWrappers.appendChild(productElement);
});
