import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import Tabs from './src/navigation/tabs'
import { SettingRoutine } from './src/screens';

const Stack = createStackNavigator();

const App = () => {
  return(
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}
        initialRouteName={"Home"}
      >
        <Stack.Screen name="Home" component ={Tabs} />
        <Stack.Screen name="SettingRoutine" component ={SettingRoutine} />
      </Stack.Navigator>
    </NavigationContainer>
  )
};

export default App;
