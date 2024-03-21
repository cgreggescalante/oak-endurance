import {NavigationContainer} from "@react-navigation/native";
import {createNativeStackNavigator} from "@react-navigation/native-stack";
import FirestoreTest from "@/firestoreTest";
import Home from "@/home";

const Stack = createNativeStackNavigator();

export default () => {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name="Home" component={Home} />
                <Stack.Screen name="FT" component={FirestoreTest} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}