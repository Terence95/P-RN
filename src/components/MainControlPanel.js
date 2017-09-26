import React, {Component} from 'react';
import {View, Text, StyleSheet, Image, TouchableOpacity,} from 'react-native';
import Button from 'react-native-button';
import {Actions} from 'react-native-router-flux'; // flux reflux redux // -- react navigation --navigator
import Util from './utils';
import Swiper from 'react-native-swiper';


// 自定义顶栏组件
class CusNavigator extends Component {
    // 构造
    constructor(props) {
        super(props);
        // 初始状态
        this.state = {};
    }

    render() {
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
                        <Image style={{marginRight:5, marginTop:15}}
                               source={require("./images/ios/main/Home/icon_more.png")}/>
                    </Button>
                </View>
            </View>
        )
    }
}

// 主面板组件
class MainPanel extends Component {

    // 构造
    constructor(props) {
        super(props);
        // 初始状态
        this.state = {
            acClosed: this.props.acClosed,
            acInfo: {
                acDegree: 26,
                acMode: "COOL"
            }
        };
    }

    getBgImg(acMode) {
        switch (acMode) {

        }
    }

    render() {
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
                                            }}>
                            <View style={styles.displayPanel}>
                                <Image source={require('./images/ios/main/Logo/logo_.png')}/>
                                <Text style={styles.turnOnText}>Touch to turn on</Text>
                            </View>
                        </TouchableOpacity>
                    </View> :
                        <View style={styles.container}>
                            <CusNavigator/>

                            <Image
                                resizeMode="contain"
                                style={styles.backgroundImage}
                                source={require('./images/ios/main/Home/bg_zhileng@2x.png')}/>

                            <View style={styles.displayPanel}>
                                <Image style={{justifyContent:"center",alignItems:"center"}}
                                       source={require('./images/ios/main/Premier/home_round-01@2x.png')}/>
                                <View style={styles.acInfoContainer}>
                                    <Text style={styles.acDegreeText}>{this.state.acInfo.acDegree}</Text>
                                    <View style={styles.acDegreeUnitContainer}>
                                        <Text style={styles.acDegreeUnit}>℃</Text>
                                    </View>
                                    <Text style={styles.acModeText}>{this.state.acInfo.acMode}</Text>
                                </View>
                            </View>

                            <View style={styles.moreInfoContainer}>
                                <View style={styles.fanInfoContainer}>
                                    <Text style={styles.fanInfoText}>Fan
                                        <Image  style={{width:30,height:30,backgroundColor:"transparent", marginLeft: 10, marginTop: 10}} resizeMode="contain" source={require('./images/ios/main/Home/fan/fan_4@2x.png')}/>
                                    </Text>
                                    <Text style={styles.fanInfoText}>Indoor --</Text>
                                </View>

                            </View>

                            <SwiperComponent/>
                        </View>
                }
            </View>
        )
    }
}

MainPanel.propTypes = {
    acClosed: React.PropTypes.bool.isRequired,
};

// 滑动控制按钮组件
class SwiperTouchBtn extends Component {
    // 构造
    constructor(props) {
        super(props);
        // 初始状态
        this.state = {
            btnSource: "./images/ios/main/Home/home_button_start@2x.png",
            btnInfo: this.props.btnSource,
            btnTop: this.props.btnTop
        };
    }

    componentDidMount() {

    }

    render() {
        let infoList = this.state.btnInfo;

        return (
            <View
                style={{width:Util.size.width, height:70,backgroundColor:"transparent", alignItems:'center',flexDirection:"row", flexWrap:"wrap"}}>
                {
                    infoList.map((item, index)=> {
                        return (<TouchableOpacity disabled={item.btnDisabled} key={index}
                                                  style={styles.controlBtn}
                                                  onPress={()=>{
                                        item.btnFunc();
                                    }}>
                            <Image resizeMode="contain" source={item.btnImg} style={{opacity:item.btnDisabled? 0 : 1}}/>
                        </TouchableOpacity>)
                    })
                }
            </View>
        )
    }
}

SwiperTouchBtn.propTypes = {
    btnSource: React.PropTypes.array.isRequired,
    btnTop: React.PropTypes.bool,
}


class SwiperComponent extends Component {


    renderPage(length) {
        return (
            <View>

            </View>)
    }

    renderBtn() {

    }

    render() {

        let pageInfo = [
            {
                pageIndex: 0,
                btnGroup: [{
                    btnImg: require("./images/ios/main/Home/home_button_start@2x.png"),
                    btnDisabled: false,
                    btnFunc: ()=> {
                        alert("start");
                        // 如何通过在这个组件里改变另一个组件的状态?

                    }
                }, {
                    btnImg: require("./images/ios/main/Home/home_button_mode.png"),
                    btnDisabled: false,
                }, {
                    btnImg: require("./images/ios/main/Home/home_button_fan@2x.png"),
                    btnDisabled: false,
                }, {
                    btnImg: require("./images/ios/main/Home/home_button_power@2x.png"),
                    btnDisabled: false,
                }, {
                    btnImg: require("./images/ios/main/Home/home_button_eco@2x.png"),
                    btnDisabled: false,
                }, {
                    btnImg: require("./images/ios/main/Home/home_button_hum@2x.png"),
                    btnDisabled: false,
                }, {
                    btnImg: require("./images/ios/main/Home/home_button_leftright@2x.png"),
                    btnDisabled: false,
                }, {
                    btnImg: require("./images/ios/main/Home/home_button_updown@2x.png"),
                    btnDisabled: false,
                }]
            },
            {
                pageIndex: 1,
                btnGroup: [{
                    btnImg: require("./images/ios/main/Home/home_button_below@2x.png"),
                    btnDisabled: false,
                }, {
                    btnImg: require("./images/ios/main/Home/home_button_updown@2x.png"),
                    btnDisabled: false,
                }]
            }];

        // let allCtlBtn = [{
        //     btnImg: require("./images/ios/main/Home/home_button_start@2x.png"),
        //     btnDisabled: false,
        // }, {
        //     btnImg: require("./images/ios/main/Home/home_button_mode.png"),
        //     btnDisabled: false,
        // }, {
        //     btnImg: require("./images/ios/main/Home/home_button_fan@2x.png"),
        //     btnDisabled: false,
        // }, {
        //     btnImg: require("./images/ios/main/Home/home_button_power@2x.png"),
        //     btnDisabled: false,
        // }, {
        //     btnImg: require("./images/ios/main/Home/home_button_eco@2x.png"),
        //     btnDisabled: false,
        // }, {
        //     btnImg: require("./images/ios/main/Home/home_button_hum@2x.png"),
        //     btnDisabled: false,
        // }, {
        //     btnImg: require("./images/ios/main/Home/home_button_leftright@2x.png"),
        //     btnDisabled: false,
        // }, {
        //     btnImg: require("./images/ios/main/Home/home_button_updown@2x.png"),
        //     btnDisabled: false,
        // }, {
        //     btnImg: require("./images/ios/main/Home/home_button_fahrenheit@2x.png"),
        //     btnDisabled: false,
        // }, {
        //     btnImg: require("./images/ios/main/Home/home_button_hum@2x.png"),
        //     btnDisabled: true,
        // }, {
        //     btnImg: require("./images/ios/main/Home/home_button_hum@2x.png"),
        //     btnDisabled: true,
        // }, {
        //     btnImg: require("./images/ios/main/Home/home_button_hum@2x.png"),
        //     btnDisabled: true,
        // }, {
        //     btnImg: require("./images/ios/main/Home/home_button_hum@2x.png"),
        //     btnDisabled: true,
        // }, {
        //     btnImg: require("./images/ios/main/Home/home_button_hum@2x.png"),
        //     btnDisabled: true,
        // }, {
        //     btnImg: require("./images/ios/main/Home/home_button_hum@2x.png"),
        //     btnDisabled: true,
        // }, {
        //     btnImg: require("./images/ios/main/Home/home_button_hum@2x.png"),
        //     btnDisabled: true,
        // }];


        let btnPage1Group1 = [{
            btnImg: require("./images/ios/main/Home/home_button_start@2x.png"),
            btnDisabled: false,
        }, {
            btnImg: require("./images/ios/main/Home/home_button_mode.png"),
            btnDisabled: false,
        }, {
            btnImg: require("./images/ios/main/Home/home_button_fan@2x.png"),
            btnDisabled: false,
        }, {
            btnImg: require("./images/ios/main/Home/home_button_power@2x.png"),
            btnDisabled: false,
        }, {
            btnImg: require("./images/ios/main/Home/home_button_start@2x.png"),
            btnDisabled: false,
        }, {
            btnImg: require("./images/ios/main/Home/home_button_mode.png"),
            btnDisabled: false,
        }, {
            btnImg: require("./images/ios/main/Home/home_button_fan@2x.png"),
            btnDisabled: false,
        }, {
            btnImg: require("./images/ios/main/Home/home_button_power@2x.png"),
            btnDisabled: false,
        }
        ];

        let btnPage1Group2 = [{
            btnImg: require("./images/ios/main/Home/home_button_eco@2x.png"),
            btnDisabled: false,
        }, {
            btnImg: require("./images/ios/main/Home/home_button_hum@2x.png"),
            btnDisabled: false,
        }, {
            btnImg: require("./images/ios/main/Home/home_button_leftright@2x.png"),
            btnDisabled: false,
        }, {
            btnImg: require("./images/ios/main/Home/home_button_updown@2x.png"),
            btnDisabled: false,
        }];

        let btnPage2Group1 = [{
            btnImg: require("./images/ios/main/Home/home_button_below@2x.png"),
            btnDisabled: false,
        }, {
            btnImg: require("./images/ios/main/Home/home_button_hum@2x.png"),
            btnDisabled: true,
        }, {
            btnImg: require("./images/ios/main/Home/home_button_hum@2x.png"),
            btnDisabled: true,
        }, {
            btnImg: require("./images/ios/main/Home/home_button_hum@2x.png"),
            btnDisabled: true,
        }];

        let btnPageGroup2 = [{
            btnImg: require("./images/ios/main/Home/home_button_hum@2x.png"),
            btnDisabled: true,
        }, {
            btnImg: require("./images/ios/main/Home/home_button_hum@2x.png"),
            btnDisabled: true,
        }, {
            btnImg: require("./images/ios/main/Home/home_button_hum@2x.png"),
            btnDisabled: true,
        }, {
            btnImg: require("./images/ios/main/Home/home_button_hum@2x.png"),
            btnDisabled: true,
        }];

        let key = 0;

        return (
            <View style={styles.controlPanel}>
                <Swiper height={200} showsButtons={false} autoplay={false} loop={false}
                        paginationStyle={{bottom: 15}}
                        dot={<View style={{backgroundColor: 'rgba(255,255,255,0.2)', width: 6, height: 6, borderRadius: 3, marginLeft: 3, marginRight: 3, marginTop: 3}} />}
                        activeDot={<View style={{backgroundColor: 'rgba(255,255,255,1)', width: 6, height: 6, borderRadius: 3, marginLeft: 3, marginRight: 3, marginTop: 3}} />}>
                    {
                        pageInfo.map((item, index)=> {
                            return (
                                // 当前传入一串八个图标能自动排布
                                <View style={styles.slide}>
                                    <SwiperTouchBtn key={item.pageIndex} btnSource={item.btnGroup}></SwiperTouchBtn>
                                </View>
                            )
                        })
                    }
                </Swiper>
            </View>
        );
    }
}

SwiperComponent.propTypes = {}
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
            acClosed: true,
        };
    }

    render() {
        return (
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
    backgroundImage: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        // width:null,
        // height:null,
        resizeMode: Image.resizeMode.contain,
        // backgroundColor:'rgba(0,0,0,0)',
        width: Util.size.width,
        height: Util.size.height,
        zIndex: -1000
    },
    backBtn: {
        position: "absolute",
        top: 100,
        left: 100,
        zIndex: 100
    },
    btnContainer: {
        position: "absolute",
        // backgroundColor:"red",
        // alignItems:"flex-start",
        top: "4%",
        left: "5%",
        backgroundColor: "transparent"
    },
    btnText: {
        color: "#FFF",
        fontSize: 18,
    },
    acTitleContainer: {
        position: "absolute",
        backgroundColor: "transparent",
        top: "10%",
    },
    acTitleText: {
        color: "white",
        fontSize: 16,
        fontWeight: "bold",
    },
    moreBtnContainer: {
        position: "absolute",
        // top:"%",
        right: "5%",
        // marginTop:-20,
        backgroundColor: "transparent"
    },
    displayPanel: {
        position: "absolute",
        // backgroundColor:"red",
        width: 152,
        height: 152,
        borderRadius: 76,
        top: "28%",
        borderColor: "transparent",
        borderWidth: 1,
        alignItems: "center",
        justifyContent: "center"
    },
    controlPanel: {
        position: "absolute",
        width: Util.size.width,
        flex: 2,
        // backgroundColor:"red",
        height: 170,
        bottom: "0%",
        // borderWidth:1,
        // borderColor:"white",
    },
    controlBtn: {
        // flex:1,
        alignItems: 'center',
        width: "25%",
        flexWrap: "wrap",
        marginTop: 7,
        marginBottom: 7,
        padding: 0,
        justifyContent: 'center',
        // backgroundColor:"black"

    },


    sliders: {
        position: 'absolute',
        width: Util.size.width,
        bottom: "0%",
        left: 0,
        // backgroundColor:"red",

    },
    slide: {
        flex: 1,
        height: Util.size.height - 100,
        justifyContent: 'flex-end',
        alignItems: 'center',
        paddingBottom: 92,
        // backgroundColor:'red',
    },
    slideText: {
        color: "#fff",
        textAlign: "center"
    },
    slideTextTitle: {
        color: "#fff",
        textAlign: "center",
        fontWeight: "700"
    },

    navigator: {
        justifyContent: 'center',
        alignItems: 'center',
        top: "4%",
        backgroundColor: "yellow",
        width: Util.size.width
    },
    turnOnText: {
        // position:"absolute",
        top: "-35%",
        textAlign: "center",
        justifyContent: "center",
        backgroundColor: "transparent",
        color: "#fff",
    },
    turnOnBtn: {
        position: "absolute",
        justifyContent: "center",
        alignItems: "center",
        top: "30%",
    },
    acInfoContainer: {
        // backgroundColor:"red",
        backgroundColor: "transparent",
        width: 152,
        height: 152,
        // justifyContent:"center",
        alignItems: "center",
        borderRadius: 76,
        position:"absolute",
    },
    acDegreeText: {
        fontSize: 55,
        color: "white",
        // backgroundColor:"black",
        backgroundColor: "transparent",
        flex: 2,
        paddingTop: 35,
        lineHeight: 80,
        // textAlign:'center',

    },
    acModeText: {
        fontWeight: "bold",
        color: "white",
        flex: 1,
    },
    acDegreeUnit: {
        fontSize: 25,
        fontWeight: "bold",
        // backgroundColor:"red",
        position: "relative",
        color: "white",
        // lineHeight:20,
        // flex:1
    },
    acDegreeUnitContainer: {
        position: "absolute",
        alignItems: 'center',
        justifyContent: "center",
        left: "70%",
        top: "30%",
    },
    moreInfoContainer:{
        position:"absolute",
        backgroundColor:"transparent",
        width:100,
        height:50,
        bottom:180,
        left:"5%",
        // alignItems:"center",
        marginBottom:20


    },
    fanInfoContainer:{
        // alignItems:"center",
    },
    fanInfoText:{
        padding: 4,
        fontWeight:"bold",
        color:"white",
        fontSize:15
    }

});

export {MainControlPanel, MainPanel};