import { createStackNavigator } from "@react-navigation/stack";
import CommentsScreen from "../../screens/CommentsScreen";
import PostsScreen from "../../screens/PostsScreen";

const NewsfeedStack = () => {
    const Stack = createStackNavigator();
    return (
      <Stack.Navigator screenOptions={{headerShown: false}}>
          <Stack.Screen name="Posts" component={PostsScreen} />
          <Stack.Screen name="Comments" component={CommentsScreen} />
      </Stack.Navigator>
    )
  }

  export default NewsfeedStack;