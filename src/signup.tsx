import { Button, SafeAreaView, TextInput, Text } from "react-native";
import AuthScreens from "@/styles/authScreens";
import { useState } from "react";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth } from "../fireabaseConfig";

export default ({ navigation }: { navigation: any }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const [failed, setFailed] = useState(false);
  const [attemptingSignup, setAttemptingSignup] = useState(false);

  const [error, setError] = useState<string | null>(null);

  const signup = () => {
    setFailed(false);
    setAttemptingSignup(true);

    if (!validateInput()) {
      setAttemptingSignup(false);
      return;
    }

    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        updateProfile(userCredential.user, { displayName: name }).catch(() =>
          alert("Could not set name, please update in settings."),
        );
      })
      .catch(() => setFailed(true))
      .finally(() => setAttemptingSignup(false));
  };

  const validateInput = () => {
    if (!email || !password || !confirmPassword || !name) {
      setError("All fields are required.");
      return false;
    }

    if (password.length < 6) {
      setError("Password must be at least 6 characters.");
      return false;
    }

    if (password !== confirmPassword) {
      setError("Passwords do not match.");
      return false;
    }

    return true;
  };

  return (
    <SafeAreaView style={AuthScreens.container}>
      <Text>Signup</Text>
      <TextInput
        placeholder={"Full Name"}
        value={name}
        onChangeText={setName}
      />
      <TextInput
        placeholder="Email"
        inputMode={"email"}
        value={email}
        keyboardType={"email-address"}
        onChangeText={setEmail}
        textContentType={"emailAddress"}
      />
      <TextInput
        placeholder="Password"
        value={password}
        onChangeText={setPassword}
        secureTextEntry={true}
        textContentType={"newPassword"}
      />
      <TextInput
        placeholder="Confirm Password"
        value={confirmPassword}
        onChangeText={setConfirmPassword}
        secureTextEntry={true}
        textContentType={"newPassword"}
      />

      <Button title="Signup" onPress={signup} disabled={attemptingSignup} />
      <Button title="Login" onPress={() => navigation.navigate("Login")} />
      {error && <Text>{error}</Text>}
      {failed && <Text>Signup failed. Please try again.</Text>}
    </SafeAreaView>
  );
};
