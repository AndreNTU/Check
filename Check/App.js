import { BackHandler } from 'react-native';
import StackNavigator from './StackNavigator';

BackHandler.addEventListener('hardwareBackPress', () => {   return true; });

export default function App() {
  return (
    <StackNavigator /> );
}


