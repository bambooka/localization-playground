import api from "@shared/api/axios";

export class CommentsEndpoint {
    static getComments (id: number) {
        return api.get(`/comments?postId=${id}`)
    }
}