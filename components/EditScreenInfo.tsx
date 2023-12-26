import React from "react";
import { StyleSheet, View } from "react-native";
import { VictoryBar, VictoryChart, VictoryAxis, VictoryTheme } from "victory-native";

const dataTemp = [
  { quarter: 1, earnings: 1000 },
  { quarter: 2, earnings: 5000 },
  { quarter: 3, earnings: 10250 },
  { quarter: 4, earnings: 19000 }
];

export default class App extends React.Component {
  render() {
    const { data } = this.props;
    const { dates } = this.props;

    return (
      <VictoryChart
        theme={VictoryTheme.material}
        domainPadding={10}
      >
        <VictoryAxis
          tickValues={[1, 2, 3, 4]}
          tickFormat={["Quarter 1", "Quarter 2", "Quarter 3", "Quarter 4"]}
        />
        <VictoryAxis
          dependentAxis
          tickFormat={(x) => (`$${x / 1000}k`)}
        />

        <VictoryBar
          data={dataTemp}
          x="quarter"
          y="earnings"
        />
</VictoryChart>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#f5fcff"
  }
});
