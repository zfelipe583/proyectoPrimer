import MenuPrincipalScreens from '../screens/MenuPrincipalScreens.js';
import LoginScreens from '../screens/LoginScreens.js';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import OrdersScreen from '../screens/OrdersScreens.js'
import OrdersDetailScreens from '../screens/OrdersDetailScreens.js';
import CustomerScreens from '../screens/CustomerScreens.js';
import Nosotros from '../screens/Nosotros.js';
import MenuPizzas from '../screens/MenuScreens.js';




const Stack = createNativeStackNavigator();

export default function NavigationStack() {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name="Login" component={LoginScreens} />
                <Stack.Screen name="MenuPrincipal" component={MenuPrincipalScreens} 
                options={{ headerShown: false }} />
                <Stack.Screen name="Orders" component={OrdersScreen}/>
                <Stack.Screen name="OrdersD" component={OrdersDetailScreens}/>
                <Stack.Screen name="Customer" component={CustomerScreens}/>
                <Stack.Screen name="Nosotros" component={Nosotros}/>
                <Stack.Screen name="MenuPizza" component={MenuPizzas}/>
                


            </Stack.Navigator>
        </NavigationContainer>
    );
}