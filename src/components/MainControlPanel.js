import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import Button from 'react-native-button';
import { Actions } from 'react-native-router-flux';
import Util from './utils';


export default class Register extends React.Component {
    render() {
        return(
            <View style={styles.container}>
                <View style={styles.btnContainer}>
                    <Button style={styles.btnText} onPress={Actions.pop}>
                        <Image style={{marginRight:5}} source={require("./images/ios/main/icon_back.png")}/>
                    </Button>
                </View>

                <View style={styles.moreBtnContainer}>
                    <Button style={styles.btnText} onPress={Actions.pop}>
                        <Image style={{marginRight:5}} source={require("./images/ios/main/Home/icon_more.png")}/>
                    </Button>
                </View>
                <Image
                    style={styles.backgroundImage}
                    source={require('./images/ios/main/Home/bg_zhileng@2x.png')}/>
            </View>
        )
    }
}



const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        // backgroundColor: '#F5FCFF',
    },
    backgroundImage:{
        flex:1,
        alignItems:"center",
        justifyContent:"center",
        // width:null,
        // height:null,
        resizeMode: Image.resizeMode.contain,
        // backgroundColor:'rgba(0,0,0,0)',
        width: Util.size.width,
        height: Util.size.height,
        zIndex:-1000
    },
    backBtn:{
        position: "absolute",
        top:100,
        left: 100,
        zIndex:100
    },
    btnContainer:{
        position:"absolute",
        // backgroundColor:"red",
        // alignItems:"flex-start",
        top:"4%",
        left: "5%",
        backgroundColor: "transparent"
    },
    btnText: {
        color:"#FFF",
        fontSize: 18,
    },
    moreBtnContainer:{
        position:"absolute",
        top:"5%",
        right: "5%",
        backgroundColor: "transparent"
    },
});