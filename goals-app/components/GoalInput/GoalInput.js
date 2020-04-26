import React, { useState } from 'react';
import { View, TextInput, Button, StyleSheet, Modal } from 'react-native';

const GoalInput = props => {

    const [courseGoal, setCourseGoal] = useState('')

    const typeGoalHandler = (enteredGoal) => {
        setCourseGoal(enteredGoal)
    }

    return (
        <Modal style={styles.rootModal} visible={props.isVisible} animationType="slide">
            <View style={styles.inputContainer}>
                <TextInput
                    placeholder="Enter goal here"
                    style={styles.goalTextInput}
                    onChangeText={typeGoalHandler} />
                <View style={styles.modalButton}>
                    <View style={styles.button}>
                        <Button
                            title="Add"
                            onPress={() => props.onClick(courseGoal)} />
                    </View>
                    <View style={styles.button}>
                        <Button
                            title="Cancel"
                            onPress={props.onCancel}
                            color="red" />
                    </View>
                </View>
            </View>
        </Modal>
    )
}

const styles = StyleSheet.create({
    inputContainer: {
        justifyContent: "center",
        alignItems: "center",
        flex: 1,
    },
    goalTextInput: {
        borderColor: "black",
        borderWidth: 1,
        width: "80%",
        marginBottom: 10,
    },
    modalButton: {
        flexDirection: "row",
        justifyContent: "space-evenly",
        width: '60%',
    },
    button: {
        width: '40%',
    },
    rootModal: {
        padding: 50,
    }
})

export default GoalInput