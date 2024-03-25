import { Button, SafeAreaView, Text, TextInput } from "react-native";
import AuthScreens from "@/styles/authScreens";
import { useState } from "react";
import { auth } from "../fireabaseConfig";
import { signInWithEmailAndPassword } from "firebase/auth";

export default ({ navigation }: { navigation: any }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [error, setError] = useState("");
  const [attempting, setAttempting] = useState(false);

  const handleLogin = () => {
    setAttempting(true);

    if (!verifyInput()) {
      setAttempting(false);
      return;
    }

    signInWithEmailAndPassword(auth, email, password)
      .catch(() => setError("Invalid email or password"))
      .finally(() => setAttempting(false));
  };

  const verifyInput = () => {
    if (!email || !password) {
      setError("All fields are required");
      return false;
    }

    return true;
  };

  return (
    <SafeAreaView style={AuthScreens.container}>
      <Text>Login</Text>
      <TextInput
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
        keyboardType={"email-address"}
        textContentType={"emailAddress"}
        inputMode={"email"}
      />
      <TextInput
        placeholder="Password"
        value={password}
        onChangeText={setPassword}
        secureTextEntry={true}
        textContentType={"password"}
      />
      <Button title="Login" disabled={attempting} onPress={handleLogin} />
      <Button
        title="Forgot Password"
        onPress={() => navigation.navigate("ForgotPassword")}
      />
      <Button
        title="Create Account"
        onPress={() => navigation.navigate("Signup")}
      />
      {error && <Text>{error}</Text>}
    </SafeAreaView>
  );
};
