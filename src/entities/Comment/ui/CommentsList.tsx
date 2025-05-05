import CommentItem from "@entities/Comment/ui/CommetItem";
import { ScrollView, Text, View } from "react-native"
import { useRoute } from "@react-navigation/native";
import { useGetAllCommentsQuery } from "../../../entities/Comment/model/commentApi";
import Loader from "../../../shared/components/Loader";


const CommentsList = () => {
    const route = useRoute();

    const { data, isLoading, error} = useGetAllCommentsQuery(route?.params?.postId)
    
    if (isLoading) return (<Loader /> )
    if (error) return (<Text>{error.error}</Text>);
    if (!data?.length) return (<View><Text>no comments</Text></View>)

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