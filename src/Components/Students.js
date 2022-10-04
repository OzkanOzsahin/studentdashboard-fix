import React from "react";
import {Link} from "react-router-dom";

function IndividualStudents ( {name}) {

  return(
    <Link to={`/student/${name}`}>
    <p className="students">{name}</p>
    </Link>
  )
}

export default IndividualStudents