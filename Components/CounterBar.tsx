import React, {Component} from "react";
import {StyleSheet, View} from "react-native";
import {AppLoading} from "expo";
import {Container, Button, Text} from "native-base";
import * as Font from "expo-font";
import {Ionicons} from "@expo/vector-icons";

interface CounterBarProps {
  style?: {
    position: string;
    top: number;
  };
}

export class CounterBar extends Component<any> {
  render() {
    return (
      <View style={styles.container}>
        <Text>Dupa</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    position: "relative",
    top: 0
  }
});
