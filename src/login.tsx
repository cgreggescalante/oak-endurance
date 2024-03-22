import { Button, SafeAreaView, Text, TextInput } from "react-native";
import AuthScreens from "@/styles/authScreens";

export default ({ navigation }: { navigation: any }) => {
  return (
    <SafeAreaView style={AuthScreens.container}>
      <Text>Login</Text>
      <TextInput placeholder="Email" />
      <TextInput placeholder="Password" />
      <Button title="Login" />
      <Button
        title="Forgot Password"
        onPress={() => navigation.navigate("ForgotPassword")}
      />
      <Button
        title="Create Account"
        onPress={() => navigation.navigate("Signup")}
      />
    </SafeAreaView>
  );
};
