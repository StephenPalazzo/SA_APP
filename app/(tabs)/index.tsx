import { useState, useEffect } from 'react'
import { StyleSheet } from 'react-native';

import EditScreenInfo from '../../components/EditScreenInfo';
import { Text, View } from '../../components/Themed';

export default function TabOneScreen() {
  const [data, setData] = useState([{}])
  const [dates, setDates] = useState([])

  useEffect(() => {
    fetch("http://localhost:5000/").then(
      res => res.json()
    ).then(
      data => {
        setData(data)
        setDates(Object.keys(data))
      }
    )
  }, [])

  if (data.length != 1) {
    console.log(data)
    return (
      <View style={styles.container}>
        <View style={styles.container}>
          <Text style={styles.title}>Value</Text>
          <Text style={styles.title}>{`Market Cap: ${data[dates[4]]['Mkt Cap']}`}</Text>
          <Text style={styles.title}>{`PE: ${data[dates[4]]['PE']}`}</Text>
          <Text style={styles.title}>{`PS: ${data[dates[4]]['PS']}`}</Text>
          <Text style={styles.title}>{`PB: ${data[dates[4]]['PB']}`}</Text>
          <Text style={styles.title}>{`Price To FCF: ${data[dates[4]]['Price To FCF']}`}</Text>
          <Text style={styles.title}>{`PEG: ${data[dates[4]]['PEG']}`}</Text>
          <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />
        </View>

        <View style={styles.container}>
          <Text style={styles.title}>Margins & Growth</Text>
          <Text style={styles.title}>{`Operating Margin: ${data[dates[4]]['Op Margin']}`}</Text>
          <Text style={styles.title}>{`Net Profit Margin: ${data[dates[4]]['Net Profit Margin']}`}</Text>
          <Text style={styles.title}>{`5-Year CAGR Revenue: ${data[dates[9]]['Revenue']}`}</Text>
          <Text style={styles.title}>{`2021 growth Revenue: ${data[dates[4]]['Revenue']}`}</Text>
          <Text style={styles.title}>{`5-Year CAGR Income: ${data[dates[9]]['Net Income']}`}</Text>
          <Text style={styles.title}>{`2021 growth Income: ${data[dates[4]]['Net Income']}`}</Text>
          <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />
        </View>

        <View style={styles.container}>
          <Text style={styles.title}>Balance</Text>
          <Text style={styles.title}>{`Cash: ${data[dates[4]]['Op Margin']}`}</Text>
          <Text style={styles.title}>{`Debt: ${data[dates[4]]['Net Profit Margin']}`}</Text>
          <Text style={styles.title}>{`Net Debt: ${data[dates[4]]['Net Debt']}`}</Text>
          <Text style={styles.title}>{`Equity: ${data[dates[4]]['Equity']}`}</Text>
          <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />
        </View>

        <View style={styles.container}>
          <Text style={styles.title}>Graph</Text>
          
          <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />
        </View>

        {/* <EditScreenInfo path="app/(tabs)/index.tsx" /> */}
      </View>
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
    fontSize: 20,
    fontWeight: 'bold',
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
});
