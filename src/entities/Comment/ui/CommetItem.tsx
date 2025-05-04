import React from "react";
import { View, Text, StyleSheet } from "react-native"

const CommentItem = ({data}) => {
    return (
        <View style={styles.commentContainer}>
            <Text style={styles.commentName}>{data.text}</Text>
        </View>
    )
}

export default React.memo(CommentItem);

const styles = StyleSheet.create({
    commentContainer: {
        borderColor: 'blue',
        borderWidth: 1,
        paddingHorizontal: 10,
        paddingVertical: 15
    },
    commentName: {
        color: 'red'
    },
    commentBody: {
        color: 'green'
    }
})