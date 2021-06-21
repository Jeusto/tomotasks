import React, { useState } from "react";
import styled from "styled-components";

// Component
const AddTask = ({ onAdd, onClick }) => {
  const [text, setText] = useState("");

  const onSubmit = (e) => {
    e.preventDefault();
    if (!text) {
      alert("Task can't be empty");
      return;
    }
    onAdd({ text });
    setText("");
  };

  return (
    <Form onSubmit={onSubmit}>
      <TaskInput
        placeholder={"Enter task"}
        value={text}
        onChange={(e) => setText(e.target.value)}
      ></TaskInput>
      <Btns>
        {" "}
        <SaveBtn value="Save"></SaveBtn>
        <CancelBtn onClick={onClick}>Cancel</CancelBtn>
      </Btns>
    </Form>
  );
};

// Styles
const Form = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  margin-bottom: 1rem;
`;

const TaskInput = styled.input.attrs({ type: "text", maxLength: "70" })`
  box-sizing: border-box;
  margin-top: 1rem;
  padding-left: 1rem;
  background-color: #ededed;
  height: 3rem;
  border-radius: 0.3rem;
  font-size: 1.5rem;
  transition: 100ms ease-in-out;
  &:focus {
    box-shadow: 0 0 0 0.2rem #d1d1d1;
  }
`;
const Btns = styled.div`
  display: flex;
  justify-content: flex-start;
`;
const SaveBtn = styled.input.attrs({ type: "submit" })`
  margin-top: 1rem;
  align-self: flex-end;
  font-size: 1.5rem;
  font-weight: 500;
  cursor: pointer;
  padding: 0.5rem 1rem;
  border-radius: 0.3rem;
  background-color: #ea5e57;
  color: white;
  transition: 200ms ease-in-out;
  &:hover {
    background-color: #c74a44;
  }
`;
const CancelBtn = styled.button`
  margin-top: 1rem;
  align-self: flex-end;
  font-size: 1.5rem;
  font-weight: 500;
  cursor: pointer;
  padding: 0.5rem 1rem;
  border-radius: 0.25rem;
  color: #ea5e57;
  transition: 200ms ease-in-out;
  &:hover {
    color: #c74a44;
  }
`;

export default AddTask;
