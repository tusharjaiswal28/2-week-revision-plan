## Q: 1

Parallel API Calls with Data Enrichment
Fetch posts and comments separately, then merge them to show each post with its comment count and the email of the first commenter.

Requirements:

Fetch both APIs in parallel (use Promise.all)
Merge data efficiently
Filter to show only posts that have at least 1 comment
Sort results by comment count (descending)
Limit output to top 5 posts
APIs:

Posts: https://jsonplaceholder.typicode.com/posts
Comments: https://jsonplaceholder.typicode.com/comments
Test Case:
```
async function fetchPostsWithComments() {
  // Your implementation here
}

fetchPostsWithComments().then(result => console.log(result));

/* Expected Output (top 5 posts by comment count):
[
  {
    postId: 1,
    title: 'sunt aut facere repellat provident...',
    commentCount: 5,
    firstCommenterEmail: 'Eliseo@gardner.biz'
  },
  {
    postId: 2,
    title: 'qui est esse',
    commentCount: 5,
    firstCommenterEmail: 'Jayne_Kuhic@sydney.com'
  },
  // ... 3 more posts
]
*/
```
Hints:

Each post in the API has an id field
Each comment has a postId field that links to a post
Use Array.prototype.reduce() or similar to count comments per post
Remember to handle potential errors in API calls