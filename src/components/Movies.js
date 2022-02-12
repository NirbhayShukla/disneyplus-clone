import React from "react";
import styled from "styled-components";

function Movies() {
  return (
    <Container>
      <h4>Recommended for you</h4>
      <Content>
        <Wrap>
          <img src="./images/movie1.png" alt="" />
        </Wrap>
        <Wrap>
          <img src="./images/movie2.png" alt="" />
        </Wrap>
        <Wrap>
          <img src="./images/movie6.png" alt="" />
        </Wrap>
        <Wrap>
          <img src="./images/movie8.png" alt="" />
        </Wrap>
      </Content>
    </Container>
  );
}

export default Movies;

const Container = styled.div``;

const Content = styled.div`
  display: grid;
  grid-gap: 25px;
  grid-template-columns: repeat(4, 1fr);
`;

const Wrap = styled.div`
  border-radius: 10px;
  overflow: hidden;
  box-shadow: rgb(0 0 0 /69%) 0 29px 36px -10px,
    rgb(0 0 0 /73%) 0 16px 10px -10px;
  border: 3px solid rgba(249, 249, 249, 0.1);
  transition: all 250ms ease-in-out;
  cursor: pointer;
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  &:hover {
    transform: scale(1.05);
    border: 3px solid rgba(249, 249, 249, 0.8);
  }
`;
