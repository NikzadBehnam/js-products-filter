import products from "./products.js";

/* DOM Elements */
const productWrapper = document.querySelector("#product-wrapper");
const filtersContainer = document.querySelector("#filters-container");
const cartCountElement = document.querySelector("#cart-count");
const searchInput = document.querySelector("#search");
const filterCheckboxes = document.querySelectorAll(".check");

let cartItemCount = 0;
const productElements = [];

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
    }, 1500); // The bounce animation duration (adjust if necessary)
  } else {
    cartCountElement.classList.add("hidden");
  }
}

// Appending product elements to the DOM.
function initializeProductDisplay() {
  products.forEach((product) => {
    const productElement = createProductElement(product);
    productElements.push(productElement);
    productWrapper.appendChild(productElement);
  });
}

// Product Filtering
filtersContainer.addEventListener("change", handleProductFilter);
searchInput.addEventListener("input", handleProductFilter);

function handleProductFilter(event) {
  // to get the search term
  const searchTerm = searchInput.value.trim().toLowerCase();

  // to get all the checked categories id
  const checkedCagetories = Array.from(filterCheckboxes)
    .filter((check) => check.checked)
    .map((check) => check.id);

  // loop over the products and check for matches
  productElements.forEach((productElement, index) => {
    const product = products[index];
    // check if the product matches the seach term
    const searchTermMatched = product.name.toLowerCase().includes(searchTerm);
    const isInCheckedCategory =
      checkedCagetories.length === 0 ||
      checkedCagetories.includes(product.category);

    // show or hide the product based on the search term and category
    if (searchTermMatched && isInCheckedCategory) {
      productElement.classList.remove("hidden");
    } else {
      productElement.classList.add("hidden");
    }
  });
}

// Initialize the product display on page load
initializeProductDisplay();
