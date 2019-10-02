import React, { Component } from "react";
import { StyleSheet, View } from "react-native";
import { AppLoading } from "expo";
import { Container, Button, Text } from "native-base";
import * as Font from "expo-font";
import { Ionicons } from "@expo/vector-icons";

interface TopBarState {
  isReady: boolean;
}

interface TopBarProps {
  style?: {
    position: string;
    top: number;
  };
}

export class TopBar extends Component<TopBarProps, TopBarState> {
  constructor(props) {
    super(props);
    this.state = {
      isReady: false
    };
  }
  async componentDidMount() {
    await Font.loadAsync({
      Roboto: require("../node_modules/native-base/Fonts/Roboto.ttf"),
      Roboto_medium: require("../node_modules/native-base/Fonts/Roboto_medium.ttf"),
      ...Ionicons.font
    });
    this.setState({ isReady: true });
  }
  render() {
    if (!this.state.isReady) {
      return <AppLoading />;
    }
    return (
      <View style={styles.container}>
        <Button>
          <Text>Dupa</Text>
        </Button>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    position: "absolute",
    top: 0
  }
});
