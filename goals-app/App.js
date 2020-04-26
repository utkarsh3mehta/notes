import React, { useState } from 'react';
import { StyleSheet, Text, View, Button, TextInput, FlatList } from 'react-native';
import GoalOutput from './components/GoalOutput/GoalOutput';
import GoalInput from './components/GoalInput/GoalInput';

export default function App() {

  const [goalLists, setGoalLists] = useState([])
  const [showModal, setShowModal] = useState(false);

  const addGoalHandler = (enteredGoal) => {
    setGoalLists(goalLists => [...goalLists, { key: Math.random().toString(), value: enteredGoal }])
    modalHandler()
  };

  const removeGoalHandler = (goalIndex) => {
    // console.log(goalIndex)
    // console.log(goalLists)
    setGoalLists(goalLists => {
      return goalLists.filter(goal => goal.key !== goalIndex);
    })
  };

  const modalHandler = () => {
    setShowModal(showModal => !showModal)
  }

  return (
    <View style={styles.root}>
      <Button title="Add new Goal" onPress={modalHandler} />
      <GoalInput
        isVisible={showModal}
        onClick={addGoalHandler}
        onCancel={modalHandler} />
      <FlatList
        data={goalLists}
        renderItem={goal =>
          <GoalOutput
            title={goal.item.value}
            onTouched={() => removeGoalHandler(goal.item.key)} />
        }
      />
    </View>
  );
}

const styles = StyleSheet.create({
  root: {
    padding: 50,
  },

});