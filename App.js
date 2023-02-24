/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {
  SafeAreaView,
  Text,
  View,
} from 'react-native';
import Greeting from "./components/Greeting";

const App = () => {
  return(
    <SafeAreaView>
      <Greeting />
    </SafeAreaView>
  )
}


export default App;
