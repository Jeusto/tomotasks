import React from "react";
import styled from "styled-components";
import { FiTrash } from "react-icons/fi";
import Checkbox from "@material-ui/core/Checkbox";
import { withStyles } from "@material-ui/core/styles";

const Task = ({ task, onCheck, onDelete }) => {
  // Checkbox
  const GreenCheckbox = withStyles({
    root: {
      color: "#ea5e57",
      "&$checked": {
        color: "#ea5e57",
      },
    },
    checked: {},
  })((props) => <Checkbox color="default" {...props} />);

  const [checked, setChecked] = React.useState(true);

  const handleChange = (event) => {
    setChecked(event.target.checked);
    onCheck(task.id);
  };

  // Component
  return (
    <TaskWrapper>
      <GreenCheckbox
        checked={task.status === "complete" ? true : false}
        onChange={handleChange}
        inputProps={{ "aria-label": "primary checkbox" }}
      />
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
