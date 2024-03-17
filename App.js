import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';
import Logo from './components/Logo';
import Products from './components/Products';

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Logo />
      </View>
      <Products />
      <StatusBar style="dark" />
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    marginTop: 30
  },
  container: {
    height: '100%',
    padding: 20
  }
});