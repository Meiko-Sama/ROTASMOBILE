// IMPORTAÇÃO DOS PAGES
import Home from './src/pages/Home';
import Sobre from "./src/pages/Sobre";

// IMPORTAÇÃO DE ICONES
import FontAwesome from '@expo/vector-icons/FontAwesome5';
import Entypo from '@expo/vector-icons/Entypo';

// IMPORTAÇÃO DOS ELEMENTOS NAV / ELEMENTO PAI
import { NavigationContainer } from '@react-navigation/native';

// IMPORTAÇÃO DO DRAWER
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    // Vai abraçar toda a nossa navegação, vai gerenciar todas as páginas
    <NavigationContainer>
      {/* O STACK NAVIGATOR ELE VAI DECIDIR QUE PAGINA A GENTE COMEÇA PRIMEIRO, QUANTAS TELAS TEM */}
      <Tab.Navigator initialRouteName='Home'
        screenOptions={{}}>
        {/* Quantas telas eu tenho, quais são as telas */}
        <Tab.Screen name='Home' component={Home}
          options={{
            drawerIcon: ({ color, size }) => {
              return <FontAwesome name="home" size={size} color={color} />
            }
          }} />

        <Tab.Screen name='Sobre' component={Sobre}
          options={{
            drawerIcon: ({ color, size }) => {
              return <Entypo name="new-message" size={size} color={color} />
            },
            headerShown: false,
          }} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

