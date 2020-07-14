import React from 'react';
import { View, StatusBar } from 'react-native';

const App: React.FC = () => {
  return (
    <>
      <StatusBar barStyle="light-content" backgroundColor="#6C63FF" />
      <View
        style={{
          flex: 1,
          backgroundColor: '#EEE',
        }}
      >
      </View>
    </>
  );
};

export default App;
