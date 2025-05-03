import CommentsList from "@entities/Comment/ui/CommentsList";
import { useRoute } from "@react-navigation/native";

const CommentsScreen = () => {
    const route = useRoute();
    return (
        <CommentsList postId={route.params.postId} />
    )
}

export default CommentsScreen;