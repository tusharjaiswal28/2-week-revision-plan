async function fetchPostsWithComments() {
    // Your implementation here
    try {
        const [postRes, commentsRes] = await Promise.all([
            fetch("https://jsonplaceholder.typicode.com/posts"),
            fetch("https://jsonplaceholder.typicode.com/comments")
        ]);

        const posts = await postRes.json();
        const comments = await commentsRes.json();

        let commentObj = {};

        for (let i = 0; i < comments.length; i++) {
            let postId = comments[i].postId;
            let email = comments[i].email;

            if (!commentObj[postId])
                commentObj[postId] = { count: 1, firstEmail: email };
            else
                commentObj[postId].count++;
        }
        const result = [];

        for (let i = 0; i < posts.length; i++) {
            const post = posts[i];

            if (commentObj[post.id]) {
                result.push({
                    postId: post.id,
                    title: post.title,
                    commentCount: commentObj[post.id].count,
                    firstCommenterEmail: commentObj[post.id].firstEmail
                });
            }
        }

        result.sort((a, b) => b.commentCount - a.commentCount);

        return result.slice(0, 5);
    }
    catch (error)
    {
        console.log("Error:", error.message);
    }
}

fetchPostsWithComments().then(result => console.log(result));