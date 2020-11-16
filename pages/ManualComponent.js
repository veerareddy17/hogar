import React, { useState } from 'react';
import {
  TouchableOpacity,
  StyleSheet,
  View,
  Text,
  SafeAreaView
} from 'react-native';
import CircularSlider from '../CircularSlider'

const ManualScreen = ({ navigation }) => {
const [slider, setSlider] = useState(0)
const sliderText = Math.round(slider / 14.4)

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={{ flex: 1, padding: 10 }}>
        <View style={{ flex: 1, backgroundColor: 'lightblue', justifyContent: 'center', alignItems: 'center' }}>
          <CircularSlider width={300} height={300} meterColor='#0cd'
            value={slider} onValueChange={(value) => setSlider(value)} />
          <View style={{ height: 200, width: 200, position: 'absolute', justifyContent: 'center', alignItems: 'center' }}>
            <Text style={{ color: 'black' }}>{`${sliderText}`}</Text>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  button: {
    alignItems: 'center',
    backgroundColor: '#DDDDDD',
    padding: 10,
    width: 300,
    marginTop: 16,
  },
});
export default ManualScreen;
