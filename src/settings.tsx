import React from "react";
import { Button, Text } from "react-native";
import * as Device from "expo-device";
import * as Application from "expo-application";
import { auth } from "../fireabaseConfig";

export default () => {
  const handleSignOut = () => {
    auth
      .signOut()
      .then(() => alert("Sign Out Successful"))
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <>
      <Text>Settings</Text>
      <Text>
        {Device.osName} {Device.osVersion}
      </Text>
      <Text>
        {Application.applicationName} {Application.nativeApplicationVersion}
      </Text>
      <Button title={"Sign Out"} onPress={handleSignOut} />
    </>
  );
};
