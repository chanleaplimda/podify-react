import React from 'react'
import { StyleSheet, Text } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
export default function App() {
  return (
    <SafeAreaView style={style.container} edges={['top', 'bottom']}>
      <Text style={{ fontSize: 30, fontWeight: 'bold' }}>PODIFY Test</Text>
    </SafeAreaView>
  )
}

const style = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ccc',
    alignItems: 'flex-end',
    justifyContent: 'flex-end'
  },
})