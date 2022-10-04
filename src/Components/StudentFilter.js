import React from "react";
import Students from "./Students";

function StudentFilter ( {studentNames} ) {
  const studentList = studentNames.map((student)=> 
    <Students 
      name={student.name} 
      key={student.id}
    />
  )

  return(
    <div className="student-filter">
      <h3>Students</h3>
      <h4>Select a student to filter the bar chart</h4>
      <div className="student-list">
        {studentList}
      </div>
    </div>
  )
}


export default StudentFilter

//array.reduce / array length
// array.map