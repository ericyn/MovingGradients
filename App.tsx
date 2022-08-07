import { center } from '@shopify/react-native-skia';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { Main } from './src/Main';

export default function App() {
  return (
    <SafeAreaProvider>
      <View style={styles.container}>
        <Main />
        <StatusBar style="auto" />
      </View>
    </SafeAreaProvider>
    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#e1d4c1',
  },
});
