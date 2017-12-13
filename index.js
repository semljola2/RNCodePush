import React, { Component } from 'react';

import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Button,
} from 'react-native';
import CodePush from 'react-native-code-push';
const CodePushConfig = {
  updateDialog: true,
  installMode: CodePush.InstallMode.IMMEDIATE
}
export default class RNCodePush extends Component {
  checkForUpdates = () => {
    CodePush.sync(CodePushConfig);
  }
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
          My Fortum App Sweden 6!
        </Text>
        <Button title="Check for Updates" onPress={this.checkForUpdates}/>     
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
  },
});

const App = CodePush(CodePushConfig)(RNCodePush);

AppRegistry.registerComponent('RNCodePush', () => App);