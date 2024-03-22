import { Button, SafeAreaView, TextInput, Text } from "react-native";
import AuthScreens from "@/styles/authScreens";

export default ({ navigation }: { navigation: any }) => {
  return (
    <SafeAreaView style={AuthScreens.container}>
      <Text>Signup</Text>
      <TextInput placeholder="Email" />
      <TextInput placeholder="Password" />
      <Button title="Signup" />
      <Button title="Login" onPress={() => navigation.navigate("Login")} />
    </SafeAreaView>
  );
};
