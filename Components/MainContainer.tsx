import React, {Component} from "react";
import {observer, inject} from "mobx-react";
import {
  Container,
  Header,
  Content,
  Button,
  Icon,
  Text,
  View,
  Left,
  Body,
  Title,
  Right,
  DatePicker
} from "native-base";
import {StyleSheet} from "react-native";
import FooterTabs from "./Footer";
import TopHeaderMain from "./Headers/TopHeaderMain";

@inject("store")
@observer
export default class MainContainer extends Component<any, any> {
  render() {
    return (
      <Container style={styles.container}>
        <TopHeaderMain />
        <View style={styles.content}>
          <Text>{this.props.store.text}</Text>
          <DatePicker />
        </View>
        <FooterTabs />
      </Container>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f1fcf0"
  },
  content: {
    padding: 15
  }
});
