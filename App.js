import React, { useEffect, useState } from "react";
import { StyleSheet, Text, View, TouchableOpacity, Image } from "react-native";
import { connect } from "react-redux";
import Background from "./Background";
import heart from "./heart.png";
import { observer } from "mobx-react-lite";
import { heartBeat } from "./store";

const App = () => {
  useEffect(() => {
    console.log("beat=====>", heartBeat.beat);
  }, [heartBeat]);

  const imageSize = heartBeat.beat ? 150 : 100;
  return (
    <View style={styles.container}>
      <View style={styles.view}>
        <Image
          source={heart}
          style={{ width: imageSize, height: imageSize }}
          resizeMode="contain"
        />
      </View>
      <View style={styles.view}>
        <TouchableOpacity
          style={styles.button}
          onPress={() => Background.startService()}
        >
          <Text style={styles.instructions}>Start</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.button}
          onPress={() => Background.stopService()}
        >
          <Text style={styles.instructions}>Stop</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default observer(App);
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "white",
  },
  view: {
    flex: 0.5,
    justifyContent: "center",
    alignItems: "center",
  },
  button: {
    backgroundColor: "gray",
    padding: 10,
    margin: 10,
  },
  text: {
    fontSize: 20,
    color: "white",
  },
});
