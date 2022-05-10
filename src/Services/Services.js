import { Grid } from "@mui/material";
import React from "react";
import { servicesData, servicesData2 } from "../Data";
import "./Services.css";
const Services = () => {
  return (
    <div>
      <Grid container className="services">
        <Grid item md={6} xs={12} className="services-content-container">
          <div className="services-content">
            <h2 className="services-title">Future of support with new shape</h2>
            <p className="services-para">
              Discuss your goals,determine success metrics, indentify problems
            </p>
            <div className="services-p">
              <svg
                style={{
                     backgroundColor:'#4d46c7',
                    borderRadius:'100px',
                    padding:'3px'
                }}
                xmlns="http://www.w3.org/2000/svg"
                width="26"
                height="26"
                fill="#fff"
                class="bi bi-check"
                viewBox="0 0 16 16"
              >
                <path d="M10.97 4.97a.75.75 0 0 1 1.07 1.05l-3.99 4.99a.75.75 0 0 1-1.08.02L4.324 8.384a.75.75 0 1 1 1.06-1.06l2.094 2.093 3.473-4.425a.267.267 0 0 1 .02-.022z" />
              </svg>
              <p className="point-name">UX Design content strategy</p>
            </div>
            <div className="services-p">
              <svg
                style={{
                    backgroundColor:'#4d46c7',
                    borderRadius:'100px',
                    padding:'3px'
                }}
                xmlns="http://www.w3.org/2000/svg"
                width="26"
                height="26"
                fill="#fff"
                class="bi bi-check"
                viewBox="0 0 16 16"
              >
                <path d="M10.97 4.97a.75.75 0 0 1 1.07 1.05l-3.99 4.99a.75.75 0 0 1-1.08.02L4.324 8.384a.75.75 0 1 1 1.06-1.06l2.094 2.093 3.473-4.425a.267.267 0 0 1 .02-.022z" />
              </svg>
              <p className="point-name">UX Design content strategy</p>
            </div>
          </div>
        </Grid>
        <Grid
          item
          md={3}
          xs={12}
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            flexDirection: "column",
          }}
        >
          {servicesData.map((item) => (
            <>
              <div className="card-services">
                <div className="s-cards-flex">
                  <p>{item.iconCname}</p>
                  <p>{item.name}</p>
                  <p>{item.desc} </p>
                </div>
              </div>
            </>
          ))}
        </Grid>
        <Grid
          item
          md={3}
          xs={12}
          className="c-flex"
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            flexDirection: "column",
          }}
        >
          {servicesData2.map((item) => (
            <>
              <div className="card-services">
                <div className="s-cards-flex">
                  <p>{item.iconCname}</p>
                  <p>{item.name}</p>
                  <p>{item.desc} </p>
                </div>
              </div>
            </>
          ))}
        </Grid>
      </Grid>
    </div>
  );
};

export default Services;
