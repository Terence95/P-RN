import React, {Component} from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, } from 'react-native';
import Button from 'react-native-button';
import { Actions } from 'react-native-router-flux'; // flux reflux redux // -- react navigation --navigator
import Util from './utils';
import Swiper from 'react-native-swiper';


class CusNavigator extends Component {
    // 构造
      constructor(props) {
        super(props);
        // 初始状态
        this.state = {};
      }

    render () {
        return (
            <View style={styles.navigator}>
                <View style={styles.btnContainer}>
                    <Button style={styles.btnText} onPress={Actions.pop}>
                        <Image style={{marginRight:5}} source={require("./images/ios/main/icon_back.png")}/>
                    </Button>
                </View>
                <View style={styles.acTitleContainer}>
                    <Text style={styles.acTitleText}>空调015F</Text>
                </View>
                <View style={styles.moreBtnContainer}>
                    <Button style={styles.btnText} onPress={Actions.pop}>
                        <Image style={{marginRight:5, marginTop:15}} source={require("./images/ios/main/Home/icon_more.png")}/>
                    </Button>
                </View>
            </View>
        )
    }
}




class MainPanel extends Component {

    // 构造
      constructor(props) {
        super(props);
        // 初始状态
        this.state = {
            acClosed:this.props.acClosed,
        };
      }

    render () {
        return (
            <View>
                {
                    this.state.acClosed ? <View style={styles.container}>
                                             <CusNavigator/>
                                             <Image
                                                style={styles.backgroundImage}
                                                source={require('./images/ios/main/Home/bg_zhileng@2x.png')}/>
                                            <TouchableOpacity style={styles.turnOnBtn} onPress={()=>{
                                                    this.setState({
                                                        acClosed: false,
                                                    });
                                                    alert(this.props.acClosed);
                                            }}>
                                                <View style={styles.displayPanel}>
                                                    <Image source={require('./images/ios/main/Logo/logo_.png')}/>
                                                    <Text style={styles.turnOnText}>Touch to turn on</Text>
                                                </View>
                                            </TouchableOpacity>
                                         </View>:
                                         <View style={styles.container}>
                                             <CusNavigator/>

                                             <Image
                                                 resizeMode="contain"
                                                 style={styles.backgroundImage}
                                                 source={require('./images/ios/main/Home/bg_zhileng@2x.png')}/>

                                             <View style={styles.displayPanel}>

                                             </View>

                                             <SwiperComponent/>
                                         </View>
                }
            </View>
        )
    }
}

MainPanel.propTypes = {
    acClosed:React.PropTypes.bool.isRequired,
};

class SwiperTouchSlide extends  Component {
    // 构造
      constructor(props) {
        super(props);
        // 初始状态
        this.state = {
            btnSource: this.props.btnSource,
        };
      }
    render () {
        return (
            <View style={styles.slide}>
                <View style={{width:Util.size.width, height: 75,backgroundColor:"transparent",flexDirection:"row"}}>
                <TouchableOpacity style={styles.controlBtn} onPress={()=>{
                                        alert("click btn");
                                    }}>
                    <Image resizeMode="contain" source={require("./images/ios/main/Home/home_button_start@2x.png")}/>
                </TouchableOpacity>
                <TouchableOpacity style={styles.controlBtn} onPress={()=>{
                                        alert("click btn");
                                    }}>
                    <Image resizeMode="contain" source={require("./images/ios/main/Home/home_button_start@2x.png")}/>
                </TouchableOpacity>
                </View>
                <View style={{width:Util.size.width, height: 75,backgroundColor:"transparent",flexDirection:"row"}}>
                    <TouchableOpacity style={styles.controlBtn} onPress={()=>{
                                        alert("click btn");
                                    }}>
                        <Image resizeMode="contain" source={require("./images/ios/main/Home/home_button_start@2x.png")}/>
                    </TouchableOpacity>
                </View>
            </View>
        )
    }
}

SwiperTouchSlide.propTypes = {
    btnSource:React.PropTypes.string,
}

class SwiperTouchBtn extends Component {
    // 构造
      constructor(props) {
        super(props);
        // 初始状态
        this.state = {
            btnSource:"./images/ios/main/Home/home_button_start@2x.png"
        };
      }

    componentDidMount() {
        alert(this.props.btnSource);
    }
    render () {
        return (
            <TouchableOpacity style={styles.controlBtn} onPress={()=>{
                                        alert("click btn");
                                    }}>
                <Image resizeMode="contain" source={require("./images/ios/main/Home/home_button_start@2x.png")}/>
            </TouchableOpacity>
        )
    }
}

Swiper.propTypes = {
    btnSource: React.PropTypes.string.isRequired,
}

class SwiperComponent extends Component {

    render() {
        return (
            <View style={styles.controlPanel}>
                <View style={styles.sliders}>
                    <Swiper height={200} showsButtons={false} autoplay={false} loop={false}
                            paginationStyle={{bottom: 15}}
                            dot={<View style={{backgroundColor: 'rgba(255,255,255,0.2)', width: 6, height: 6, borderRadius: 3, marginLeft: 3, marginRight: 3, marginTop: 3}} />}
                            activeDot={<View style={{backgroundColor: 'rgba(255,255,255,1)', width: 6, height: 6, borderRadius: 3, marginLeft: 3, marginRight: 3, marginTop: 3}} />}>
                        <View style={styles.slide}>
                            <View style={{width:Util.size.width, height: 75,backgroundColor:"transparent",flexDirection:"row"}}>
                                <TouchableOpacity style={styles.controlBtn} onPress={()=>{
                                        alert("click btn");
                                    }}>
                                    <Image resizeMode="contain" source={require("./images/ios/main/Home/home_button_start@2x.png")}/>
                                </TouchableOpacity>
                                <TouchableOpacity style={styles.controlBtn} onPress={()=>{
                                        alert("click btn");
                                    }}>
                                    <Image resizeMode="contain" source={require("./images/ios/main/Home/home_button_mode.png")}/>
                                </TouchableOpacity>

                                <TouchableOpacity style={styles.controlBtn} onPress={()=>{
                                        alert("click btn");
                                    }}>
                                    <Image resizeMode="contain" source={require("./images/ios/main/Home/home_button_fan@2x.png")}/>
                                </TouchableOpacity>
                                <TouchableOpacity style={styles.controlBtn} onPress={()=>{
                                        alert("click btn");
                                    }}>
                                    <Image resizeMode="contain" source={require("./images/ios/main/Home/home_button_power@2x.png")}/>
                                </TouchableOpacity>
                            </View>
                            <View style={{width:Util.size.width, height: 75,backgroundColor:"transparent",flexDirection:"row"}}>
                                <TouchableOpacity style={[styles.controlBtnDown]} onPress={()=>{
                                        alert("click btn");
                                    }}>
                                    <Image resizeMode="contain" source={require("./images/ios/main/Home/home_button_eco@2x.png")}/>
                                </TouchableOpacity>

                                <TouchableOpacity style={styles.controlBtnDown} onPress={()=>{
                                        alert("click btn");
                                    }}>
                                    <Image resizeMode="contain" source={require("./images/ios/main/Home/home_button_hum@2x.png")}/>
                                </TouchableOpacity>

                                <TouchableOpacity style={styles.controlBtnDown} onPress={()=>{
                                        alert("click btn");
                                    }}>
                                    <Image resizeMode="contain" source={require("./images/ios/main/Home/home_button_leftright@2x.png")}/>
                                </TouchableOpacity>
                                <TouchableOpacity style={styles.controlBtnDown} onPress={()=>{
                                        alert("click btn");
                                    }}>
                                    <Image resizeMode="contain" source={require("./images/ios/main/Home/home_button_updown@2x.png")}/>
                                </TouchableOpacity>

                            </View>
                        </View>
                        <View style={styles.slide}>
                            <View style={{width:Util.size.width, height: 75,backgroundColor:"transparent",flexDirection:"row"}}>
                                <TouchableOpacity style={styles.controlBtn} onPress={()=>{
                                        alert("click btn");
                                    }}>
                                    <Image resizeMode="contain" source={require("./images/ios/main/Home/home_button_start@2x.png")}/>
                                </TouchableOpacity>
                                <SwiperTouchBtn btnSource={"./images"}></SwiperTouchBtn>
                            </View>
                        </View>

                    </Swiper>
                </View>
            </View>
        );
    }
}

SwiperComponent.propTypes = {

}
//java
//MainControlPanel mc = new MainControlPanel(props);


class MainControlPanel extends React.Component {

    _press() {
        // alert(this.state.acClosed);
    }

    // 构造
      constructor(props) {
        super(props);
        // 初始状态
        this.state = {
            acClosed:true,
        };
      }

    render() {
        return(
            <View style={styles.container}>
                <MainPanel acClosed={this.state.acClosed}></MainPanel>
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
    acTitleContainer:{
        position:"absolute",
        backgroundColor:"transparent",
        top: "10%",
    },
    acTitleText:{
        color:"white",
        fontSize: 16,
        fontWeight: "bold",
    },
    moreBtnContainer:{
        position:"absolute",
        // top:"%",
        right: "5%",
        // marginTop:-20,
        backgroundColor: "transparent"
    },
    displayPanel:{
        position:"absolute",
        // backgroundColor:"red",
        width:152,
        height:152,
        borderRadius:76,
        top: "30%",
        borderColor:"white",
        borderWidth:1,
    },
    controlPanel:{
        position:"absolute",
        width: Util.size.width,
        flex:2,
        // backgroundColor:"red",
        height:200,
        bottom:"0%",
        // borderWidth:1,
        // borderColor:"white",
    },
    controlBtn:{
        justifyContent:"center",
        alignItems:"center",
        // paddingTop:10,
        // paddingBottom:10,
        // paddingLeft:20,
        // paddingRight:20,
        flex:1,
        // width:10,
        marginTop:13,
        marginBottom:10,
        // marginLeft:20,
        // marginRight:20,
        // height:,

    },

    controlBtnDown:{
        justifyContent:"center",
        alignItems:"center",
        // paddingTop:10,
        // paddingBottom:10,
        // paddingLeft:20,
        // paddingRight:20,
        flex:1,
        // width:10,
        marginTop:0,
        marginBottom:20,
        // backgroundColor:"yellow",
        // marginLeft:20,
        // marginRight:20,
        // height:,

    },

    sliders: {
        position: 'absolute',
        width: Util.size.width,
        bottom: "0%",
        left:0,
        // backgroundColor:"red",

    },
    slide: {
        flex: 1,
        height: Util.size.height-100,
        justifyContent: 'flex-end',
        alignItems: 'center',
        paddingBottom:30,
        // backgroundColor:"red",
    },
    slideText:{
        color: "#fff",
        textAlign:"center"
    },
    slideTextTitle:{
        color: "#fff",
        textAlign:"center",
        fontWeight:"700"
    },

    navigator:{
        justifyContent: 'center',
        alignItems: 'center',
        top:"4%",
        backgroundColor:"yellow",
        width:Util.size.width
    },
    turnOnText:{
        // position:"absolute",
        top:"-35%",
        textAlign:"center",
        justifyContent:"center",
        backgroundColor:"transparent",
        color:"#fff",
    },
    turnOnBtn:{
        position:"absolute",
        justifyContent:"center",
        alignItems:"center",
        top:"30%",
        // backgroundColor:"red",
        // paddingTop:10,
        // paddingBottom:10,
        // paddingLeft:20,
        // paddingRight:20,
        // flex:1,
        // width:10,
        // marginTop:13,
        // marginBottom:10,
        // marginLeft:20,
        // marginRight:20,
        // height:,
    }
});

export {MainControlPanel, MainPanel};