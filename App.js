import { StatusBar } from "expo-status-bar";
import { Button, StyleSheet, Text, View } from "react-native";
import UrgeWithPleasureComponent from "./components/UrgeWithPleasureComponent";
import { useState } from "react";
import Counter from "./components/Counter";

const App = () => {
  const [count, setCount] = useState(0);
  const [key, setKey] = useState(0);
  const startTimer = () => {};
  return (
    <View style={styles.container}>
      <Counter count={count} />
      <UrgeWithPleasureComponent duration={60} key={key} />
      <Button
        onPress={() => {
          setCount(count + 1);
          setKey((prevKey) => prevKey + 1);
        }}
        title="Start"
      />
    </View>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
