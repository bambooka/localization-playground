import { memo } from 'react'
import { Pressable, StyleSheet } from "react-native";

const Button = ({
    disabled = false,
    handlePress,
    styles,
    children
}) => {

    
    return(
        <Pressable
            disabled={disabled}
            style={[styles.button, disabled && baseStyle.disableButton]}
            onPress={handlePress}>
            {children}
        </Pressable>
    )
}

export default memo(Button);

const baseStyle = StyleSheet.create({
    disableButton: {
        opacity: 0.7
    },
})