import api from "@shared/api/axios";

export class PostsEndpoint {
    static getPosts() {
        return api.get('/posts');
    }
}