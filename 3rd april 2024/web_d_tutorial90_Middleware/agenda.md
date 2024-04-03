What is middleware ?
Answer -> Middleware modifies our request. Request aai, Response gaya. Middleware catches the request and start working with that middleware. For example.
app.use(express.static("public")); -> This is a middleware.

We can also make our own middleware.
In order to do that We create a function and push it into app.use(). Or we can also use arrow function within a middleware.

Middleware is a function which will run before any request. It also has request object and response object. Means it has power to send response and request object is also there. We can modify the request.

Order is important in middleware.
In request 1 if you have writtern Harry bhai.
In request 2 if you have writtern Rohan bhai.
Output will be Rohan bhai. Because it run at last.

Types.

1. Application level middleware.
2. Router level middleware: We put it within router. Means which will work within a specific router.
3. Error handling middleware: Suppose that we get and error, so what should we do after handeling that middleware. that is known as error handeling middleware.
4. Built in middleware: Express.static, express.json, express.urlencoded: parses incoming url with encoded payloads.
5. Third party middleware: Which we can use after writing $npm install cookie-parser.
