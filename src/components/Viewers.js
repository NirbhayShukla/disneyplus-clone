import React from "react";
import styled from "styled-components";

function Viewers() {
  return (
    <Container>
      <Wrap>
        <img src="./images/viewers-disney.png" alt="" />
      </Wrap>
      <Wrap>
        <img src="./images/viewers-pixar.png" alt="" />
      </Wrap>
      <Wrap>
        <img src="./images/viewers-marvel.png" alt="" />
      </Wrap>
      <Wrap>
        <img src="./images/viewers-starwars.png" alt="" />
      </Wrap>
      <Wrap>
        <img src="./images/viewers-national.png" alt="" />
      </Wrap>
    </Container>
  );
}

export default Viewers;

const Container = styled.div`
  margin-top: 30px;
  display: grid;
  grid-gap: 25px;
  grid-template-columns: repeat(5, 1fr);
  padding: 30px 0 26px;
`;

const Wrap = styled.div`
  border: 1px solid rgba(249, 249, 249, 0.1);
  border-radius: 10px;
  box-shadow: rgb(0 0 0 /69%) 0 29px 36px -10px,
    rgb(0 0 0 /73%) 0 16px 10px -10px;
  cursor: pointer;
  transition: all 250ms ease-in-out;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  &:hover {
    transform: scale(1.05);
    border-color: rgba(249, 249, 249, 0.8);
  }
`;
