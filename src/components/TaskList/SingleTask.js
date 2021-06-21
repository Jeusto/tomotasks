import React from "react";
import styled from "styled-components";
import { FiTrash } from "react-icons/fi";

const Task = ({ task, onCheck, onDelete }) => {
  // Component
  return (
    <TaskWrapper>
      <Checkbox onClick={() => onCheck(task.id)}></Checkbox>
      <TaskText status={task.status}>{task.text}</TaskText>
      <Icon>
        {" "}
        <FiTrash
          onClick={() => onDelete(task.id)}
          size={25}
          color="#808080"
          style={{
            hover: "display:none",
            marginLeft: "auto",
            cursor: "pointer",
            width: "3rem",
          }}
        />
      </Icon>
    </TaskWrapper>
  );
};

// Styles
const TaskWrapper = styled.div`
  box-sizing: border-box;
  height: 3rem;
  width: 100%;
  display: flex;
  align-items: center;
  border-radius: 0.25rem;
  margin-top: 0rem;
  border-bottom: 2px solid #ededed;
`;
const Checkbox = styled.input.attrs({ type: "checkbox" })`
  cursor: pointer;
  width: 1.4rem;
  height: 1.4rem;
  margin-right: 0.5rem;
  color: red;
`;
const TaskText = styled.p`
  max-height: 2.7rem;
  max-width: 32rem;
  overflow: hidden;
  font-size: 1.5rem;
  color: #4f4f4f;
  ${({ status }) => {
    switch (status) {
      case "complete":
        return "text-decoration: line-through 0.2rem #ea5e57";
      case "uncomplete":
        return "";
      default:
        return "";
    }
  }};
`;
const Icon = styled.div`
  margin-left: auto;
  transition: 100ms ease-in-out;
  &:hover {
    transform: scale(1.1);
  }
`;

export default Task;
