import { Text, View } from 'react-native';

// IMPORTAÇÃO DOS PAGES
import Home from '../pages/Home';
import Sobre from "../pages/Sobre";

// IMPORTAÇÃO DO STYLES
import { styles } from "../styles/styles"

// IMPORTAÇÃO DOS ELEMENTOS NAV / ELEMENTO PAI
import { NavigationContainer } from '@react-navigation/native';

// IMPORTAÇÃO DO STACK
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    // Vai abraçar toda a nossa navegação, vai gerenciar todas as páginas
    <NavigationContainer>
      {/* O STACK NAVIGATOR ELE VAI DECIDIR QUE PAGINA A GENTE COMEÇA PRIMEIRO, QUANTAS TELAS TEM */}
      <Stack.Navigator initialRouteName='Home' >
        {/* Quantas telas eu tenho, quais são as telas */}
        <Stack.Screen name='Home' component={Home} options={{ headerShown: false }} />
        <Stack.Screen name='Sobre' component={Sobre} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

