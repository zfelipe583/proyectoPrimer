import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import MenuPrincipalScreens from './src/screens/MenuPrincipalScreens.js';
import NavigationStack from './src/navigation/NavigationStack.js';
import LoginScreens from './src/screens/LoginScreens.js';

export default function App() {
  return (
    <NavigationStack />
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
