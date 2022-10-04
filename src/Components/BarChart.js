
import React from "react";
import { 
    VictoryBar,
    VictoryChart,
    VictoryAxis,
    VictoryTheme,
    VictoryGroup,
    VictoryLegend,
    VictoryLabel,
    VictoryContainer,
    VictoryTooltip
  } from 'victory'

  function BarChart( {data} ) {
    const dataWithLabels = data.map(values => ({
      assignment: values.assignment,
      difficulty: values.difficulty,
      fun: values.fun,
      label: 
        `Assignment ${values.assignment}, 
         difficulty: ${values.difficulty.toFixed(1)},
         fun: ${values.fun.toFixed(1)}`
    }))
    return (
      <div className="bar-chart">
        <h2>Average Student Evaluation Overview</h2>
        <VictoryChart
          theme={VictoryTheme.material}
          width={720}
          height={200}
          domain={{ x: [0, 56] }}
          containerComponent={
          <VictoryContainer width={700} height={250} />
          }
        >
          <VictoryLegend
            x={550}
            y={24}
            itemsPerRow={2}
            orientation="horizontal"
            data={[
                { name: "Fun", symbol: { fill: "red", type: "square" } },
                { name: "Difficulty", symbol: { fill: "yellow", type: "square" } },
            ]}
          />
          <VictoryLabel
            x={50}
            y={185}
            text="Assignment"
            style={[{ fill: "black", fontSize: 10}]}
          />
          {/* X-Axis */}
          <VictoryAxis
            style={{
            ticks: { stroke: "grey", size: 2 },
            tickLabels: {
                fontSize: 6,
                padding: 2,
                angle: -60,
                textAnchor: "end",
            },
            }}
          />
          <VictoryLabel
            x={24}
            y={80}
            angle={-90}
            text="Rating"
            style={[{ fill: "black", fontSize: 10 }]}
          />
          {/* Y-Axis */}
          <VictoryAxis
            style={{
            ticks: { stroke: "grey", size: 2 },
            tickLabels: { fontSize: 7, padding: 3 },
            }}
            dependentAxis
          />
            
          <VictoryGroup   
            offset={4}
            colorScale={["red", "yellow" ]}
          >
            <VictoryBar
              labelComponent=
              {<VictoryTooltip
                style={[{ fontSize: 5}]}
              />}
              data={dataWithLabels} 
              x="assignment" 
              y="fun"
              barWidth={3}
            />
            <VictoryBar
              labelComponent=
              {<VictoryTooltip
                style={[{ fontSize: 5}]}
              />}
              data={dataWithLabels} 
              x="assignment" 
              y="difficulty"
              barWidth={3}
            />
          </VictoryGroup>
      </VictoryChart>
    </div>
    )
  }

export default BarChart
 
// x en y assen stylen: lettertypen, grootte
 // 2 bars naast elkaar
 // gemiddelde data inladen van alle studenten
 // lijngrafiek gemiddelde v fun of difficulty 
            
  


 
            
            
  


 
            