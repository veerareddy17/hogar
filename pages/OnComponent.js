import * as React from 'react';
import { View, Text, SafeAreaView } from 'react-native';

const OnScreen = () => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={{ flex: 1 , padding: 16}}>
        <View
          style={{
            flex: 1,
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <Text>OnScreen</Text>
        </View>
      </View>
    </SafeAreaView>
  );
}
export default OnScreen;
