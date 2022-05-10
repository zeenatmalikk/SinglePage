import { Container, Grid } from "@mui/material";
import React from "react";
import "./Newsletter.css"

const Newsletter = () => {
  return (
    <div style={{marginTop:'5%'}}>
      <Container style={{padding:"0"}}>
        <Grid container className="newsl-container">
          <Grid item md={6} xs={12} className='subscribe-content'>
            <div>
            <h1 className="newsletter-title">Subscribe newsletter</h1>
            <p className="n-desc">Best cooks and best delivery guys all at your service</p>
            </div>
          </Grid>
          <Grid item md={6} xs={12} className='input-container'>
            <input
              type="email"
              placeholder="Enter your email address.."
             
              className="news-email"
            />
            <button type="submit" className="submit-news">Discover</button>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
};

export default Newsletter;
