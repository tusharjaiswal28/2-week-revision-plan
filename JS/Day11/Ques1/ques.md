### Q1: Shopping Cart with Local State
Build a mini shopping cart with add/remove functionality and total calculation.

**Requirements:**

- Display products with "Add to Cart" button
- Show cart items with quantity controls (+/-)
- Calculate and display subtotal, tax (10%), and total
- Remove item functionality
- Update UI reactively without full reload

**Data:**

```jsx
const products = [
  { id: 1, name: 'Laptop', price: 999 },
  { id: 2, name: 'Mouse', price: 25 },
  { id: 3, name: 'Keyboard', price: 75 },
  { id: 4, name: 'Monitor', price: 299 }
];
```