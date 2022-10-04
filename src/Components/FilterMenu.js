import React from "react";
import {
    FormControl, FormControlLabel, FormLabel,
    FormGroup, Checkbox,
} from "@mui/material";

const FilterMenu = (props) => {
    const { fun, difficulty } = props.filters;
    return (
        <FormControl component="fieldset" className="filter-menu">
            <FormLabel component="legend">Evaluation Type</FormLabel>
      <FormGroup>
        <FormControlLabel
          control={
            <Checkbox
              checked={fun}
              onChange={props.handleFilterChange}
              name="fun"
            />
          }
          label="Fun"
        />
        <FormControlLabel
          control={
            <Checkbox
              checked={difficulty}
              onChange={props.handleFilterChange}
              name="difficulty"
            />
          }
          label="Difficulty"
        />
      </FormGroup>
    </FormControl>
  );
};

export default FilterMenu;