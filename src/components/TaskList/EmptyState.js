import React from "react";
import styled from "styled-components";
import empty from "./empty.svg";

// Component
const EmptyState = () => {
  return (
    <Wrapper>
      <Text>No tasks to show, start adding some.</Text>
    </Wrapper>
  );
};

// Styles
const Wrapper = styled.div`
  margin: auto;
  margin-top: 1rem;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  flex-direction: column;
`;
const Text = styled.p`
  font-size: 1.5rem;
  color: gray;
  padding: 0;
  margin: 0;
`;
const Image = styled.img`
  width: 30rem;
`;

export default EmptyState;