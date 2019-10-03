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
import {CounterBar} from "./CounterBar";
import {Col, Row, Grid} from "react-native-easy-grid";

@inject("store")
@observer
export default class MainContainer extends Component<any, any> {
  render() {
    return (
      <Container style={styles.container}>
        <TopHeaderMain />
        <Grid>
          <Row size={1} style={styles.counterBack}>
            <View style={styles.counterRow}>
              <CounterBar />
            </View>
          </Row>
          <Row size={5} style={styles.contentRow}>
            <Text>{this.props.store.text}</Text>
            <DatePicker />
          </Row>
        </Grid>
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
  },
  counterBack: {
    backgroundColor: "lightgrey",
    width: "100%",
    zIndex: 0
  },
  counterRow: {
    backgroundColor: "orange",
    height: 200,
    width: "100%",
    borderBottomLeftRadius: 750,
    borderBottomRightRadius: 750,
    zIndex: 100
  },
  contentRow: {
    backgroundColor: "lightgrey"
  }
});
