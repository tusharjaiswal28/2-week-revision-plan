1. What is CORS? Why does it exist?

ANS-> CORS stand for Cross-Origin Resource Sharing. It is a browser security mechanism that controls how resources on a server can be requested from a different origin. The main reason why CORS exist is to protect users and still allow safe cross-website communication. Ans also prevents malicious websites from accessing sensitive data.



2. Explain the Same-Origin Policy.

ANS-> The Same-Origin Policy is a browser security rule that protects users from malicious websites.
An origin is defined by three things:
a. Protocol
b. Domain
c. Port

Requests are allowed only if all three match.



3. What are preflight requests? When do they occur?

ANS-> A preflight request is an HTTP OPTIONS request sent by the browser before the actual request. It occurs when using non-simple HTTP methods (PUT, DELETE, PATCH) or sending custom headers.



4. How do you configure CORS in Express?

ANS-> CORS in Express is configured by sending response headers that tell the browser which origins, methods, headers, and credentials are allowed to access the API.



5. What is CSRF (Cross-Site Request Forgery)? How do you prevent it?

ANS-> CSRF (Cross-Site Request Forgery) is an attack where a malicious site forces a user’s browser to make unauthorized requests.
It is prevented using CSRF tokens, SameSite cookies, and proper request validation.



6. What is XSS (Cross-Site Scripting)? How do you prevent it?

ANS-> XSS is a security vulnerability where an attacker injects malicious JavaScript into a website, and that script runs in other users’ browsers. 
It is prevented by using Input validation, Output encoding, Content Security Policy (CSP), HttpOnly cookies.



7. What is SQL Injection? How do you prevent it?

ANS-> SQL Injection is an attack where malicious SQL is injected into queries.
It is prevented by using ORM libraries, Input validation, Least privilege DB access.



8. What are rate limiting and throttling? Why are they important?

ANS-> Rate Limiting is used to limits the number of requests in a given time window and Throttling is used to slows down requests after a threshold. They are important to protects APIs and improves stability.



9. What is the principle of least privilege?

ANS-> The Principle of Least Privilege means give users, programs, and systems only the minimum permissions they need to do their job and nothing more.



