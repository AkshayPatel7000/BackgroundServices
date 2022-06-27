import { AppRegistry } from "react-native";
import React, { useEffect, useState } from "react";
import App from "./App";
import { heartBeat } from "./store";
import { name as appName } from "./app.json";

const MyHeadlessTask = async () => {
  console.log("out HeartBeat!", heartBeat.beat);
  heartBeat.toggle(true);

  setTimeout(() => {
    console.log("in HeartBeat!", heartBeat.beat);
    heartBeat.toggle(false);
  }, 1000);
};

const RNRedux = () => {
  return <App />;
};

AppRegistry.registerHeadlessTask("Background", () => MyHeadlessTask);
AppRegistry.registerComponent(appName, () => RNRedux);
