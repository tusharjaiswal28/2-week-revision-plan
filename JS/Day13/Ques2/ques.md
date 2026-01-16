### Q2: Deep Clone with Circular Reference Handling
Implement a deep clone function that handles circular references.

**Input:**

```jsx
const obj = {
  name: 'John',
  address: {
    city: 'NYC',
    coords: { lat: 40, lng: -74 }
  },
  hobbies: ['reading', 'gaming']
};
obj.self = obj; // Circular reference

```

**Expected:** Return a deep clone without causing infinite recursion.