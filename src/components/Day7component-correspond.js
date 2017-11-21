/**
 * Day 6
 * spotify welcome screen, Swiper
 */
'use strict';

import React, {Component} from 'react';
import {Animated, Image, ScrollView, StatusBar, StyleSheet, Text, TouchableHighlight, View, Switch} from 'react-native';
import Video from 'react-native-video';
import Util from './utils';
import Swiper from 'react-native-swiper';
import Icon from 'react-native-vector-icons/FontAwesome';

class ToggleButton extends Component{
    // 构造
      constructor(props) {
        super(props);
        // 初始状态
        this.state = {
            checked:this.props.checked
        };
      }

    onTextChanged() {
        let newState = !this.state.checked;
        this.setState({
            checked:newState
        });
        this.props.callBackParent(newState);
    }

    render(){
        return (
            <View style={styles.toggleBtn}>
                <Text>{this.props.text}</Text>
                <Switch value={this.props.checked} onValueChanged={this.onTextChanged()}></Switch>
            </View>
        )
    }
}

export default class extends Component {

    // 构造
    constructor(props) {
        super(props);
        // 初始状态
        this.state = {
            checked: false,
        };
    }

    componentDidMount() {

    }

    onChildChanged(newState) {
        this.setState({
            checked:newState,
        });
        // callBackParent();
    }

    render() {
        return (
            <View style={styles.container}>
                <Text>Are u checked ? {this.state.checked ? 'yes' : 'no'}</Text>
                <ToggleButton text="Toggle me" checked={this.state.checked}></ToggleButton>
            </View>
        )
    }
}

//<Video source={{uri: "moments"}}
//style={styles.backgroundFixed}
//resizeMode="cover" repeat={true} key="video1" />

const styles = StyleSheet.create({
    container:{
        alignItems:"center",
        justifyContent:"center"
    },
    toggleBtn: {
        margin:20,
        paddingBottom:20,
    }
});