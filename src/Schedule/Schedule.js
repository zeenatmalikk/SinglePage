import { Grid } from "@mui/material";
import schedule from "../images/schedulcomp.PNG";
import React from "react";
import "./Schedule.css";
const Schedule = () => {
  return (
    <div>
      <Grid container className="schedule-container">
        <Grid item md={6} xs={12} className='img-container'>
          <img src={schedule} alt="schedule" className="s-img" />
        </Grid>
        <Grid item md={6} xs={12} className="s-content-container">
          <div className="s-content">
          <p className="s-intro-title">Schedule</p>
          <h2 className="s-title">Great customer relationship starts here</h2>
          <p className="s-desc">
            Lorm ipsum dolr Lorm ipsum dolr Lorm ipsum dolr Lorm ipsum dolr Lorm
            ipsum dolr Lorm ipsum dolr Lorm ipsum dolr Lorm ipsum dolr{" "}
          </p>
          </div>
        </Grid>
      </Grid>
    </div>
  );
};

export default Schedule;
