import PostItem from "@entities/Post/ui/PostItem";
import { getAllPosts } from "@entities/Post/model/PostsActionCreators.ts";
import { useAppSelector, useAppDispatch } from "@shared/hooks/redux.ts";
import { useEffect } from "react";
import { Text, ScrollView, View } from "react-native";

const PostsList = () => {
    const { posts, isLoading, error} = useAppSelector((state) => state.posts)
    const dispatch = useAppDispatch();

    useEffect(() => {
        dispatch(getAllPosts())
    }, []);

    if (isLoading) return (<Text>... poading</Text>)
    if (error) return (<Text>{error}</Text>)

    return (
        <ScrollView>
            {
                posts.map((post, index) => (
                    <PostItem key={`post-${index}`} data={post} />
                ))
            }
        </ScrollView>
    )
}

export default PostsList;