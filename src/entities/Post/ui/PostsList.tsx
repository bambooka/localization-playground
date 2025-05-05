import { useGetPostsQuery } from "../../../entities/Post/model/postApi";
import PostItem from "@entities/Post/ui/PostItem";
import Loader from "../../../shared/components/Loader";
import { View, Text, ScrollView } from "react-native";

const PostsList = () => {

    const { data, isLoading, error, } = useGetPostsQuery()
    
    if (isLoading) return (<Loader />)
    if (error) return (<Text>{error.error}</Text>);
    if (!data?.length) return (<View><Text>no comments</Text></View>)

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