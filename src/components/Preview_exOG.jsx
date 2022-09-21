import React from "react";
import styled from "styled-components";

// import Header from "../src/Header";
// import Footer from "../src/Footer";

export default function Preview() {
  return (
    <Wrapper>
      <Header>The Seminar Program</Header>
      <Content>
        <Summary>
          <Title>Title</Title>
          <Description>Description goes here</Description>
        </Summary>
        <Schedule>Schedule</Schedule>
        <Contact>
          For information and registration, please call (514) 874-9811.
        </Contact>
        <Footer />
      </Content>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  flex: 1;
  padding: var(--spacing);
  background: white;
  height: 100%;
  aspect-ratio: 8.5 / 11;
  display: flex;
  flex-direction: column;

  & > * {
    border: 1px solid blue;
  }

  & > header,
  & > footer {
    color: hsl(192, 80, 35);
  }

  /* min-width: 500px; */
  /* flex: 1; */
  /* height: 100%; */
  /* padding: 2%; */
  /* & > * {
    border: 1px solid magenta;
  } */
  /* background: white; */
`;

const Header = styled.header`
  
`;
const Content = styled.div`
  background: hsl(187deg 80% 98%);

  position: relative;
  flex: 1075;
  padding: 25px;
`;

const Title = styled.h1`
  color: var(--landmark-primary);
`;

const Summary = styled.div``;

const Description = styled.div``;

const Schedule = styled.div``;

const Contact = styled.div``;

const Footer = styled.footer`
  
`;