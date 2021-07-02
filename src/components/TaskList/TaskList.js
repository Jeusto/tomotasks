import React, { useState } from "react";
import styled from "styled-components";
import { FiPlus, FiX } from "react-icons/fi";
import EmptyState from "./EmptyState";
import SingleTask from "./SingleTask";
import AddTask from "./AddTask";

const TaskList = ({ tasks, onAdd, onDelete, onCheck, onDeleteAll }) => {
  // State
  const [showAddTask, setShowAddTask] = useState(false);

  // Component
  return (
    <TaskListWrapper>
      <Header>
        <Title>Tasks done:</Title>
        <Number>
          {tasks.length !== 0
            ? `${tasks.filter((task) => task.status === "complete").length}/${
                tasks.length
              }`
            : "none"}
        </Number>
      </Header>
      {tasks.length > 0 ? (
        tasks.map((task) => (
          <SingleTask
            key={task.id}
            task={task}
            onDelete={onDelete}
            onCheck={onCheck}
          ></SingleTask>
        ))
      ) : (
        <EmptyState></EmptyState>
      )}
      {showAddTask && (
        <AddTask
          onClick={() => {
            setShowAddTask(!showAddTask);
          }}
          onAdd={onAdd}
        ></AddTask>
      )}
      {!showAddTask && (
        <Buttons>
          <AddTaskBtn
            status={showAddTask}
            onClick={() => setShowAddTask(!showAddTask)}
          >
            <FiPlus color="#ea5e57" size={25} />
            Add new task
          </AddTaskBtn>
          <DeleteAllBtn status={showAddTask} onClick={() => onDeleteAll()}>
            Delete all
          </DeleteAllBtn>
        </Buttons>
      )}
    </TaskListWrapper>
  );
};

// Styles
const TaskListWrapper = styled.div`
  position: relative;
  width: 100%;
  margin-top: 1rem;
`;
const Header = styled.div`
  font-weight: 500;
  color: #4f4f4f;
  font-size: 2rem;
  display: flex;
  justify-content: flex-start;
  align-items: center;
`;
const Title = styled.div``;
const Number = styled.div`
  margin-left: 1rem;
`;
const Buttons = styled.div`
  margin-top: 0.75rem;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  font-size: 1.5rem;
  font-weight: 500;
  cursor: pointer;
`;
const AddTaskBtn = styled.button`
  color: #ea5e57;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  font-size: 1.5rem;
  font-weight: 500;
  padding: 0.5rem 0rem;
`;
const DeleteAllBtn = styled.button`
  color: #757575;
  font-size: 1.5rem;
  padding: 0.5rem 0rem;
  margin-left: 1rem;
  padding-left: 0.5rem;
`;

export default TaskList;
