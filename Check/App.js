import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';
import Register from './Screens/Register'
import Login from './Screens/Login'
import StackNavigator from './StackNavigator';
import Challenge18 from './Screens/Challenge18';
import Challenge25 from './Screens/Challenge25 ';


export default function App() {
  return (
    <Challenge18></Challenge18>
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
