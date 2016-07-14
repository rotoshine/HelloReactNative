'use strict';
/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, {Component} from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  ScrollView,
  TextInput,
  TouchableNativeFeedback
} from 'react-native';

class AwesomeProject extends Component {
  state = {
    keyword: '',
    searchResult: null
  };
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.searchBox}>
          <Text style={{flex: 1, fontWeight: 'bold', fontSize: 20, textAlign:'center'}}>검색어</Text>
          <TextInput style={{flex: 4}} value={this.state.keyword} onChangeText={this.handleChangeText} />
          <TouchableNativeFeedback  onPress={() => { this.setState({ searchResult: 'test' }); }}>
            <View style={{borderWidth: 1, backgroundColor: '#eeeeee', width: 60, height: 30, padding: 10, borderRadius: 5}}>
              <Text style={{textAlign: 'center'}}>검색</Text>
            </View>
          </TouchableNativeFeedback>
        </View>
        <ScrollView style={styles.listView}>
          <Text>{this.state.searchResult}</Text>
        </ScrollView>
      </View>
    );
  }
  
  handleChangeText = (text) => {
    this.setState({
      keyword: text
    });
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'center',
    backgroundColor: '#F5FCFF'
  },
  searchBox: {
    flexDirection: 'row',
    alignSelf: 'stretch',
    height: 50,
    margin: 5,
    paddingLeft: 10,
    paddingRight: 10,
    paddingTop: 5,
    paddingBottom: 5,
    borderWidth: 1,
    borderColor: '#cccccc'
  },
  listView: {
    flex:1,
    alignSelf: 'stretch',
    margin: 5,
    padding: 10,
    borderWidth: 1,
    borderColor: '#cccccc',
    backgroundColor: '#FFFFFF'
  }
});

AppRegistry.registerComponent('AwesomeProject', () => AwesomeProject);
