
import './App.css';
import * as React from 'react';
import { TouchableOpacity, Text } from 'react-native';
import { useTheme } from 'react-navigation/native';
import Homescreen from './Homescreen';

function App() {
  
  const { colors } = useTheme();
  return(
    <div>
    <TouchableOpacity style={{ backgroundColor: colors.card }}>
          <Text style={{ color: colors.text }}>Button!</Text>
        </TouchableOpacity>
      
    <Homescreen/>
    </div>
  );


}

export default App;
