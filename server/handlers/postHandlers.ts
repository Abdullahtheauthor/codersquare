// import { RequestHandler } from "express";
import { db } from "../datastore";
import { Post, ExpressHandler } from "../types";
import crypto from 'crypto';







export const listPostHandler: ExpressHandler<{},{}> =(request, response) => {
    return response.send({ posts: db.listPosts() });
}
type CreatePostRequest= Pick<Post, 'title' | 'url' | 'userId'>

interface CreatePostResponse{
}

export const createPostHandler: ExpressHandler<CreatePostRequest,CreatePostResponse> = (req, res) => {
    if(!req.body.title || !req.body.url || !req.body.userId){
        return res.sendStatus(400);
    }
    const post: Post = {
        id: crypto.randomUUID(),
        postedAt: Date.now(),
        title: req.body.title,
        url: req.body.url,
        userId: req.body.userId
    }
    db.createPost(post);
    res.sendStatus(200);
}
