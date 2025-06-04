import { Text, View } from 'react-native';

// IMPORTAÇÃO DO STYLES
import { styles } from "./src/styles/styles"

// IMPORTAÇÃO DOS ELEMENTOS NAV / ELEMENTO PAI
import { NavigationContainer } from '@react-navigation/native';

// IMPORTAÇÃO DO STACK
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();


export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Home'>

      </Stack.Navigator>
    </NavigationContainer>
  );
}

