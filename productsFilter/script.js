import products from "./products.js";

/* DOM Elements */
const productWrapper = document.querySelector("#product-wrapper");
const cartCountElement = document.querySelector("#cart-count");
const searchInput = document.querySelector("#search");
const filterCheckboxes = document.querySelectorAll(".check");

let cartItemCount = 0;
const productElements = [];

/**
 * Creates a product element in the DOM.
 * @param {Object} product - The product object containing name, category, and price.
 * @returns {HTMLElement} - The DOM element representing the product.
 */
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
      <p class="text-gray-300 mb-4">$${product.price.toLocaleString()}</p>
      <div class="flex items-center justify-between mt-4">
        <button
          class="btn-add-to-cart bg-gray-500 text-white px-4 py-2 rounded transition-colors duration-200"
        >
          Add to Cart
        </button>
      </div>
    </div>
  `;

  const addToCartButton = productElement.querySelector(".btn-add-to-cart");
  addToCartButton.addEventListener("click", handleCartUpdate);

  return productElement;
}

/**
 * Updates the cart when a product is added or removed.
 * @param {Event} event - The click event triggered by the button.
 */
function handleCartUpdate(event) {
  const button = event.target;
  const isAddedToCart = button.classList.contains("added");

  if (isAddedToCart) {
    // Remove from cart
    button.classList.remove("added", "bg-red-500");
    button.classList.add("bg-gray-500");
    button.innerText = "Add to Cart";
    cartItemCount--;
  } else {
    // Add to cart
    button.classList.add("added", "bg-red-500");
    button.classList.remove("bg-gray-500");
    button.innerText = "Remove from Cart";
    cartItemCount++;
  }

  // Update the cart item count display
  if (cartItemCount > 0) {
    cartCountElement.innerText = cartItemCount.toString();
    cartCountElement.classList.remove("hidden");
    // Add Tailwind animation
    cartCountElement.classList.add("animate-bounce");
    // Remove the animation class after it's done to prevent continuous bouncing
    setTimeout(() => {
      cartCountElement.classList.remove("animate-bounce");
    }, 500); // The bounce animation duration (adjust if necessary)
  } else {
    cartCountElement.classList.add("hidden");
  }
}

/**
 * Initializes the product display by creating and appending product elements to the DOM.
 */
function initializeProductDisplay() {
  products.forEach((product) => {
    const productElement = createProductElement(product);
    productElements.push(productElement);
    productWrapper.appendChild(productElement);
  });
}

// Initialize the product display on page load
initializeProductDisplay();
