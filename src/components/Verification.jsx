import React ,{useState}from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { logo, verify } from "../dummydata";
import Back from "./common/back/Back"

const Verification = () => {
  const [active,setActive]  = useState(false);
  const display  = ()=>{ setActive(true) }


  return (
    <>
    <Back title='Verification' />
    <Container >
      <Heading>
        <img src={logo} alt="" />
        <div> 
        <Link to="/">
            Simpl<span>byte</span>
          </Link>
        </div>
      </Heading>

      <Content>
        <Box>
          <div>
            <Img src={verify}></Img>
            <h1>Your Document is Verified</h1>
            <p>
              The Candidate have completed one month virtual internship
              successfully! under Simplbyte
            </p>
          </div>
        </Box>
      </Content>
    </Container>
    </>
  );
};
const Container = styled.div`  ;
  width: 100%;
  height: 100vh;
  background-color: white;
`;
const Heading = styled.div`margin-top:0.5rem
  height: 10vh;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  img {
    width: 10rem;
    height: 10rem;
    @media (max-width: 768px) {
      width: 5rem;
      height: 5rem;
    }
  }
  div {
    font-size: 4rem;
    font-weight: bold;
    text-shadow: 2px 2px 4px white;
    @media (max-width: 768px) {
      font-size: 2rem;
    }
    span {
      color: #915eff;
    }
  }
`;

const Content = styled.div`
  width: 100%;
  height: 70vh;
  display: flex;
  align-items: center;
  justify-content: center;
  @media (max-width: 768px) {
    width: 100%;
    height: 60vh;
  }
`;

const Box = styled.div`
  padding: 30px;
  width: 50%;
  /* border: 2px solid white; */
  height: 60vh;
  display: flex;
  align-items: center;
  justify-content: center;

  box-shadow: 0px 0px 11px 1px rgba(256, 256, 256, 0.14),
    0px 0px 19px 6px rgba(256, 256, 256, 0.03),
    0px 0px 26px 12px rgba(256, 256, 256, 0.14),
    0px 0px 29px 12px rgba(256, 256, 256, 0.14);
  border: 1px solid rgba(256, 256, 256, 0);
  border-radius: 10px;
  @media (max-width: 768px) {
    width: 80%;
    height: 40vh;
  }

  div {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    h1 {
      /* text-align:center ; */
      font-size: 3rem;
      font-weight: bold;

      @media (max-width: 768px) {
        text-align: center;
        font-size: 0.8rem;
      }
    }
    p {
      margin-top: 10px;
      text-align: center;
      font-size: 1.2rem;
      @media (max-width: 768px) {
        font-size: 0.6rem;
      }
    }
  }
`;

const Img = styled.img`
  width: 10rem;
  height: 10rem;
  @media (max-width: 768px) {
    width: 5rem;
    height: 5rem;
  }
`;
export default Verification;
