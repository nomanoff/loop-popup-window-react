import React from "react";
import styled from "styled-components";
import BoxContainer from "./BoxContainer";

const AppContainer = styled.div`
  width: 1000px;
  height: 600px;
  background-color: #162043;
  border: 2px solid #fff;
  box-shadow: rgba(76, 76, 85, 0.2) 0px 7px 29px 0px;
  margin: 3rem auto;
  text-align: center;
  color: white;
  user-select: none;
  border-radius: 3px;
`;

function App() {
  return (
    <AppContainer>
      <h3>Top Menu</h3>
      <BoxContainer />
    </AppContainer>
  );
}

export default App;
