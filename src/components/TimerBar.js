import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { CountdownCircleTimer } from "react-native-countdown-circle-timer";
import { Picker } from "@react-native-picker/picker";

const TimerBar = ({
  isRunning,
  hours,
  minutes,
  seconds,
  duration,
  setHours,
  setMinutes,
  setSeconds,
  handleComplete,
  handleStart,
}) => {
  const generatePickerItems = (max) => {
    let items = [];
    for (let i = 0; i <= max; i++) {
      items.push(<Picker.Item key={i} label={`${i}`} value={i} />);
    }
    return items;
  };

  return (
    <View style={styles.timerBar}>
      {!isRunning ? (
        <View style={styles.pickerContainer}>
          <Picker
            selectedValue={hours}
            style={styles.picker}
            onValueChange={(itemValue) => setHours(itemValue)}
          >
            {generatePickerItems(23)}
          </Picker>
          <Picker
            selectedValue={minutes}
            style={styles.picker}
            onValueChange={(itemValue) => setMinutes(itemValue)}
          >
            {generatePickerItems(59)}
          </Picker>
          <Picker
            selectedValue={seconds}
            style={styles.picker}
            onValueChange={(itemValue) => setSeconds(itemValue)}
          >
            {generatePickerItems(59)}
          </Picker>
        </View>
      ) : (
        <CountdownCircleTimer
          isPlaying={isRunning}
          duration={duration}
          colors="#004777"
          onComplete={handleComplete}
        >
          {({ remainingTime }) => (
            <Text style={styles.timerText}>
              {Math.floor(remainingTime / 3600)}h{" "}
              {Math.floor((remainingTime % 3600) / 60)}m {remainingTime % 60}s
            </Text>
          )}
        </CountdownCircleTimer>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  timerBar: {
    flex: 2,
    justifyContent: "center",
    alignItems: "center",
  },
  pickerContainer: {
    flexDirection: "row",
    justifyContent: "center",
    marginVertical: 20,
  },
  picker: {
    height: 50,
    width: 100,
  },
  timerText: {
    fontSize: 24,
    marginBottom: 20,
  },
});

export default TimerBar;
