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
  Right
} from "native-base";
import {StyleSheet} from "react-native";
import FooterTabs from "./Footer";
import TopHeader from "./TopHeader";

@inject("store")
@observer
export default class MainContainer extends Component<any, any> {
  render() {
    return (
      <Container style={styles.container}>
        <TopHeader />
        <Text>{this.props.store.text}</Text>
        <FooterTabs />
      </Container>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: "100%",
    backgroundColor: "#f1fcf0"
  }
});
