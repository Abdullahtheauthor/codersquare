import { CommentDao } from "./CommentDao";
import { LikeDoa } from "./LikeDao";
import { PostDoa } from "./PostDao";
import { UserDoa } from "./UserDao";
import { InMemeoryDatastore } from "./memorydb";

export interface DataStore extends UserDoa, PostDoa, LikeDoa, CommentDao{

}

export const db = new InMemeoryDatastore();