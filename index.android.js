/**
 * Facebook React Android Native App Example
 *  
 *
 * Framework:
 * https://github.com/facebook/react-native
 */
'use strict';

var { NativeModules } = require('react-native');
var React = require('react-native');
var SwitchAndroid = require('SwitchAndroid');
var Text = require('Text');
var Image = require('Image');
var ToastAndroid = require('ToastAndroid')
var UIExplorerPage = require('./UIExplorer/UIExplorerPage');
var UIExplorerBlock = require('./UIExplorer/UIExplorerBlock');


module.exports = NativeModules.ToastAndroid;
module.exports = UIExplorerPage;
module.exports = UIExplorerBlock;

var {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  ToastAndroid,
  TouchableWithoutFeedback
} = React;

var AwesomeProject = React.createClass({
  render: function() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
          	Welcome to React Native!
        </Text>
       
 	<Image  onClick={this.handleClick}
		style={{width: 100, height: 100}} 
		borderWidth="2"
		source={{uri: 'http://facebook.github.io/react/img/logo_og.png'}}
	      />

	<UIExplorerPage title="ToastAndroid" >
		<UIExplorerBlock title="Simple toast">
		  <TouchableWithoutFeedback
		    onPress={() =>
		      ToastAndroid.show('This is a toast with short duration', ToastAndroid.SHORT)}>
		    <Text style={styles.text}>Click me.</Text>
		  </TouchableWithoutFeedback>
		</UIExplorerBlock>
		<UIExplorerBlock title="Toast with long duration">
		  <TouchableWithoutFeedback
		    onPress={() =>
		      ToastAndroid.show('This is a toast with long duration', ToastAndroid.LONG)}>
		    <Text style={styles.text}>Click me too.</Text>
		  </TouchableWithoutFeedback>
		</UIExplorerBlock>
	</UIExplorerPage>
      </View>
    );
  }
});

var styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

AppRegistry.registerComponent('AwesomeProject', () => AwesomeProject);