import React, { useState } from "react";
import styled from "styled-components";
import { Howl } from "howler";
import {
  FiPlay,
  FiPauseCircle,
  FiRotateCcw,
  FiSkipForward,
} from "react-icons/fi";
import timesupSound from "./timesupSound.wav";

const Pomodoro = () => {
  // Time's up sound
  let sound = new Howl({
    src: [timesupSound],
    volume: 0.25,
  });

  // States
  const [paused, setPaused] = useState(true);
  const [over, setOver] = useState(false);
  const [[hour, minute, second], setTime] = useState([0, 25, 0]);
  const [[currentHour, currentMinute, currentSecond], setCurrentTime] =
    useState([hour, minute, second]);
  const [mode, setMode] = useState("focus");

  // Countdown tick
  const tick = () => {
    if (paused || over) return;
    if (currentHour === 0 && currentMinute === 0 && currentSecond === 0) {
      sound.play();
      setOver(true);
    } else if (currentMinute === 0 && currentSecond === 0) {
      setCurrentTime([currentHour - 1, 59, 59]);
    } else if (currentSecond === 0) {
      setCurrentTime([currentHour, currentMinute - 1, 59]);
    } else {
      setCurrentTime([currentHour, currentMinute, currentSecond - 1]);
    }
  };

  // Reset countdown
  const reset = () => {
    setCurrentTime([
      parseInt(hour, 10),
      parseInt(minute, 10),
      parseInt(second, 10),
    ]);
    setPaused(paused);
    setOver(false);
  };

  // Switch countdown mode
  const switchMode = (specificMode) => {
    if (specificMode === "focus") {
      setMode("focus");
      setCurrentTime([0, 25, 0]);
      setTime([0, 25, 0]);
    } else if (specificMode === "shortBreak") {
      setMode("shortBreak");
      setCurrentTime([0, 5, 0]);
      setTime([0, 5, 0]);
    } else if (specificMode === "longBreak") {
      setMode("longBreak");
      setCurrentTime([0, 15, 0]);
      setTime([0, 15, 0]);
    }
  };

  // Get to next countdown mode
  function nextMode() {
    if (mode === "focus") {
      setMode("shortBreak");
      setCurrentTime([0, 5, 0]);
      setTime([0, 5, 0]);
    } else if (mode === "shortBreak") {
      setMode("longBreak");
      setCurrentTime([0, 15, 0]);
      setTime([0, 15, 0]);
    } else if (mode === "longBreak") {
      setMode("focus");
      setCurrentTime([0, 25, 0]);
      setTime([0, 25, 0]);
    }
  }

  // Start countdown
  React.useEffect(() => {
    const timerID = setInterval(() => tick(), 1000);
    return () => clearInterval(timerID);
  });

  // Component
  return (
    <PomodoroWrapper>
      <ModeList>
        <ModeBtn onClick={() => switchMode("focus")} status={mode === "focus"}>
          Focus
        </ModeBtn>
        <ModeBtn
          onClick={() => switchMode("shortBreak")}
          status={mode === "shortBreak"}
        >
          Short break
        </ModeBtn>
        <ModeBtn
          onClick={() => switchMode("longBreak")}
          status={mode === "longBreak"}
        >
          Long break
        </ModeBtn>
      </ModeList>
      <Countdown>{`${currentMinute.toString().padStart(2, "0")}:${currentSecond
        .toString()
        .padStart(2, "0")}`}</Countdown>
      <ActionList>
        <ActionBtn onClick={() => reset()}>
          <FiRotateCcw color="#5c5555" size={25}></FiRotateCcw>
        </ActionBtn>
        <ActionBtn onClick={() => setPaused(!paused)}>
          {paused ? (
            <FiPlay color="#5c5555" size={25}></FiPlay>
          ) : (
            <FiPauseCircle color="#5c5555" size={25}></FiPauseCircle>
          )}
        </ActionBtn>
        <ActionBtn onClick={nextMode}>
          <FiSkipForward color="#5c5555" size={25}></FiSkipForward>
        </ActionBtn>
      </ActionList>
    </PomodoroWrapper>
  );
};

// Styles
const PomodoroWrapper = styled.div`
  width: 100%;
  background-color: #fafafa;
  padding-bottom: 2rem;
  transition: 200ms ease-in-out;
  box-shadow: 0 2px 6px 0 rgba(0, 0, 0, 0.06), 0 2px 4px 0 rgba(0, 0, 0, 0.03);
`;
const Countdown = styled.h1`
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
      return "background-color: #ea5e57; color: #ffffff";
    } else {
      return "background-color: #f0f0f0; color: #424242";
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
