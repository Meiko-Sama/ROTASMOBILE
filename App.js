import { Text, View } from 'react-native';

// IMPORTAÇÃO DOS PAGES
import Home from './src/pages/Home';
import Sobre from "./src/pages/Sobre";

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
      {/* O STACK NAVIGATOR ELE VAI DECIDIR QUE PAGINA A GENTE COMEÇA PRIMEIRO */}
      <Stack.Navigator initialRouteName='Home'>
        <Stack.Screen name='Home' component={Home} />
        <Stack.Screen name='Sobre' component={Sobre} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

