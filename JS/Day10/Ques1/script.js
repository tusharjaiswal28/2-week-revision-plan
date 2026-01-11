const items = [
  { id: 1, name: 'MacBook Pro', category: 'Electronics' },
  { id: 2, name: 'Nike Shoes', category: 'Footwear' },
  { id: 3, name: 'iPhone 15', category: 'Electronics' },
  { id: 4, name: 'Adidas Jacket', category: 'Clothing' },
  { id: 5, name: 'Sony Headphones', category: 'Electronics' }
];

const input = document.getElementById("searchInput");
const list = document.getElementById("list");
const count = document.getElementById("count");


function highlight(text, query) {
  if (!query) return text;

  const regex = new RegExp(`(${query})`, "gi");
  return text.replace(regex, `<span class="highlight">$1</span>`);
}


function render(filteredItems, query) {
  list.innerHTML = "";
  count.textContent = filteredItems.length;

  filteredItems.forEach(item => {
    const li = document.createElement("li");

    li.innerHTML = `
      ${highlight(item.name, query)} 
      (${highlight(item.category, query)})
    `;

    list.appendChild(li);
  });
}


render(items, "");


input.addEventListener("input", function () {
  const query = this.value.toLowerCase();

  const filtered = items.filter(item =>
    item.name.toLowerCase().includes(query) ||
    item.category.toLowerCase().includes(query)
  );

  render(filtered, query);
});
