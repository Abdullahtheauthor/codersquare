import express, { RequestHandler } from "express"

const app = express();

app.use(express.json());         // this line is added because unlike most servers, express can't hnadle json reqs. This line enable it to do so
                                // use is used to tell your server to use this middleware before any response

const posts: any[]=[];

const requestLoggerMiddleware : RequestHandler = (req, res, next) => {
    console.log('New Request', req.path,  '- body', req.body, ' - response', res.statusMessage,'type:', req.protocol);
    next();
}
app.use(requestLoggerMiddleware);

app.get('/posts', (request, response) => {
    response.send({ posts });
})

app.post('/posts' , (req, res) => {
    const post = req.body;
    posts.push(post);
    res.sendStatus(200);
})

// app.get('/', (request, response) => {
//     response.send({ posts });
// })
app.listen(3000);
