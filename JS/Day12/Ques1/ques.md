### Q1: Infinite Scroll Implementation
Implement infinite scroll that loads more items as user scrolls near bottom.

**Requirements:**

- Display initial 10 items
- Detect when user scrolls to bottom 100px
- Load next 10 items
- Show loading indicator
- Handle end of data

**Data:**

```jsx
// Generate 100 items
const allItems = Array.from({ length: 100 }, (_, i) => ({
  id: i + 1,
  title: `Item ${i + 1}`,
  description: `Description for item ${i + 1}`
}));

```