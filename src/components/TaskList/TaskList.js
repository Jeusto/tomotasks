import React, { useState } from "react";
import styled from "styled-components";
import { FiPlus } from "react-icons/fi";
import EmptyState from "./EmptyState";
import Task from "./Task";
import AddTask from "./AddTask";

// Component
const TaskList = ({ tasks, onAdd, onDelete, onCheck }) => {
  const [showAddTask, setShowAddTask] = useState(false);

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
          <Task
            key={task.id}
            task={task}
            onDelete={onDelete}
            onCheck={onCheck}
          ></Task>
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
        <AddTaskBtn
          status={showAddTask}
          onClick={() => setShowAddTask(!showAddTask)}
        >
          <FiPlus color="#ea5e57" size={25} />
          {showAddTask ? "Close  " : "Add new task"}
        </AddTaskBtn>
      )}
    </TaskListWrapper>
  );
};

// Styles
const TaskListWrapper = styled.div`
  position: relative;
  width: 100%;
`;
const Header = styled.div`
  font-weight: 500;
  color: #4f4f4f;
  font-size: 2rem;
  margin: 0;
  padding: 0;
  display: flex;
  justify-content: flex-start;
  align-items: center;
`;
const Title = styled.div``;
const Number = styled.div`
  margin-left: 1rem;
`;
const AddTaskBtn = styled.button`
  color: #ea5e57;
  width: 100%;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  font-size: 1.5rem;
  font-weight: 500;
  cursor: pointer;
  padding: 0.5rem 0rem;
  position: absolute;
  right: 0;
  border-radius: 0.25rem;
  margin-top: 1rem;
`;

export default TaskList;
