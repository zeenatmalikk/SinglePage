import { Grid } from "@mui/material";
import React from "react";
import "./PurposeBanner.css";
const PurposeBanner = () => {
  return (
    <div>
      <Grid container className="purpose">
        <Grid item md={4} xs={12} className="flex-center">
          <div className="p-content-container">
            <p className="p-intro">Achieve More</p>
            <h2 className="purpose-title">
              Purpose of a convoy is to keep your team
            </h2>
           </div>
        </Grid>
        <Grid
          item
          md={4}
          xs={12}
          style={{
            display: "flex",
            alignItems: "center",
            flexDirection: "column",
            justifyContent: "center",
          }}
        
        >
          <div className="icon-flex">
            <svg
              style={{
                backgroundColor: "#7C4FCF",
                padding: "5px",
                borderRadius: "100%",
                boxShadow: "5px 10px 18px #888888",
              }}
              xmlns="http://www.w3.org/2000/svg"
              width="30"
              height="30"
              fill="white"
              class="bi bi-bar-chart-fill"
              viewBox="0 0 16 16"
            >
              <path d="M1 11a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v3a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1v-3zm5-4a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v7a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1V7zm5-5a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1h-2a1 1 0 0 1-1-1V2z" />
            </svg>
            <h2 className="p-points">Built for impact</h2>
          </div>
          <p className="p-desc">
            We identify and nurture a truly diverse team of desginers,
            developers and marketers
          </p>
        </Grid>
        <Grid
          item
          md={4}
          xs={12}
          style={{
            display: "flex",
            alignItems: "center",
            flexDirection: "column",
            justifyContent: "center",
          }}
        >
          <div className="icon-flex">
            <svg
              style={{
                backgroundColor: "#EE2A52",
                padding: "5px",
                borderRadius: "100%",
                boxShadow: "5px 10px 18px #888888",
              }}
              xmlns="http://www.w3.org/2000/svg"
              width="30"
              height="30"
              fill="white"
              class="bi bi-arrow-repeat"
              viewBox="0 0 16 16"
              enableBackground="red"
            >
              <path d="M11.534 7h3.932a.25.25 0 0 1 .192.41l-1.966 2.36a.25.25 0 0 1-.384 0l-1.966-2.36a.25.25 0 0 1 .192-.41zm-11 2h3.932a.25.25 0 0 0 .192-.41L2.692 6.23a.25.25 0 0 0-.384 0L.342 8.59A.25.25 0 0 0 .534 9z" />
              <path
                fill-rule="evenodd"
                d="M8 3c-1.552 0-2.94.707-3.857 1.818a.5.5 0 1 1-.771-.636A6.002 6.002 0 0 1 13.917 7H12.9A5.002 5.002 0 0 0 8 3zM3.1 9a5.002 5.002 0 0 0 8.757 2.182.5.5 0 1 1 .771.636A6.002 6.002 0 0 1 2.083 9H3.1z"
              />
            </svg>
            <h2 className="p-points">In sync with you </h2>
          </div>
          <p className="p-desc">
            We identify and nurture a truly diverse team of desginers,
            developers and marketers
          </p>
        </Grid>
      </Grid>
    </div>
  );
};

export default PurposeBanner;
