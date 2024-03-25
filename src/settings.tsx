import React, { useState } from "react";
import { Button, Text, TextInput } from "react-native";
import * as Device from "expo-device";
import * as Application from "expo-application";
import { auth } from "../fireabaseConfig";
import { updateProfile } from "firebase/auth";
import { useAuth } from "@/providers/authProvider";

export default () => {
  const { user } = useAuth();

  const [name, setName] = useState(user?.displayName || "");

  const handleSignOut = () => {
    auth
      .signOut()
      .then(() => alert("Sign Out Successful"))
      .catch((error) => {
        console.error(error);
      });
  };

  const handleUpdateName = () => {
    if (!name) {
      alert("Name is required.");
      return;
    }

    if (!user) return;

    updateProfile(user, { displayName: name })
      .then(() => alert("Name updated successfully."))
      .catch(() => alert("Could not update name, please try again."));
  };

  return (
    <>
      <Text>
        {Device.osName} {Device.osVersion}
      </Text>
      <Text>
        {Application.applicationName} {Application.nativeApplicationVersion}
      </Text>

      <TextInput
        placeholder={"Full Name"}
        value={name}
        onChangeText={setName}
      />
      <Button
        title={"Update Name"}
        onPress={handleUpdateName}
        disabled={user?.displayName === name}
      />
      <Button title={"Sign Out"} onPress={handleSignOut} />
    </>
  );
};
