First steps: 
1. npm init
2. npm i typescript express    // Express is a web server based on node
3. npm i -D @types/express nodemon // -d means it will be installed in devDependencies in the package.json so it won't be used in Deployment.
4. you need to modify package.josn to be
 "scripts": {
    "start": "nodemon index.ts"
  },
  This will help you when you run: npm start

middleware is used to do some operations on the request or the response before responding
next() function orders to go to the next operation, it could be another middleware like: chain of middlewares or go to the function that handles
the path

RequestHandler is an express pacakge that is used to handle the middleware 
use function used to tell your server to use this middleware before any response