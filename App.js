import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

import Inicio from './screens/Inicio';
import Comidas from  './screens/Comidas';
import Bebidas from  './screens/Bebidas';
import Backend from  './screens/Backend';


export default function App(  ) {
 return (
    <NavigationContainer>
       <Stack.Navigator >
           <Stack.Screen name='Inicio' component = {Inicio}/>
           <Stack.Screen name='Comidas' component = {Comidas}/>
           <Stack.Screen name='Bebidas' component = {Bebidas}/>  
           <Stack.Screen name='Backend' component = {Backend}/> 
       </Stack.Navigator>
    </NavigationContainer>
  );
}
//Здравствуйте