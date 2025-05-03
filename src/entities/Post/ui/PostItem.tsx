import { useNavigation } from "@react-navigation/native"
import { Pressable, Text, StyleSheet } from "react-native"

const PostItem = ({ data }) => {
    const navigation = useNavigation()

    const handleShowComments = () => {
        navigation.navigate('Comments', { postId: data.id })
    }

    return (
        <Pressable onPress={handleShowComments} style={styles.postContainer}>
            <Text style={styles.title}>{data.id} {data.title}</Text>
            <Text style={styles.body}>{data.body}</Text>
        </Pressable>
    )
}

export default PostItem

const styles = StyleSheet.create({
    postContainer: {
        padding: 5,
        borderWidth: 1,
        borderColor: 'blue'
    },
    title: {
        fontSize: 20,
        fontWeight: '800'
    },
    body: {
        fontSize: 16,
    }
})