/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, {useState} from 'react';
import {SafeAreaView, Button, Text} from 'react-native';
import Box from './components/Box';

const App = () => {
  const [visible, setVisible] = useState(true);
  const onPress = () => {
    setVisible(!visible);
  };
  return (
    <SafeAreaView>
      <Button title={'토글'} onPress={onPress} />

      {visible && <Box rounded size="large" color={'red'} />}
    </SafeAreaView>
  );
};

export default App;
