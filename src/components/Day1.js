import React from 'react';

import {
    View,
    Text,
    StyleSheet,
    TextInput,
    TouchableOpacity,
    ART,
    TouchableHighlight,
    ListView,
    Platform,
    StatusBar
} from 'react-native';

import Util from './utils';


import {
    Actions
} from 'react-native-router-flux';

// component watch-face
class WatchFacce extends React.Component {
    static propTypes = {
        sectionTime: React.PropTypes.string.isRequired,
        totalTime: React.PropTypes.string.isRequired
    }

    render() {
        return (
            <View style={styles.watchFaceContainer}>
                <Text style={styles.sectionTime}>{this.props.sectionTime}</Text>
                <Text style={styles.totalTime}>{this.props.totalTime}</Text>
            </View>
        )
    }
}

//component WatchControl
class WatchControl extends React.Component{
    static propTypes = {
        stopWatch:React.PropTypes.func.isRequired,
        clearRecord:React.PropTypes.func.isRequired,
        startWatch:React.PropTypes.func.isRequired,
        addRecord:React.PropTypes.func.isRequired,
    }

    // 构造
      constructor(props) {
        super(props);
        // 初始状态
        this.state = {
            watchOn: false,
            startBtnText: 'START',
            startBtnColor: '#60B644',
            stopBtnText: '计次',
            underlayColor: '#fff',
        };
      }

    _startWatch() {
        if (!this.state.watchOn) {
            this.props.startWatch();
            this.setState({
                watchOn: true,
                startBtnText: 'STOP',
                startBtnColor: '#ff0044',
                stopBtnText: '计次',
                underlayColor: '#eee',
            })
        } else {
            this.props.stopWatch();
            this.setState({
                watchOn: false,
                startBtnText: 'START',
                startBtnColor: '#60B644',
                stopBtnText: 'RESET',
                underlayColor: '#eee',
            })
        }
    }

    _addRecord() {
        if (this.state.watchOn) {
            this.props.addRecord()
        } else {
            this.props.clearRecord()
            this.setState({
                stopBtnText: '计次'
            })
        }
    }

    render() {
        return (
            <View style={styles.watchControlContainer}>
                <View style={{flex:1, alignItems:'flex-start'}}>
                    <TouchableHighlight style={styles.btnStop} underlayColor={this.state.underlayColor} onPress={()=>this._addRecord()}>
                        <Text style={styles.btnStopText}>{this.state.stopBtnText}</Text>
                    </TouchableHighlight>
                </View>

                <View style={{flex:1, alignItems:'flex-end'}}>
                    <TouchableHighlight style={styles.btnStart} underlayColor="#eee"
                                          onPress={() => this._startWatch()}>
                        <Text style={[styles.btnStopText,{color:this.state.startBtnColor}]}>{this.state.startBtnText}</Text>
                    </TouchableHighlight>
                </View>

            </View>
        )
    }
}

class WatchRecord extends React.Component {
    static propTypes = {
        record: React.PropTypes.array.isRequired
    };

    componentDidMount() {

    }

    render() {
        let ds = new ListView.DataSource({rowHasChanged:(r1,r2) => r1 !== r2}),
            theDataSource = ds.cloneWithRows(this.props.record);

        return (
            <ListView
                style={styles.recordList}
                dataSource={theDataSource}
                renderRow={(rowData) =>
                    <View style={styles.recordItem}>
                        <Text style={styles.recordItemTitle}>{rowData.title}</Text>
                         <View style={{alignItems:'center'}}>
                            <Text style={styles.recordItemTime}>{rowData.time}</Text>
                        </View>
                    </View>
                }>
            </ListView>
        )
    }
}

export default class Day1 extends React.Component {
    // 构造
      constructor() {
        super();
        // 初始状态
        this.state = {
            stopWatch: false,
            resetWatch: true,
            totalTime: "00:00.00",
            sectionTime: "00:00.00",
            initialTime: 0,
            currentTime: 0,
            recordTime: 0,
            timeAccumulation:0,
            recordCounter:0,
            record: [
                {title:"",time:""},
                {title:"",time:""},
                {title:"",time:""},
                {title:"",time:""},
                {title:"",time:""},
                {title:"",time:""},
                {title:"",time:""}
            ],
        };
      }

    componentWillUnMount() {
        this._stopWatch();
        this._clearRecord();
    }

    componentDidMount() {
        // alert(this.state.totalTime + this.state.sectionTime);
        if (Platform.OS === 'ios'){
            StatusBar.setBarStyle(0);
        }
    }

    _startWatch() {
        if (this.state.resetWatch) {
            this.setState({
                stopWatch: false,
                resetWatch: false,
                timeAccumulation: 0,
                initialTime: (new Date()).getTime()
            });
        } else {
            this.setState({
                stopWatch: false,
                initialTime: (new Date()).getTime()
            });
        }

        let milSecond,
            second,
            minute,
            countingTime,
            secmilSecond,
            secsecond,
            secminute,
            seccountingTime;

        let interval = setInterval(
            () => {
                this.setState({
                    currentTime: (new Date()).getTime()
                })
                countingTime = this.state.timeAccumulation + this.state.currentTime - this.state.initialTime;
                minute = Math.floor(countingTime/(60*1000));
                second = Math.floor((countingTime-6000*minute)/1000);
                milSecond = Math.floor((countingTime%1000)/10);
                seccountingTime = countingTime - this.state.recordTime;
                secminute = Math.floor((seccountingTime)/(60*1000));
                secsecond = Math.floor((seccountingTime-6000*secminute)/1000);
                secmilSecond = Math.floor((seccountingTime%1000)/10);

                this.setState({
                    totalTime: (minute < 10 ? "0" + minute:minute) + ":" + (second < 10 ? "0" + second:second) + "." + (milSecond<10? "0"+milSecond:milSecond),
                    sectionTime: (secminute<10? "0" + secminute:secminute) + ":" + (secsecond<10? "0" + secsecond:secsecond) + "." + (secmilSecond<10? "0"+secmilSecond:seccountingTime)
                })

                if (this.state.stopWatch) {
                    this.setState({
                        timeAccumulation: countingTime
                    })
                    clearInterval(interval)
                }
            },10);
    }

    _stopWatch() {
        this.setState({
            stopWatch: true,
        })
    }

    _addRecord() {
        let {recordCounter, record} = this.state;
        recordCounter++;

        if (recordCounter < 8) {
            record.pop();
        }

        record.unshift({title:"计次" + recordCounter, time:this.state.sectionTime});
        this.setState({
            recordTime: this.state.timeAccumulation + this.state.currentTime - this.state.initialTime,
            recordCounter: recordCounter,
            record: record
        })
    }

    _clearRecord() {
        this.setState({
            stopWatch: false,
            resetWatch: true,
            totalTime: "00:00.00",
            sectionTime: "00:00.00",
            initialTime: 0,
            currentTime: 0,
            recordTime: 0,
            timeAccumulation:0,
            recordCounter:0,
            record: [
                {title:"",time:""},
                {title:"",time:""},
                {title:"",time:""},
                {title:"",time:""},
                {title:"",time:""},
                {title:"",time:""},
                {title:"",time:""}
            ],
        });
    }


    render() {
        return(
            <View style={styles.container}>
                <WatchFacce totalTime={this.state.totalTime} sectionTime={this.state.sectionTime}/>
                <WatchControl addRecord={()=>this._addRecord()} clearRecord={()=>this._clearRecord()} startWatch={()=>this._startWatch()} stopWatch={()=>this._stopWatch()}/>
                <WatchRecord record={this.state.record}></WatchRecord>
            </View>
        );
    }

    componentWillUnMount() {
        this._clearRecord();
    }
}

const styles = StyleSheet.create({
    container: {
        // flex:1,
        // backgroundColor:"red",
        alignItems:'center',
        // backgroundColor: "#f3f3f3",
        marginTop: 60,
    },
    watchFaceContainer:{
        width: Util.size.width,
        // backgroundColor:"red",
        paddingTop: 50,
        paddingLeft: 30,
        paddingRight: 30,
        paddingBottom: 40,
        borderBottomWidth: 1,
        borderBottomColor: "#ddd",
        height: 170,

    },
    sectionTime:{
        fontSize:20,
        fontWeight: "100",
        paddingRight: 30,
        color: "#555",
        position: "absolute",
        left: Util.size.width - 140,
        top: 30

    },
    totalTime:{
        fontSize: Util.size.width === 375? 70:60,
        fontWeight: "100",
        color: "#222",
        paddingLeft: 20
    },
    watchControlContainer:{
        width: Util.size.width,
        height: 100,
        flexDirection: "row",
        // backgroundColor: "#f3f3f3"
        paddingTop: 30,
        paddingLeft: 60,
        paddingRight: 60,
        paddingBottom: 0
    },
    btnStop:{
        width: 70,
        height: 70,
        borderRadius: 35,
        backgroundColor: "#fff",
        alignItems: "center",
        justifyContent: "center"
    },
    btnStopText:{},
    btnStart:{
        width: 70,
        height: 70,
        borderRadius: 35,
        alignItems:'center',
        justifyContent: 'center',
        backgroundColor: '#fff',
    },
    btnStartText:{
        fontSize: 14,
        backgroundColor: "transparent"
    },
    recordList:{
        width: Util.size.width,
        height: Util.size.height - 300,
        paddingLeft: 15
    },
    recordItem:{
        height: 40,
        borderBottomWidth: Util.pixel,
        borderBottomColor: "#bbb",
        paddingTop: 5,
        paddingLeft: 10,
        paddingRight: 10,
        paddingBottom: 5,
        flexDirection: "row",
        alignItems:"center",
    },
    recordItemTitle:{
        backgroundColor: "transparent",
        flex: 1,
        textAlign:"left",
        paddingLeft: 20,
        color: "#777",
    },
    recordItemTime:{
        backgroundColor: "transparent",
        flex:1,
        textAlign: "right",
        paddingRight: 20,
        paddingTop: 8,
        color: "#222"
    },

});

