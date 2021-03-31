import React from "react";
import styled from "styled-components";
import BoxOne from "./BoxOne";
import BoxTwo from "./BoxTwo";

const AppContainer = styled.div`
  width: 800px;
  height: 600px;
  background-color: lightcoral;
  border: 2px solid #fff;
  box-shadow: rgba(76, 76, 85, 0.2) 0px 7px 29px 0px;
  margin: 3rem auto;
  text-align: center;
  color: white;
  user-select: none;
  border-radius: 3px;
`;

const BoxContainer = styled.div`
  width: 100%;
  margin-top: 14px;
  height: 560px;
  border: 2px solid lightcoral;
  border-radius: 3px;
  display: flex;
  justify-content: start;
  align-items: center;
`;

function App() {
  return (
    <AppContainer>
      <h3>Top Menu</h3>
      <BoxContainer>
        <BoxOne />
        <BoxTwo />
      </BoxContainer>
    </AppContainer>
  );
}

export default App;
