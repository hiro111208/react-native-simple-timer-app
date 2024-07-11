import { Text, TextInput } from "react-native";
import { useState } from "react";

const Counter = ({ count }) => {
  //const [count, setCount] = useState(count);
  const [newCount, setNewCount] = useState(count);
  return (
    // <Text>{count}</Text>
    <TextInput
      placeholder={count.toString()}
      value={newCount}
      onChangeText={(newCount) => setNewCount(newCount)}
      keyboardType="numeric"
    />
  );
};

export default Counter;
