import React, { useState } from "react";
import styled from "styled-components";
import { Resizable } from "re-resizable";
import { Droppable } from "react-beautiful-dnd";
import { userData } from "./data";

const Container = styled.div`
  width: ${(props) => props.containerWidth && props.width};
  height: 150px;
  color: lightgoldenrodyellow;
  background-color: #162043;
`;

export default function BoxOne({ containerWidth }) {
  const [width, setWidth] = useState(980);
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
      minHeight="150px"
      maxHeight="150px"
      minWidth="980"
      maxWidth="980"
      onResizeStop={(e, direction, ref, d) => {
        setWidth(width + d.width);
      }}
    >
      <Container containerWidth={width}>users</Container>
    </Resizable>
  );
}
