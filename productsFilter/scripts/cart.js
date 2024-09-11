// cart.js

import { cartCountElement } from "./dom.js";

let cartItemCount = 0;

export function handleCartUpdate(event) {
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

  // cart item count display
  if (cartItemCount > 0) {
    cartCountElement.innerText = cartItemCount.toString();
    cartCountElement.classList.remove("hidden");
    cartCountElement.classList.add("animate-bounce");
    setTimeout(() => {
      cartCountElement.classList.remove("animate-bounce");
    }, 1500);
  } else {
    cartCountElement.classList.add("hidden");
  }
}

export function getCartItemCount() {
  return cartItemCount;
}
