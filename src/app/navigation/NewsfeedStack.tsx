import { createStackNavigator } from "@react-navigation/stack";
import { Text } from "react-native";

const NewsfeedStack = () => {
    const Stack = createStackNavigator();
    return (
      <Stack.Navigator screenOptions={{headerShown: false}}>
          <Stack.Screen name="Main" component={() => <Text>123</Text>} />
          <Stack.Screen name="New" component={() => <Text>456</Text>} />
      </Stack.Navigator>
    )
  }

  export default NewsfeedStack;