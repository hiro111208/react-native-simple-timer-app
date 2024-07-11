import React, { useState, useEffect } from "react";
import { SafeAreaView, StyleSheet, Button } from "react-native";
import TimerBar from "./src/components/TimerBar"; // Assuming TimerBar.js contains your timer logic
import CounterBar from "./src/components/CounterBar"; // Assuming CounterBar.js contains your counter logic

const App = () => {
  const [counter, setCounter] = useState(0);
  const [isRunning, setIsRunning] = useState(false);
  const [key, setKey] = useState(0);
  const [hours, setHours] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);
  const [duration, setDuration] = useState(0);
  const [isTimerZero, setIsTimerZero] = useState(true);

  useEffect(() => {
    // Check if timer is zero whenever hours, minutes, or seconds change
    const currentIsTimerZero = hours === 0 && minutes === 0 && seconds === 0;
    setIsTimerZero(currentIsTimerZero);
  }, [hours, minutes, seconds]);

  const handleStart = () => {
    // Increment counter and start timer
    const newCounter = counter + 1;
    setCounter(newCounter);

    const totalDuration =
      parseInt(hours) * 3600 + parseInt(minutes) * 60 + parseInt(seconds);
    setDuration(totalDuration);
    setIsRunning(true);
  };

  const handleStop = () => {
    setIsRunning(false);
  };

  const handleComplete = () => {
    setIsRunning(false);
    setKey((prevKey) => prevKey + 1);
  };

  const handleCounterChange = (value) => {
    setCounter(value);
  };

  return (
    <SafeAreaView style={styles.container}>
      <TimerBar
        isRunning={isRunning}
        hours={hours}
        minutes={minutes}
        seconds={seconds}
        duration={duration}
        setHours={setHours}
        setMinutes={setMinutes}
        setSeconds={setSeconds}
        handleComplete={handleComplete}
        handleStart={handleStart}
      />
      <CounterBar counter={counter} onCounterChange={handleCounterChange} />
      {!isTimerZero && !isRunning && (
        <Button
          title="Start Timer"
          onPress={handleStart}
          disabled={isTimerZero && !isRunning} // Disable only if timer is zero and not running
        />
      )}
      {isRunning && <Button title="Stop Timer" onPress={handleStop} />}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default App;
