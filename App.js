import React from 'react';
import { StyleSheet, Text, View} from 'react-native';
import { Button, Header, Slider, Avatar, Icon, Divider, SocialIcon, Input } from "react-native-elements";
export default class App extends React.Component {
  render() {
    return <View style={{ flex: 1,flexDirection: 'column', justifyContent: "center", alignContent: "center", backgroundColor: "white" }}>
        <Input placeholder="username" leftIcon={<Icon name="user" />} />
        <Input placeholder="password" leftIcon={<Icon name="key" />} />
        
      </View>;
    
  }
}