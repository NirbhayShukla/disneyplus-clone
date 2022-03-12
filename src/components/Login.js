import React from "react";
import styled from "styled-components";

function Login() {
  return (
    <Container>
      <CTA>
        <CTALogoOne src="./images/cta-logo-one.svg" />
        <SignUp> Get ALL There</SignUp>
        <Description>Get Premiere Access</Description>
        <CTALogoTwo src="./images/cta-logo-two.png" />
      </CTA>
    </Container>
  );
}

export default Login;

const Container = styled.div`
  position: relative;
  height: calc(100vh - 70px);
  display: flex;
  align-items: top;
  justify-content: center;
  &:before {
    position: absolute;
    top: 0;
    bottom: 0;
    content: "";
    left: 0;
    right: 0;
    z-index: -1;
    opacity: calc() 0.7;
    background-image: url("./images/login-background.jpg");
    background-size: cover;
    background-repeat: no-repeat;
  }
`;

const CTA = styled.div`
  max-width: 650px;
  padding: 80px 40px;
  width: 70%;
  display: flex;
  flex-direction: column;
  margin-top: 100px;
`;

const CTALogoOne = styled.img``;

const CTALogoTwo = styled.img``;

const SignUp = styled.a`
  width: 100%;
  background-color: #0036e5;
  font-weight: bold;
  padding: 18px 0;
  color: #f9f9f9;
  border-radius: 4px;
  text-align: center;
  font-size: 18px;
  cursor: pointer;
  margin-top: 20px;
  transition: all 250ms ease-in-out;
  letter-spacing: 1.5px;
  text-transform: uppercase;

  &:hover {
    background-color: #0483ee;
  }
`;

const Description = styled.p`
  font-size: 11px;
  letter-spacing: 1.5px;
  text-align: center;
  line-height: 1.5;
`;
