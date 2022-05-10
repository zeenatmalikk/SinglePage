import { Grid } from "@mui/material";
import React from "react";
import { BusinessCardsData } from "../Data";
import "./BusinessCards.css"
const BusinessCards = () => {
  return (
    <div style={{marginTop:'5%'}}>
      <h1 className="b-title">How can we help your business?</h1>
      <p className="b-desc">
        When you resell besink, you build trust and increase
       </p>
      <Grid container className="card-container">
        {BusinessCardsData.map((item) => (
          <>
            <Grid item md={4} xs={12} className='cards-flex' >
            <div className='b-cards'>
            <div className={item.iconCname}>{item.icon}</div>
              <h1 className="b-points-title">{item.head}</h1>
              <p className="b-points-desc">{item.para}</p>
            </div>
            </Grid>
          </>
        ))}
      </Grid>
    </div>
  );
};

export default BusinessCards;
