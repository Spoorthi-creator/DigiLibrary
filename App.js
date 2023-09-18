import React, { Component } from 'react';
import { Text, View, StyleSheet } from 'react-native';
import Simple from './screens/SImple';
import On from './screens/on';
import Buy from './screens/buy';
import SignUp from './screens/signup';
import Login from './screens/login';
import Cho1 from './screens/catologue';
import Q from './screens/quataum';
import U from './screens/unstoppableus';
import Sapiens from './screens/sapiens';
import Ger from './screens/gernimo';
import Hack from './screens/hack';
import David from './screens/david';
import Rick from './screens/rick';
import Iam from './screens/iam';
import JS from './screens/js';
import Linus from './screens/linus';
import Roald from './screens/roaldahl';
import Eighty from './screens/80';
import Dash from './screens/dashboard';
import Track from './screens/track';
import Ret from './screens/return';
import Boy from './screens/boy';
import Kalam from './screens/kalam';
import Cart from './cart';
import Cat from './screens/catologue';
import Read from './screens/read'
import firebase from 'firebase';
import { firebaseConfig } from './screens/config';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
} else {
  firebase.app();
}

const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Home"
        screenOptions={{
          headerShown: false,
        }}>
        <Stack.Screen name="On" component={On} />
        <Stack.Screen name="SignUp" component={SignUp} />

        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Dash" component={Dash} />
        <Stack.Screen name="Ret" component={Ret} />
        <Stack.Screen name="Track" component={Track} />
        <Stack.Screen name="Quant" component={Q} />
        <Stack.Screen name="US" component={U} />
        <Stack.Screen name="Dahl" component={Roald} />
        <Stack.Screen name="Linus" component={Linus} />
        <Stack.Screen name="Sapiens" component={Sapiens} />
        <Stack.Screen name="Gernimo" component={Ger} />
        <Stack.Screen name="Rick" component={Rick} />
        <Stack.Screen name="David" component={David} />
        <Stack.Screen name="80" component={Eighty} />
        <Stack.Screen name="Boy" component={Boy} />
        <Stack.Screen name="Kalam" component={Kalam} />
        <Stack.Screen name="Hack" component={Hack} />
        <Stack.Screen name="Walt" component={Iam} />
        <Stack.Screen name="JS" component={JS} />
        <Stack.Screen name="Cat" component={Cho1} />
        <Stack.Screen name="Buy" component={Buy} />
        <Stack.Screen name="C" component={Cart} />
                <Stack.Screen name="read" component={Read} />

      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
