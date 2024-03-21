import {NavigationContainer} from "@react-navigation/native";
import FirestoreTest from "@/firestoreTest";
import Home from "@/home";
import {createBottomTabNavigator} from "@react-navigation/bottom-tabs";

const Tab = createBottomTabNavigator();

export default () => {
    return (
        <NavigationContainer>
            <Tab.Navigator>
                <Tab.Screen name="Home" component={Home} />
                <Tab.Screen name="Firebase Test" component={FirestoreTest} />
            </Tab.Navigator>
        </NavigationContainer>
    )
}