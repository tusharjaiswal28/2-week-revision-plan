## Rate Limiter Middleware

Create a rate limiting middleware that limits API requests per IP address (e.g., 10 requests per minute). Store request counts in memory. Return appropriate error when limit is exceeded. Include a reset mechanism.