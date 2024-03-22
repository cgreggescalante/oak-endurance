import { NavigationContainer } from "@react-navigation/native";
import FirestoreTest from "@/firestoreTest";
import Home from "@/home";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Settings from "@/settings";
import { useAuth } from "@/providers/authProvider";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Login from "@/login";
import Signup from "@/signup";
import ForgotPassword from "@/forgotPassword";

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

export default () => {
  const { user } = useAuth();

  return (
    <NavigationContainer>
      {user ? (
        <Tab.Navigator>
          <Tab.Screen name="Home" component={Home} />
          <Tab.Screen name="Firebase Test" component={FirestoreTest} />
          <Tab.Screen name="Settings" component={Settings} />
        </Tab.Navigator>
      ) : (
        <Stack.Navigator screenOptions={{ headerShown: false }}>
          <Stack.Screen name="Login" component={Login} />
          <Stack.Screen name={"Signup"} component={Signup} />
          <Stack.Screen name={"ForgotPassword"} component={ForgotPassword} />
        </Stack.Navigator>
      )}
    </NavigationContainer>
  );
};
