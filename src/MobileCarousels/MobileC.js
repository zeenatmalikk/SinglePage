import { Grid } from '@mui/material'
import React from 'react'
import "./MobileC.css"
import Mobile from "../images/MobileC.PNG"
const MobileC = () => {
  return (
    <div>
        <Grid container className='mobile-carousel'>
            <Grid item md={6} xs={10}  className="m-content-container">
            <div className="m-content">
          <p className="m-intro-title">Monitor</p>
          <h2 className="m-title">Great customer relationship starts here</h2>
          <p className="m-desc">
            Lorm ipsum dolr Lorm ipsum dolr Lorm ipsum dolr Lorm ipsum dolr Lorm
            ipsum dolr Lorm ipsum dolr Lorm ipsum dolr Lorm ipsum dolr{" "}
          </p>
          </div>
            </Grid>
            <Grid item md={6} xs={12} className='img-container'>
                <img src={Mobile} alt='mobile' className='m-img'/>
            </Grid>
        </Grid>
    </div>
  )
}

export default MobileC