import React from "react";
import Title from "../../common/title/Title";
import { TypeAnimation } from "react-type-animation";
import "./hero.css";
const Hero = () => {
  return (
    <>
      <section className="hero">
        <div className="pic">
          <div className="container">
            <div className="row">
              <Title
                subtitle={"WELCOME TO SIMPLBYTE"}
                title={"Best Platform For Learning"}
              />
              <p>
                {" "}
                We are dynamic and innovative tech company{" "}
                <br className="sm:block hidden" />
                that revolutionizing the way of Learning
              </p>
              <div className="button">
                <button className="primary-btn">
                  GET STARTED NOW <i className="fa fa-long-arrow-alt-right"></i>
                </button>
                <button>
                  VIEW COURSE <i className="fa fa-long-arrow-alt-right"></i>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div className="margin"></div>
    </>
  );
};

export default Hero;
