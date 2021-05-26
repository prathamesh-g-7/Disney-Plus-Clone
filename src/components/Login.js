import React from "react";
import styled from "styled-components";

function Login() {
  return (
    <Container>
      <Content>
        <LogoOne src="/images/cta-logo-one.svg" />

        <Signup>GET ALL THERE</Signup>

        <Description>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sapiente
          animi ipsum sed quasi, suscipit odit in ea similique a. Cumque
          voluptate cum necessitatibus. Dolores, neque!
        </Description>

        <LogoTwo src="/images/cta-logo-two.png" />
      </Content>
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
    content: "";
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    z-index: -1;
    opacity: 0.7;
    background-position: top;
    background-size: cover;
    background-repeat: no-repeat;

    background-image: url("/images/login-background.jpg");
  }
`;

const Content = styled.div`
  max-width: 750px;
  padding: 40px 80px;
  width: 90%;
  display: flex;
  flex-direction: column;
  margin-top: 100px;
  align-items: center;
`;

const LogoOne = styled.img``;

const Signup = styled.a`
  width: 100%;
  background-color: #0063e5;
  font-weight: bold;
  padding: 17px 0;
  color: #f9f9f9;
  border-radius: 4px;
  text-align: center;
  font-size: 18px;
  cursor: pointer;
  transition: all 250ms;
  letter-spacing: 1.5px;
  margin-top: 8px;
  margin-bottom: 12px;

  &:hover {
    background: #0483ee;
  }
`;

const Description = styled.p`
  font-size: 11px;
  letter-spacing: 1.5px;
  text-align: center;
  line-height: 1.5;
`;

const LogoTwo = styled.img`
  width: 90%;
`;
