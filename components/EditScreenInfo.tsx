import React from "react";
import { StyleSheet, View } from "react-native";
import { VictoryBar, VictoryChart, VictoryAxis, VictoryTheme, VictoryTooltip } from "victory-native";

export default class App extends React.Component {
  render() {
    const { data } = this.props;
    const { dates } = this.props;

    return (
      <View style={styles.container}>
        <VictoryChart
          theme={VictoryTheme.material}
          domainPadding={100}
          padding={100}
          height={700}
        >
          <VictoryAxis
            tickValues={dates.filter(value => !isNaN(Number(value))).map(Number)}
            tickFormat={dates.filter(value => !isNaN(Number(value))).map(Number)}
          />
          <VictoryAxis
            dependentAxis
            tickFormat={(x) => (`$${x / 1000000}mil`)}
          />

          <VictoryBar
            data={data}
            x="year"
            y="SBC_ADJ_FCF"
            style={{ data: { width: 50, fill: "steelblue" } }}
            labels={({ datum }) => `$${datum.SBC_ADJ_FCF / 1000000}mil`}
            /* labelComponent={<VictoryTooltip />} */
          />
        </VictoryChart>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 5,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#f5fcff"
  }
});
