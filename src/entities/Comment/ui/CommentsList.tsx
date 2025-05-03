import CommentItem from "@entities/Comment/ui/CommetItem";
import { useAppSelector } from "../../../shared/hooks/redux";
import { useAppDispatch } from "@shared/hooks/redux.ts";
import { ScrollView, Text } from "react-native"
import { useEffect } from "react";
import { getAllComments } from "@entities/Comment/model/CommentsActionCreator.ts";
import { useRoute } from "@react-navigation/native";


const CommentsList = () => {
    const route = useRoute();

    const dispatch = useAppDispatch();
    const { comments, isLoading, error } = useAppSelector((state) => state.comments);

    useEffect(() => {
        dispatch(getAllComments(route?.params?.postId))
    }, [])
    
    if (isLoading) return (<Text>..loading</Text>)
    if (error) return (<Text>{error}</Text>);


    return (
        <ScrollView>
            {comments.map((comment, index) => (
                <CommentItem key={`comment-${index}`} data={comment} />
            ))}
        </ScrollView>
    )
}

export default CommentsList;