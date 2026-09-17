import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, ScrollView } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.white}>Hello World!</Text>
      <StatusBar style="auto" />
      <ScrollView>
        <Text style={styles.white}>START Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll END</Text>
      </ScrollView>
    </View >
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#080707',
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: 50,
  },

  white: {
    color: '#fff',
    fontSize: 30,
    paddingBottom: 50,
  }
});
