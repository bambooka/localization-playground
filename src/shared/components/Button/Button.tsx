import { memo } from 'react'
import { Pressable } from "react-native";

const Button = ({handlePress, styles, children}) => {
    console.log(styles)
    return(
        <Pressable style={styles.button} onPress={handlePress}>
            {children}
        </Pressable>
    )
}

export default memo(Button);