import React, {Component} from "react";
import {AppLoading} from "expo";
import {StyleSheet, Text, View, Button} from "react-native";
import {TopBar} from "./Components/TopBar";
import * as Font from "expo-font";
import {Ionicons} from "@expo/vector-icons";
import SearchBar from "./Components/Searchbar";
import FooterTabs from "./Components/Footer";
import {Provider} from "mobx-react";
import {Store} from "./Lib/Store/RootStore";

interface AppState {
  isReady: boolean;
}

export default class App extends Component<{}, AppState> {
  constructor(props) {
    super(props);
    this.state = {
      isReady: false
    };
  }

  async componentDidMount() {
    await Font.loadAsync({
      Roboto: require("native-base/Fonts/Roboto.ttf"),
      Roboto_medium: require("native-base/Fonts/Roboto_medium.ttf"),
      ...Ionicons.font
    });
    this.setState({isReady: true});
  }
  render() {
    if (!this.state.isReady) {
      return <AppLoading />;
    }
    return (
      <Provider store={Store}>
        <View style={styles.container}>
          <SearchBar />
          <FooterTabs />
        </View>
      </Provider>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
});
