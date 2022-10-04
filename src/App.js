import "./App.css";
import { useState } from "react"
import BarChart from "./components/BarChart";
import Data from "./Data";
import StudentFilter from "./components/StudentFilter";
import LineChart from "./components/LineChart";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { BrowserRouter, Route, Routes } from "react-router-dom"
import ChartIndividualStudent from "./components/ChartIndividualStudent";


function App() {
  
  const [data] = useState(Data)

  
  const allStudentNames = data.map(students => students.name)
  const studentNames = [...new Set(allStudentNames)]
  .map((name, index) => {
    return {
      name: name,
      id: index + 1
    }
  })
  
  
  const groupedData = Object.values(data.reduce((acc, { assignment, difficulty, fun }) => { 
    acc[assignment] = acc[assignment] || { assignment, difficulty: 0, fun: 0, participants: 0 };
    acc[assignment].difficulty += difficulty;
    acc[assignment].fun += fun;
    acc[assignment].participants++;
    return acc;
}, []))

  const averageData = groupedData.map(({ assignment, participants, difficulty, fun }) => { 
    return { 
        assignment,
        participants,
        difficulty: difficulty / participants,
        fun: fun / participants
    }
});

  return (
    <div>
      <Header />
      <BrowserRouter>
        <Routes>
          <Route 
            path='/'
            element={
              <div className="main-path">
                <BarChart data={averageData}/>
                <StudentFilter 
                  studentNames={studentNames}
                />
                <LineChart data={averageData}/>
              </div>}
          />
          <Route 
            path='/student/:name'
            element={
              <div>
                <ChartIndividualStudent data={data}/>
              </div>
            }
          />
        </Routes>
      </BrowserRouter>
      <Footer />
    </div>
  )
}

export default App;

