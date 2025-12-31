### Q1: Implement Array.prototype.reduce

Create your own implementation of the reduce function.

**Test Case:**

```jsx
const nums = [1, 2, 3, 4, 5];
const sum = nums.myReduce((acc, curr) => acc + curr, 0);
console.log(sum); // 15

const items = [
  { category: 'fruit', name: 'apple' },
  { category: 'vegetable', name: 'carrot' },
  { category: 'fruit', name: 'banana' }
];
const grouped = items.myReduce((acc, item) => {
  if (!acc[item.category]) acc[item.category] = [];
  acc[item.category].push(item.name);
  return acc;
}, {});
console.log(grouped);
// { fruit: ['apple', 'banana'], vegetable: ['carrot'] }

```