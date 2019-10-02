import React, { Component } from 'react';
import { StyleSheet} from "react-native";
import { Container, Header, Item, Input, Icon, Button, Text } from 'native-base';

export default class SearchBar extends Component {
  render() {
    return (
      <Container style={styles.container}>
        <Header searchBar rounded>
          <Item>
            <Icon name="ios-search" />
            <Input placeholder="Search" />
            <Icon name="ios-people" />
          </Item>
          <Button transparent>
            <Text>Search</Text>
          </Button>
        </Header>
      </Container>
    );
  }
}

const styles = StyleSheet.create({
    container: {
      position: 'relative',
    },
  });