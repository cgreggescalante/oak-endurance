import React from "react";
import { Text } from "react-native";
import * as Device from "expo-device";
import * as Application from "expo-application";

export default () => {
  return (
    <>
      <Text>Settings</Text>
      <Text>
        {Device.osName} {Device.osVersion}
      </Text>
      <Text>
        {Application.applicationName} {Application.nativeApplicationVersion}
      </Text>
    </>
  );
};
