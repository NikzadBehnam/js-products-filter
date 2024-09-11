import products from "./scripts/products.js";
import {
  productWrapper,
  cartCountElement,
  filtersContainer,
  searchInput,
  filterCheckboxes,
  createProductElement,
} from "./scripts/dom.js";
import { handleCartUpdate } from "./scripts/cart.js";
import { handleProductFilter } from "./scripts/filters.js";
import { initializeHeaderScroll } from "./scripts/header.js";

//  Header
const header = document.getElementById("sticky-header");
initializeHeaderScroll(header);

// Product Display
const productElements = [];

function initializeProductDisplay() {
  products.forEach((product) => {
    const productElement = createProductElement(product, handleCartUpdate);
    productElements.push(productElement);
    productWrapper.appendChild(productElement);
  });
}

initializeProductDisplay();

// Product Filtering
filtersContainer.addEventListener("change", () => {
  handleProductFilter(products, searchInput, filterCheckboxes, productElements);
});

searchInput.addEventListener("input", () => {
  handleProductFilter(products, searchInput, filterCheckboxes, productElements);
});
