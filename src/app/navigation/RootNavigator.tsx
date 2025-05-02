import TodoStack from "@app/navigation/TodoStack";
import NewsfeedStack from "@app/navigation/NewsfeedStack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

const RootNavigator = () => {
    const Tab = createBottomTabNavigator();
    return (
        <Tab.Navigator screenOptions={{headerShown: false}}>
            <Tab.Screen name="news" component={NewsfeedStack} />
            <Tab.Screen name="Todo" component={TodoStack} />
        </Tab.Navigator>
    )
}

export default RootNavigator;