import React from "react";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import "@fortawesome/fontawesome-svg-core/styles.css";
// import "font-awesome/css/font-awesome.min.css";
import "./Shopping.css";
import cat from "./image/CAT.jpg";
import car from "./image/car.jpg";
const Shopping = () => {
  return (
    <div className="shopping__for">
      <div className="container">
        {/* <div className="container-fluid"> */}
          <div className="row">
            <div className="col">
              <div className="wrappers">
                <h1 className="fontSize">Buying or selling a used car?</h1>
                <h2 className="fontColor">Get the Vehicle History.</h2>
                <p>
                  Avoid costly problems and drive away with confidence by using
                  the report millions trust.
                </p>
                <div className="input-group">
                  <input
                    type="text"
                    className="form-control sizeMin"
                    placeholder="Enter your 17 chaaracter VIN"
                    aria-label="Enter your 17 chaaracter VIN"
                    aria-describedby="input-group-right"
                  />
                  <span
                    className="input-group-text"
                    id="input-group-right-example"
                  >
                    Go
                  </span>
                </div>
                <p>Or</p>
                <div>
                  <a href="/" className="button blue space">
                    Get Reports
                  </a>
                </div>
                <p>View a sample report</p>
              </div>
            </div>
            <div className="col">
              <img  width='10px' src={car} alt="" />
            </div>
          {/* </div> */}
        </div>
      </div>
      <h1>Shopping for a Used Car?</h1>
      <div className="hero__buttons">
        <div>
          <a href="/" className="button blue space">
            Get CARFACT Reports
          </a>
        </div>
        <span className="hero__or">or</span>
        <div>
          <a href="/" className="button green space">
            Find a Used Car
          </a>
        </div>
      </div>
      <div className="image-space">
        <img src={cat} />
      </div>{" "}
      */
      <div className="container">
        <div className="row">
          <div className="col">
            <div className="text">
              <h3 className="blue textColor">CARFACT Vecicle History Report</h3>
              <div className="info">
                <p>
                  <i className="fas fa-coins"></i>
                  What's my car worth
                </p>
                <p>
                  <i className="fas fa-check-square"></i>
                  Accidents?
                </p>
                <p>
                  <i className="fas fa-list-ol"></i>
                  Number of Owners?
                </p>
                <p>
                  <i className="fas fa-tools"></i>
                  How Many Service Records?
                </p>
              </div>
            </div>
          </div>
          <div className="col">
            <h2 className="colors">CARFAX Vehicle History Reports</h2>
            <p>Find out how much the car is really worth with every report.</p>
          </div>
          <section className="container">
            <div className="row">
              <div className="col">
                <h2>Sell Your Car in 3 Easy Steps!</h2>
                <p>Let CARFAX dealerships compete for your car.</p>
                <button>Get Cash Offers</button>
              </div>
              <div className="col">
                <h2>Already Own a Car?</h2>
                <p>
                  Get reminders when your car is due for service and check your
                  car for safety recalls.
                </p>
                <button>Create FREE Account</button>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default Shopping;
