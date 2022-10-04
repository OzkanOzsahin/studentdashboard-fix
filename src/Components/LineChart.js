import React from "react";
import { 
    VictoryLine,
    VictoryChart,
    VictoryAxis,
    VictoryLegend,
    VictoryLabel,
    VictoryContainer
  } from 'victory'

  function LineChart ( {data} ) {
    return(
      <div className="line-chart">
        <h2>Average assignment evaluation grades</h2>
        <VictoryChart
          width={720}
          height={200}
          domain={{ x: [0, 56] }}
          domainPadding={15}
          containerComponent={
          <VictoryContainer width={700} height={250} />
          }
        >
          <VictoryLegend
            x={525}
            y={30}
            itemsPerRow={2}
            orientation="horizontal"
            data={[
                { name: "Fun", symbol: { fill: "red", type: "square" } },
                { name: "Difficulty", symbol: { fill: "orange", type: "square" } },
            ]}
          />
          <VictoryLine
            style={{
                data: {stroke: "blue"}
            }} 
            data={data}
            x="assignment"
            y="fun"            
          />
          <VictoryLine
            style={{
                data: {stroke: "orange"}
            }}  
            data={data}
            x="assignment"
            y="difficulty"            
          />
          <VictoryLabel
            x={50}
            y={180}
            text="Assignment"
            style={[{ fill: "black", fontSize: 10 }]}
          />
          <VictoryAxis
            // X-axis
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
            style={[{ fill: "black", fontSize: 10}]}
          />
          <VictoryAxis
            
            style={{
            ticks: { stroke: "grey", size: 2 },
            tickLabels: { fontSize: 7, padding: 5 },
            }}
            dependentAxis
          />
        </VictoryChart>
      </div>
    )
  }

export default LineChart