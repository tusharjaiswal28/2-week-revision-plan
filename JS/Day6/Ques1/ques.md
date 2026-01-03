### Q1: Fetch and Transform User Data (12 mins)

Fetch users from an API and transform the response to show only active users with their full names.

**API:** `https://jsonplaceholder.typicode.com/users`

**Expected Output:**

```jsx
[
  { id: 1, fullName: 'Leanne Graham', email: 'Sincere@april.biz' },
  { id: 2, fullName: 'Ervin Howell', email: 'Shanna@melissa.tv' },
  // ... only if user object has some condition (e.g., username length > 6)
]

```