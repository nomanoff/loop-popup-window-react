import React, { useState } from "react";
import styled from "styled-components";
import { Resizable } from "re-resizable";

const Container = styled.div`
  width: ${(props) => props.containerWidth && props.width};
  height: 550px;
  color: lightslategray;
  background-color: lightgoldenrodyellow;
`;

export default function BoxOne({ containerWidth }) {
  const [width, setWidth] = useState(250);
  return (
    <Resizable
      size={{ width }}
      enable={{
        top: false,
        right: true,
        bottom: false,
        left: false,
        topRight: false,
        bottomRight: false,
        bottomLeft: false,
        topLeft: false,
      }}
      minHeight="550px"
      maxHeight="550px"
      minWidth="100"
      maxWidth="250"
      onResizeStop={(e, direction, ref, d) => {
        setWidth(width + d.width);
      }}
    >
      <Container containerWidth={width}>
        <h2>Box One</h2>
      </Container>
    </Resizable>
  );
}
