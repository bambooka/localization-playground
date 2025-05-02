import { createStackNavigator } from "@react-navigation/stack";
import HomeScreen from "@screens/HomeScreen";
import TodoScreen from "@screens/TodoScreen";

const TodoStack = () => {
    const Stack = createStackNavigator();
    return (
      <Stack.Navigator screenOptions={{headerShown: false}}>
          <Stack.Screen name="Home" component={HomeScreen} />
          <Stack.Screen name="TodoScreen" component={TodoScreen} />
      </Stack.Navigator>
    )
}

export default TodoStack;