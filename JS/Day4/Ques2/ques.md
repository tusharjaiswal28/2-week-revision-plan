### Q2: Implement Array.prototype.forEach

Create your own implementation of the forEach function.

**Test Case:**

```jsx
const nums = [1, 2, 3, 4, 5];
const result = [];
nums.myForEach((num, index) => {
  result.push(num * index);
});
console.log(result); // [0, 2, 6, 12, 20]

```