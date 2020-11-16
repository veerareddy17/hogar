import React, { Component } from 'react';
import { View, Text, Animated, StyleSheet, Easing } from 'react-native';
import AnimatedProgressWheel from 'react-native-progress-wheel';
import CircularSlider from './CircularSlider';
export default class App extends Component {
  constructor() {
    super();
    this.state={
      slider: 0
    }
  }

  render() {
    const sliderText = Math.round(this.state.slider / 14.4)
    return (
      <View style={{ flex: 1, backgroundColor: 'lightblue', justifyContent: 'center', alignItems: 'center' }}>
        <CircularSlider width={300} height={300} meterColor='#0cd'
              value={this.state.slider} onValueChange={(value)=>this.setState({slider:value})}/>
              <View style={{height: 200, width: 200, position: 'absolute', justifyContent: 'center', alignItems: 'center'}}>
                 <Text style={{color: 'balck'}}>{`${sliderText}`}</Text>
              </View>
      </View>

    );
  }
}