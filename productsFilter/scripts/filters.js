export function handleProductFilter(
  products,
  searchInput,
  filterCheckboxes,
  productElements
) {
  const searchTerm = searchInput.value.trim().toLowerCase();
  const checkedCategories = Array.from(filterCheckboxes)
    .filter((check) => check.checked)
    .map((check) => check.id);

  productElements.forEach((productElement, index) => {
    const product = products[index];
    const searchTermMatched = product.name.toLowerCase().includes(searchTerm);
    const isInCheckedCategory =
      checkedCategories.length === 0 ||
      checkedCategories.includes(product.category);
    if (searchTermMatched && isInCheckedCategory) {
      productElement.classList.remove("hidden");
    } else {
      productElement.classList.add("hidden");
    }
  });
}
