import React from "react";
import { useState, useEffect } from "react";
import styled from "styled-components";
import {
  FiPlay,
  FiPauseCircle,
  FiRotateCcw,
  FiSkipForward,
} from "react-icons/fi";

// Component
const Pomodoro = () => {
  const [time, setTime] = useState(1500000);
  const [timerOn, setTimerOn] = useState(false);
  const [timerMode, setTimerMode] = useState("focus");

  useEffect(() => {
    let interval = null;

    if (timerOn) {
      interval = setInterval(() => {
        setTime((prevTime) => prevTime - 1000);
      }, 1000);
    } else if (!timerOn) {
      clearInterval(interval);
    }

    return () => clearInterval(interval);
  }, [timerOn]);

  return (
    <PomodoroWrapper>
      <ModeList>
        <ModeBtn
          status={timerMode === "focus"}
          onClick={() => {
            setTime(1500000);
            setTimerOn(false);
            setTimerMode("focus");
          }}
        >
          Focus
        </ModeBtn>
        <ModeBtn
          status={timerMode === "shortBreak"}
          onClick={() => {
            setTime(300000);
            setTimerOn(false);
            setTimerMode("shortBreak");
          }}
        >
          Short break
        </ModeBtn>
        <ModeBtn
          status={timerMode === "longBreak"}
          onClick={() => {
            setTime(900000);
            setTimerOn(false);
            setTimerMode("longBreak");
          }}
        >
          Long break
        </ModeBtn>
      </ModeList>
      <Timer>
        <span>{("0" + Math.floor((time / 60000) % 60)).slice(-2)}:</span>
        <span>{("0" + Math.floor((time / 1000) % 60)).slice(-2)}</span>
      </Timer>
      <ActionList>
        <ActionBtn
          onClick={() => {
            setTime(
              timerMode === "focus"
                ? 1500000
                : timerMode === "shortBreak"
                ? 300000
                : timerMode === "longBreak"
                ? 900000
                : 0
            );
            setTimerOn(false);
          }}
        >
          <FiRotateCcw color="#5c5555" size={25}></FiRotateCcw>
        </ActionBtn>
        {!timerOn ? (
          <ActionBtn onClick={() => setTimerOn(true)}>
            <FiPlay color="#5c5555" size={25}></FiPlay>
          </ActionBtn>
        ) : (
          <ActionBtn onClick={() => setTimerOn(false)}>
            <FiPauseCircle color="#5c5555" size={25}></FiPauseCircle>
          </ActionBtn>
        )}
        <ActionBtn
          onClick={() => {
            switch (timerMode) {
              case "focus":
                setTime(300000);
                setTimerMode("shortBreak");
                break;
              case "shortBreak":
                setTime(900000);
                setTimerMode("longBreak");
                break;
              case "longBreak":
                setTime(1500000);
                setTimerMode("focus");
                break;
              default:
                break;
            }
          }}
        >
          <FiSkipForward color="#5c5555" size={25}></FiSkipForward>
        </ActionBtn>
      </ActionList>
    </PomodoroWrapper>
  );
};

// Styles
const PomodoroWrapper = styled.div`
  margin: 2rem 0;
  border-radius: 0rem 0rem 0.75rem 0.75rem;
  background-color: #fff2f2;
  width: 100%;
  padding-bottom: 2rem;
  transition: 200ms ease-in-out;
  box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06);
`;
const Timer = styled.h1`
  color: #403b3b;
  display: flex;
  justify-content: center;
  align-items: center;
  width: auto;
  margin: auto;
  font-size: 8rem;
  font-weight: 400;
`;
const ModeList = styled.div`
  background-color: #ea5e57;
  margin: auto;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
`;
const ModeBtn = styled.button`
  font-size: 1.5rem;
  border: none;
  cursor: pointer;
  padding: 1rem 0;
  width: 33.4%;
  color: white;
  ${({ status }) => {
    if (status) {
      return "background-color: #fff2f2; color: #424242";
    }
  }}
`;
const ActionList = styled.div`
  margin: auto;
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 30%;
`;
const ActionBtn = styled.button`
  transition: 100ms ease-in-out;
  &:hover {
    transform: scale(1.2);
  }
`;

export default Pomodoro;
