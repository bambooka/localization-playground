import CommentItem from "@entities/Comment/ui/CommetItem";
import { ScrollView, Text } from "react-native"
import { useRoute } from "@react-navigation/native";
import { useGetAllCommentsQuery } from "../../../entities/Comment/model/commentApi";


const CommentsList = () => {
    const route = useRoute();

    const { data, isLoading, error} = useGetAllCommentsQuery(route?.params?.postId)
    
    if (isLoading) return (<Text>..loading</Text>)
    // if (error) return (<Text>{error}</Text>);

    {console.log(data)}

    return (
        <ScrollView>
            <Text>{`comments for post ${route?.params?.postId}`}</Text>
            {data.map((comment, index) => (
                <CommentItem key={`comment-${index}`} data={comment} />
            ))}
        </ScrollView>
    )
}

export default CommentsList;