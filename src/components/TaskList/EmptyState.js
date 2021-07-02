import React from "react";
import styled from "styled-components";

const EmptyState = () => {
  // Component
  return (
    <Wrapper>
      <Text>No tasks to show, start adding some.</Text>
    </Wrapper>
  );
};

// Styles
const Wrapper = styled.div`
  margin: auto;
  margin-top: 0.25rem;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  flex-direction: column;
`;
const Text = styled.p`
  font-size: 1.5rem;
  color: #757575;
  padding: 0;
  margin: 0;
`;

export default EmptyState;
