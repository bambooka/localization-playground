import { useGetPostsQuery } from "../../../entities/Post/model/postApi";
import PostItem from "@entities/Post/ui/PostItem";
import { Text, ScrollView } from "react-native";

const PostsList = () => {

    const { data, isLoading, error, } = useGetPostsQuery()
    
    if (isLoading) return (<Text>... poading</Text>)
    if (error) return (<Text>{error}</Text>)

    return (
        <ScrollView>
            {
                data.map((post, index) => (
                    <PostItem key={`post-${index}`} data={post} />
                ))
            }
        </ScrollView>
    )
}

export default PostsList;