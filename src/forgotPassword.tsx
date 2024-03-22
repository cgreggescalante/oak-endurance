import AuthScreens from "@/styles/authScreens";
import { Button, SafeAreaView, TextInput, Text } from "react-native";

export default ({ navigation }: { navigation: any }) => {
  return (
    <SafeAreaView style={AuthScreens.container}>
      <Text>Forgot Password</Text>
      <TextInput placeholder="Email" />
      <Button title="Reset Password" />
      <Button title="Login" onPress={() => navigation.navigate("Login")} />
    </SafeAreaView>
  );
};
