import React from "react";
import styled from "styled-components";

function Details() {
  return (
    <Container>
      <Background>
        <img src="./images/movie7.png" alt="" />
      </Background>
      <ImageTitle>
        <img src="./images/viewers-disney.png" alt="" />
      </ImageTitle>
      <Controls>
        <PlayButton>
          <img src="./images/play-icon-black.png" />
          <span>PLAY</span>
        </PlayButton>
        <TrailerButton>
          <img src="./images/play-icon-white.png" />
          <span>TRAILER</span>
        </TrailerButton>
        <AddButton>
          <span>+</span>
        </AddButton>
        <GroupWtchButton>
          <img src="./images/group-icon.png" />
        </GroupWtchButton>
      </Controls>
      <SubTitle>2018 Animation </SubTitle>
      <Description>
        You should spend sometime to read the documentation. Here is the link
        for
      </Description>
    </Container>
  );
}

export default Details;

const Container = styled.div`
  min-height: calc(100vh - 70px);
  padding: 0 calc(3.5vw + 5px);
  position: relative;
`;

const Background = styled.div`
  position: fixed;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  z-index: -1;
  opacity: 0.8;
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

const ImageTitle = styled.div`
  height: 30vh;
  width: 35vw;
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

const Controls = styled.div`
  display: flex;
  align-items: center;
`;

const PlayButton = styled.button`
  border-radius: 4px;
  padding: 0 24px;
  margin-right: 22px;
  letter-spacing: 1.8px;
  cursor: pointer;
  font-size: 15px;
  display: flex;
  align-items: center;
  height: 50px;
  background-color: rgb(249.249, 249);
  border: none;

  &:hover {
    background-color: rgb(198, 198, 198);
  }
`;
const TrailerButton = styled(PlayButton)`
  background-color: rgba(0, 0, 0, 0.3);
  color: rgb(249, 249, 249);
  border: 1px solid rgb(249, 249, 249);
  text-transform: uppercase;
`;
const AddButton = styled.button`
  margin-right: 16px;
  width: 44px;
  height: 44px;
  border-radius: 50%;
  border: 1px solid white;
  background-color: rgb(0, 0, 0, 0.6);
  cursor: pointer;
  span {
    font-size: 30px;
    color: white;
  }
`;
const GroupWtchButton = styled(AddButton)`
  display: flex;
  justify-content: center;
`;

const SubTitle = styled.div`
  font-size: 15px;
  margin-top: 26px;
  color: rgb(249, 249, 249);
`;

const Description = styled.div`
  line-height: 1.4;
  font-size: 20px;
  margin-top: 16px;
`;
