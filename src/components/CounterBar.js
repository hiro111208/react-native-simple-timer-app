import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";

const CounterBar = ({ counter, onCounterChange }) => {
  const handleIncrement = () => {
    const newValue = counter + 1;
    onCounterChange(newValue);
  };

  const handleDecrement = () => {
    const newValue = counter > 0 ? counter - 1 : 0;
    onCounterChange(newValue);
  };

  return (
    <View style={styles.counterBar}>
      <Text style={styles.counterLabel}>Counter:</Text>
      <View style={styles.inputContainer}>
        <TouchableOpacity style={styles.button} onPress={handleDecrement}>
          <Text style={styles.buttonText}>-</Text>
        </TouchableOpacity>
        <Text style={styles.counterValue}>{counter}</Text>
        <TouchableOpacity style={styles.button} onPress={handleIncrement}>
          <Text style={styles.buttonText}>+</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  counterBar: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  counterLabel: {
    fontSize: 18,
    marginBottom: 10,
  },
  inputContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  button: {
    backgroundColor: "#DDDDDD",
    padding: 10,
    marginHorizontal: 5,
  },
  buttonText: {
    fontSize: 20,
  },
  counterValue: {
    fontSize: 18,
    paddingHorizontal: 20,
  },
});

export default CounterBar;
