import React from "react";
import styled from "styled-components";
import { Draggable } from "react-beautiful-dnd";

const Container = styled.div`
  padding: 5px;
  width: auto;
  height: auto;
  user-select: none;
`;

const Handle = styled.div`
  width: 40px;
  height: 20px;
  background-color: transparent;
  background-image: radial-gradient(white 15%, transparent 16%),
    radial-gradient(white 15%, transparent 16%);
  background-size: 10px 10px;
  background-position: 0 0, 30px 30px;
`;

export default function Box({ boxes, index, ids }) {
  return (
    <Draggable draggableId={boxes[ids].id} index={index}>
      {(provided) => (
        <Container {...provided.draggableProps} ref={provided.innerRef}>
          <Handle {...provided.dragHandleProps} />
          {boxes[ids].content}
        </Container>
      )}
    </Draggable>
  );
}
