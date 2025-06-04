// IMPORTAÇÃO DOS PAGES
import Home from './src/pages/Home';
import Sobre from "./src/pages/Sobre";

// IMPORTAÇÃO DE ICONES
import FontAwesome from '@expo/vector-icons/FontAwesome5';
import Entypo from '@expo/vector-icons/Entypo';

// IMPORTAÇÃO DOS ELEMENTOS NAV / ELEMENTO PAI
import { NavigationContainer } from '@react-navigation/native';

// IMPORTAÇÃO DO DRAWER
import { createDrawerNavigator } from '@react-navigation/drawer';

const Drawer = createDrawerNavigator();

export default function App() {
  return (
    // Vai abraçar toda a nossa navegação, vai gerenciar todas as páginas
    <NavigationContainer>
      {/* O STACK NAVIGATOR ELE VAI DECIDIR QUE PAGINA A GENTE COMEÇA PRIMEIRO, QUANTAS TELAS TEM */}
      <Drawer.Navigator initialRouteName='Home'
        screenOptions={{
          headerTintColor: "#744687",
          headerTitle: "Menu",
          drawerStyle: { backgroundColor: "#c681e3" },
          drawerActiveBackgroundColor: "#dfabf5",
          drawerActiveTintColor: "#be8cd4",
          drawerInactiveBackgroundColor: "#a36cba",
          drawerInactiveTintColor: "#7b538c"
        }}>
        {/* Quantas telas eu tenho, quais são as telas */}
        <Drawer.Screen name='Home' component={Home}
          options={{
            drawerIcon: ({ color, size }) => {
              return <FontAwesome name="home" size={size} color={color} />
            }
          }} />

        <Drawer.Screen name='Sobre' component={Sobre}
          options={{
            drawerIcon: ({ color, size }) => {
              return <Entypo name="new-message" size={size} color={color} />
            },
            headerShown: false,
          }} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}

