export const productWrapper = document.querySelector("#product-wrapper");
export const cartCountElement = document.querySelector("#cart-count");
export const filtersContainer = document.querySelector("#filters-container");
export const searchInput = document.querySelector("#search");
export const filterCheckboxes = document.querySelectorAll(".check");

export function createProductElement(product, handleCartUpdate) {
  const productElement = document.createElement("div");
  productElement.className =
    "bg-gray-700 rounded-lg p-6 flex-1 min-w-[280px] transform transition-transform duration-700";

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
