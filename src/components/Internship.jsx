import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import {web,webd,app,graphic,game,data} from "../dummydata"
import Slider from "react-slick";
import Back from "./common/back/Back"
import styled from "styled-components";

const Internship = () => {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    arrows: true,
    // fade:true,

    draggable: true,
    cssEase: "linear",
  };
  return (
    <>
          <Back title='Internships' />

    <Container id="">
      <Heading>Internship.</Heading>
      <Carousel {...settings}>
        <Wrap>
          <ImgContainer>
            <img src={webd} alt="k" />
          </ImgContainer>
          <Content>
            <div id="web">
              <h1>Web development</h1>
              <p>
                Our web development internship program provides hands-on
                training and real-world experience to aspiring web developers.
                Interns will have the opportunity to work on real-world web
                development projects, giving them the chance to apply what they
                have learned.
              </p>
              <a href="https://forms.gle/YVyokv5w2CEgb6AE7"><Button>Apply Now</Button></a>
            </div>
          </Content>
        </Wrap>
        <Wrap>
          <ImgContainer>
          <img src={app} alt="loading" />
          </ImgContainer>
          <Content>
            <div>
              <h1 id="app">App development</h1>
              <p>
                Android development is a dynamic and exciting field that offers
                a range of benefits for both developers and users. With its
                widespread popularity, powerful development tools, and
                opportunities for innovation, it is an excellent choice for
                those interested in a career in mobile app development.
              </p>
              <a href="https://forms.gle/YVyokv5w2CEgb6AE7"><Button>Apply Now</Button></a>            </div>
          </Content>
        </Wrap>
        <Wrap>
          <ImgContainer>
          <img src={graphic} alt="loading" />
          </ImgContainer>
          <Content>
            <div>
              <h1 id="graphic">Graphic Design</h1>
              <p>
                We believe in the power of design to tell a story, solve
                problems, and connect people. That's why we've created a virtual
                graphic design internship program to help students develop their
                skills and make their mark in the industry,develop skills in
                design while working on real-world projects
              </p>
              <a href="https://forms.gle/YVyokv5w2CEgb6AE7"><Button>Apply Now</Button></a>            </div>
          </Content>
        </Wrap>
        <Wrap>
          <ImgContainer>
          <img src={data} alt="loading" />
          </ImgContainer>
          <Content>
            <div>
              <h1 id="data">Data Science</h1>
              <p>
                The goal of data science is to help organizations make better
                decisions by uncovering patterns, relationships, and trends in
                data. This can be used to improve processes, inform business
                strategies, or develop new products and services and knowledge
                in data science, and gain insight into the field's practices and
                trends..
              </p>
              <a href="https://forms.gle/YVyokv5w2CEgb6AE7"><Button>Apply Now</Button></a>            </div>
          </Content>
        </Wrap>
        <Wrap>
          <ImgContainer>
          <img src={game} alt="loading" />
          </ImgContainer>
          <Content>
            <div>
              <h1 id="java">Java Development</h1>
              <p>
                Java is a versatile, powerful, and widely used programming
                language that is suitable for a wide range of applications.
                Whether you are a beginner or an experienced developer, learning
                Java can open up many opportunities and enhance your career
                prospects.
              </p>
              <a href="https://forms.gle/YVyokv5w2CEgb6AE7"><Button>Apply Now</Button></a>            </div>
          </Content>
        </Wrap>
        <Wrap>
          <ImgContainer>
          <img src={web} alt="loading" />
          </ImgContainer>
          <Content>
            <div>
              <h1 id="marketing">Social-Media-Marketing</h1>
              <p>
                A campus ambassador internship program is a marketing or
                outreach initiative that seeks to build brand awareness and
                promote products or services on college campuses. This program
                is an excellent opportunity for college students to gain
                professional experience, build their resumes, and make valuable
                connections in the industry..
              </p>
              <a href="https://forms.gle/YVyokv5w2CEgb6AE7"><Button>Apply Now</Button></a>            </div>
          </Content>
        </Wrap>
      </Carousel>
    </Container>
    </>
  );
};
const Container = styled.div`

  width: 70%;
  height: 80vh;
  margin: 50px auto;
  background-color: transparent;
  display: flex;
  text-align: center;
  flex-direction: column;
  /* justify-content:center ; */
  /* border: 2px solid red; */
  border-radius: 10px;
  
  @media (max-width: 768px) {
    height: 50-vh;
  }
  @media (max-width: 667px) {
    height: 50vh;
  }
`;

const Carousel = styled(Slider)`

  /* border: 2px solid white; */
  height: 79.4vh;
  border-radius: 10px;
  @media (max-width: 768px) {
    height: 5vh;
  }
  @media (max-width: 1024px) {
    height: 53vh;
  }
  @media (max-width: 844px) {
    height: 35vh;
  }
`;

const Heading = styled.h1`
  font-size: 4rem;
  position: relative;
  font-weight: bolder;
  
  &::after {
    position: absolute;
    content: "";
    height: 0.2rem;
    width: 10rem;
    background-color:#1eb2a6 ;
    bottom: 0rem;
    left: 28rem;
  }
  @media (max-width: 1024px) {
    &::after {
    position: absolute;
    content: "";
    height: 0.2rem;
    width: 10rem;
    background-color: #1eb2a6;
    bottom: 0rem;
    left:12rem;
  }
  @media (max-width: 667px) {
    margin-bottom:0px;
    font-size: 2rem;
    &::after {
    position: absolute;
    content: "";
    height: 0.2rem;
    width: 10rem;
    background-color: #1eb2a6;
    bottom: 0rem;
    left: 6.4rem;
  }
`;

const Wrap = styled.div`
  width: 100%;
  height: 66vh;
  padding: 0px 10px;
  @media (max-width: 768px) {
    margin-top: -120px;
    height: 70vh;
  }@media (max-width: 1024px) {
    margin-top: -140px;
    height: 70vh;
  }
  @media (max-width: 667px) {
    margin-top: -140px;
    height: 70vh;
  }
  @media (max-width: 844px) {
    margin-top: -140px;
    height: 60vh;
  }
`;

const ImgContainer = styled.div`
  width: 50%;
  height: 100%;
  display: inline-block;
  position: relative;
  /* margin-left:1px; */
  img {
    border-radius: 30px;
    padding: 0px 10px;
    width: 100%;
    height: 50%;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
  @media (max-width: 768px) {
    img {
      border-radius: 20px;
      padding: 0px 10px;
      width: 100%;
      height: 30%;
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
    }
  }
`;

const Content = styled.div`
  width: 50%;
  height: 100%;
  display: inline-block;
  position: relative;
  div {
    padding: 15px;
    text-align: left;
    width: 100%;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);

    h1 {
      margin-bottom: 20px;
      font-weight: bolder;
      font-size: 2rem;
      position: relative;

      &::after {
        position: absolute;
        content: "";
        height: 2px;
        width: 10rem;
        background-color: #1eb2a6;
        bottom: 0;
        left: 0;
      }
      @media (max-width: 768px) {
        font-size: 1.2rem;
        &::after {
          position: absolute;
          content: "";
          height: 2px;
          width: 5rem;
          background-color: #1eb2a6;
          bottom: 0;
          left: 0;
        }
      }
      @media (max-width: 667px) {
        font-size: 0.8rem;
        &::after {
          position: absolute;
          content: "";
          height: 2px;
          width: 5rem;
          background-color: #1eb2a6;
          bottom: 0;
          left: 0;
        }
      }
    }
    p {
      width: 100%;
      @media (max-width: 768px) {
        font-size: 0.4rem;
        line-height:10px;
      }
      @media (max-width: 1024px) {
        font-size: 0.8rem;
        line-height:20px;
      }
      @media (max-width: 667px) {
        font-size: 0.4rem;
        line-height:10px;
      }
    }
  }
`;
const Button = styled.button`

  margin-top: 20px;
  border: 2px solid #1eb2a6;
  padding: 15px;
  color: white;
  font-weight: bold;
  transition: all 0.3s ease;
  border-radius: 5px;
  background-color: #1eb2a6;

  &:hover {
    color: #1eb2a6;
    background-color: white;
  }
  @media (max-width: 768px) {
    margin-top: 20px;
    border: 2px solid #1eb2a6;
    padding: 10px;
    color: white;
    font-weight: bold;
    transition: all 0.3s ease;
    border-radius: 5px;
  }&:hover {
    color: #1eb2a6;
    background-color: white;
  }
`;

export default Internship;
