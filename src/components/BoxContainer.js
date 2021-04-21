import React, { useState } from "react";
import initialData from "./data";
import styled from "styled-components";
import { DragDropContext, Droppable } from "react-beautiful-dnd";
import Box from "./Box";

const StyledBoxContainer = styled.div`
  width: 100%;
  margin-top: 14px;
  height: 560px;
  border-radius: 3px;
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: center;
`;

const StyledBox = styled.div`
  display: flex;
  flex-direction: column;
`;

export default function BoxContainer() {
  const [data, setData] = useState(initialData);

  const onDragEnd = (result) => {
    console.log("This is RESULT:", result);

    const { destination, draggableId, source } = result;
    if (!destination) {
      return;
    }
    if (
      destination.droppableId === source.droppableId &&
      destination.index === source.index
    ) {
      return;
    }

    const container = data.container;
    const newBoxIds = Array.from(container.boxIds);
    newBoxIds.splice(source.index, 1);
    newBoxIds.splice(destination.index, 0, draggableId);

    const newState = {
      ...data,
      container: {
        ...data.container,
        boxIds: newBoxIds,
      },
    };

    setData(newState);
  };

  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <StyledBoxContainer>
        <Droppable droppableId={data.container.id}>
          {(provided) => (
            <StyledBox ref={provided.innerRef} {...provided.droppableProps}>
              {data.container.boxIds.map((box, index) => {
                return (
                  <Box
                    key={data.boxes[box].id}
                    boxes={data.boxes}
                    index={index}
                    ids={box}
                  />
                );
              })}
              {provided.placeholder}
            </StyledBox>
          )}
        </Droppable>
      </StyledBoxContainer>
    </DragDropContext>
  );
}
