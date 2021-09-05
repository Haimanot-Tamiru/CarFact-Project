import React from "react";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import "@fortawesome/fontawesome-svg-core/styles.css";
// import "font-awesome/css/font-awesome.min.css";
import "./Home.css";
import cat from "./image/CAT.jpg";
import car from "./image/car.jpg";
const Home = () => {
  return (
    <div className="Home">
      <section className="bgc">
        <div className="container ">
          {/* <div className="container-fluid"> */}
          <div className="row">
            <div className="col">
              <div className="wrappers">
                <h1 className="fontSize">Buying or selling a used car?</h1>
                <h2 className="fontColor">Get the Vehicle History.</h2>
                <p className="text-center">
                  Avoid costly problems and drive away with confidence by using
                  the report millions trust.
                </p>
                <div className="input-group header-search">
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
            <div className="col home__img">
              <img className="imgSize" src={car} alt="" />
            </div>
            {/* </div> */}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
