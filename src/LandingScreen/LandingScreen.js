import { Grid, TextField } from "@mui/material";
import React from "react";
import "./LandingScreen.css";
const LandingScreen = () => {
  return (
    <div>
      <Grid container>
        <Grid item md={6} xs={12} className="intro-container">
          <div className="content-container">
            <p className="top-desc">
              {" "}
              <svg
              style={{marginRight:'10px'}}
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                class="bi bi-asterisk"
                viewBox="0 0 16 16"
              >
                <path d="M8 0a1 1 0 0 1 1 1v5.268l4.562-2.634a1 1 0 1 1 1 1.732L10 8l4.562 2.634a1 1 0 1 1-1 1.732L9 9.732V15a1 1 0 1 1-2 0V9.732l-4.562 2.634a1 1 0 1 1-1-1.732L6 8 1.438 5.366a1 1 0 0 1 1-1.732L7 6.268V1a1 1 0 0 1 1-1z" />
              </svg>
              Jump start your growth
            </p>
            <h1 className="top-title">
              We boost the growth to startup to fortune 500 comapnies 500
              companies
            </h1>
            <p className="bottom-desc">
              Get the most accurate leads, sales people training and conversions
              ,tools and more -all within the same one billing
            </p>
            <div className="share-email">
              <input
                variant="outlined"
                color="primary"
                placeholder="Enter Email"
                type="text"
                name="email"
                fullWidth
              />
              <button className="email-btn">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="26"
                  height="26"
                  fill="#fff"
                  class="bi bi-arrow-up"
                  viewBox="0 0 16 16"
                >
                  <path
                    fill-rule="evenodd"
                    d="M8 15a.5.5 0 0 0 .5-.5V2.707l3.146 3.147a.5.5 0 0 0 .708-.708l-4-4a.5.5 0 0 0-.708 0l-4 4a.5.5 0 1 0 .708.708L7.5 2.707V14.5a.5.5 0 0 0 .5.5z"
                  />
                </svg>
              </button>
            </div>
          </div>
        </Grid>
        <Grid item md={2} xs={4} className="bg-container">
          <div className="bg-intro"></div>
        </Grid>
        <Grid item md={2} xs={4} className="bg-container">
          <div className="bg-intro2"></div>
        </Grid>
        <Grid item md={2} xs={4} className="bg-container">
          <div className="bg-intro"></div>
        </Grid>
      </Grid>
    </div>
  );
};

export default LandingScreen;
