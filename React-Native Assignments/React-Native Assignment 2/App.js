import React, { useState } from "react";
import { ScrollView, StyleSheet, TouchableOpacity, View,Text } from "react-native";

export default function App() {

  const styles = StyleSheet.create({
    container: {
      marginTop: 50,
    },
    firstBox: {
      height: 100,
      backgroundColor: "crimson",
    },
    box: {
      width: "50%",
      height: 100,
      marginBottom: 10,
    },
  });

  const [viewWidth, setViewWidth] = useState("50%");

  const clickHandler = () => {
    setViewWidth("100%");
  };

  return (
    <View style={{ marginTop: 50 }}>
      <ScrollView>
        <TouchableOpacity onPress={clickHandler}>
          <View style={[styles.firstBox, styles.box, { width: viewWidth }]} />
        </TouchableOpacity>

        <TouchableOpacity onPress={clickHandler}>
          <View style={[styles.box, { backgroundColor: "orange" }]}></View>
        </TouchableOpacity>

        <TouchableOpacity onPress={clickHandler}>
          <View style={[styles.box, { backgroundColor: "purple" }]}></View>
        </TouchableOpacity>

        <TouchableOpacity onPress={clickHandler}>
          <View style={[styles.box, { backgroundColor: "papayawhip" }]}></View>
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
}
