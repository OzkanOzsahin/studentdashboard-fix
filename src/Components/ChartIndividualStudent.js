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
import {useParams} from "react-router-dom"

function ChartIndividualStudent( {data} ) {
  const { name } = useParams();

  const individualStudentData = data.filter(student => {
      return student.name === name
    })
    
  const dataWithLabels = individualStudentData.map(student => ({
    assignment: student.assignment,
    difficulty: student.difficulty,
    fun: student.fun,
    label: 
      `Assignment ${student.assignment}, 
       difficulty: ${student.difficulty.toFixed(1)},
       fun: ${student.fun.toFixed(1)}`
  }))

  return (
    <div className="bar-chart-individual-student">
    <h2>Individual Student Assignment Evaluation</h2>
    <h3>Student: {name}</h3>
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
              { name: "Fun", symbol: { fill: "blue", type: "square" } },
              { name: "Difficulty", symbol: { fill: "orange", type: "square" } },
          ]}
        />
        <VictoryLabel
          x={50}
          y={185}
          text="Assignment"
          style={[{ fill: "black", fontSize: 10}]}
        />
        
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
    
        <VictoryAxis
          style={{
          ticks: { stroke: "grey", size: 2 },
          tickLabels: { fontSize: 7, padding: 3 },
          }}
          dependentAxis
        />
          
        <VictoryGroup   
          offset={4}
          colorScale={["blue", "orange" ]}
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

export default ChartIndividualStudent