import React from 'react';
import {
    View,
    Text,
    Platform,
    StatusBar,
} from 'react-native';
import Home from './components/Home';
import Chat from './components/Chat';
import Entry from './components/Entry';
import {MainControlPanel} from './components/MainControlPanel';

import Day1 from './components/Day1';
import Day2 from './components/Day2';
import Day3 from './components/Day3';
import Day4 from './components/Day4';
import Day5 from './components/Day5';
import Day6 from './components/Day6';
import RnArt from './components/0-1RN-ART';
import Day7 from './components/Day7component-correspond';
import CheckList from './components/checkList.test';


import {
    Router,
    Scene,
    Stack,
} from 'react-native-router-flux';


const getSceneStyle = ()=> ({
    backgroundColor: 'transparent',
})

export default class App extends React.Component {
    componentDidMount() {
        StatusBar.setBarStyle(0);
    }

    render () {
        return(
            <Router>
                <Scene key="root" style={{paddingTop: Platform.OS === 'ios' ? 64 : 54}}>
                    <Scene key="entry" component={Entry} title="Entry"/>
                    <Scene key="maincontrolpanel" component={MainControlPanel}
                           navigationBarStyle={{backgroundColor:"transparent",borderBottomColor:"transparent",borderBottomWidth:0}}
                        hideNavBar="true"/>
                    <Scene key="home" component={Home} title="Home"/>
                    <Scene key="chat" component={Chat} title="Chat"/>
                    <Scene key="day1" component={Day1} title="Day1-StopWatch"/>
                    <Scene key="day2" component={Day2} title="Day2-Weather"/>
                    <Scene key="day3" component={Day3} title="Day3"/>
                    <Scene key="day4" component={Day4} title="Day4"/>
                    <Scene key="day5" component={Day5} title="Day5"  hideNavBar="true"/>
                    <Scene key="day6" component={Day6} title="Day6"/>
                    <Scene key="rnart" component={RnArt} title="RnArt"/>
                    <Scene key="checkList" component={CheckList} title="CheckList"/>
                </Scene>
            </Router>
        )
    }
}

