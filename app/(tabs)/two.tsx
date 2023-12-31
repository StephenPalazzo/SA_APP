import { useState, useEffect } from 'react'
import { SafeAreaView, StyleSheet } from 'react-native';

import EditScreenInfo from '../../components/EditScreenInfo';
import { Text, View } from '../../components/Themed';

export default function TabTwoScreen() {
  const [data, setData] = useState([{}])
  const [dates, setDates] = useState([''])
  const [SBC_ADJ_FCF_data, setSBC_ADJ_FCF_data] = useState({})

  useEffect(() => {
    fetch("http://localhost:5000/").then(
      res => res.json()
    ).then(
      data => {
        setData(data)
        setDates(Object.keys(data))
      }
    )
    fetch("http://localhost:5000/SBC_ADJ_FCF").then(
      res => res.json()
    ).then(
      data => {
        setSBC_ADJ_FCF_data(data)
      }
    )
  }, [])

  if (data.length != 1 && Object.keys(SBC_ADJ_FCF_data).length !== 0 && dates.length != 1) {
    return (
      <SafeAreaView style={styles.container}>
        <Text style={styles.title}>Graph</Text>
        <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />
        <EditScreenInfo data={SBC_ADJ_FCF_data} dates={dates} path="app/(tabs)/two.tsx" />
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    flex: 1,
    fontSize: 20,
    fontWeight: 'bold',
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
});
