### 1: Debounce Implementation

Implement a debounce function from scratch.

**Test Case:**

```jsx
function apiCall(query) {
  console.log('API called with:', query);
}

const debouncedApi = debounce(apiCall, 500);

debouncedApi('a');
debouncedApi('ab');
debouncedApi('abc'); // Only this should execute after 500ms

```