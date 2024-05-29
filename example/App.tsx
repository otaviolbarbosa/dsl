import { StyleSheet, Text, View } from 'react-native';

import * as UrDSL from 'uride-dsl';

export default function App() {
  return (
    <View style={styles.container}>
      <Text>{UrDSL.hello()}</Text>
    </View>
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
