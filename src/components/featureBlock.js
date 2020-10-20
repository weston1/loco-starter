import React from "react";
import { Link } from "gatsby";
import Image from "./Image";

import "./FeatureBlock.css";

const FeatureBlock = ({ className = "" }) => {
  return (
    <section className="FeatureBlock section">
      <div className="container col-lg-10 col-md-10 mx-auto text-center">
        <h2 className="FeatureBlock--Title">Pinata Types</h2>
        <div className="container row">
          <div className="col-lg-6 col-md-6 col-10 mx-auto py-3">
            <div className="FeatureArray--Sticker--Container">
              <h3>FULLY CHONIC</h3>
              <p>LOREM IPSUM</p>
            </div>
          </div>
          <div
            className="col-lg-6 col-md-6 col-10 mx-auto py-3"
            data-scroll
            data-scroll-speed="10"
          >
            <div className="FeatureArray--Sticker--Container">
              <img
                resolutions="small"
                src="https://picsum.photos/200/300"
                alt="Loco Starter"
                className="img-fluid"
              />
            </div>
          </div>
          <div
            className="col-lg-6 col-md-6 col-10 mx-auto py-3"
            data-scroll
            data-scroll-speed="2"
          >
            <div className="FeatureArray--Sticker--Container">
              <img
                resolutions="small"
                src="https://picsum.photos/300/300"
                alt="Loco Starter"
                className="img-fluid"
              />
            </div>
          </div>
          <div className="col-lg-6 col-md-6 col-10 mx-auto py-3">
            <div>
              <h3>FULLY LOADED</h3>
              <p>GET SOME</p>
            </div>
          </div>
        </div>
        <div className="container py-4">
          <p>SMASH THIS SHIT</p>
          <Link to="/page-2" className="Button mx-auto text-center">
            MORE PINATAS
          </Link>
        </div>
      </div>
    </section>
  );
};

export default FeatureBlock;
