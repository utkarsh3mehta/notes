import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

const GoalOutput = props => {
    return (
        <TouchableOpacity activeOpacity={0.8} onPress={props.onTouched}>
            <View style={styles.listOfGoals}>
                <Text>{props.title}</Text>
            </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    listOfGoals: {
        backgroundColor: "#aaa",
        padding: 10,
        marginVertical: 1,
        borderColor: "black",
        flexDirection: 'row',
    }
})

export default GoalOutput;