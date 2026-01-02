### Q2: Flatten Nested Object

Flatten a deeply nested object with dot notation keys.

**Input:**

```jsx
const obj = {
  name: 'John',
  address: {
    city: 'NYC',
    coordinates: {
      lat: 40.7128,
      lng: -74.0060
    }
  },
  hobbies: ['reading', 'gaming']
};

```

**Expected Output:**

```jsx
{
  'name': 'John',
  'address.city': 'NYC',
  'address.coordinates.lat': 40.7128,
  'address.coordinates.lng': -74.0060,
  'hobbies.0': 'reading',
  'hobbies.1': 'gaming'
}

```