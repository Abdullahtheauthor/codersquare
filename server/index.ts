import express, { RequestHandler } from "express"
import { db } from './datastore'
const app = express();

app.use(express.json());         // this line is added because unlike most servers, express can't hnadle json reqs. This line enable it to do so
                                // use is used to tell your server to use this middleware before any response


const requestLoggerMiddleware : RequestHandler = (req, res, next) => {
    console.log(req.method, req.path,  '- body', req.body);
    next();
}
app.use(requestLoggerMiddleware);

app.get('/posts', (request, response) => {
    response.send({ posts: db.listPosts() });
})

app.post('/posts' , (req, res) => {
    const post = req.body;
    db.createPost(post);
    res.sendStatus(200);
})

// app.get('/', (request, response) => {
//     response.send({ posts });
// })
app.listen(3000);
