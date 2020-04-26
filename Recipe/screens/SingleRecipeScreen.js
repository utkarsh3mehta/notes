import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

const SingleRecipeScreen = props => {
    return (
        <View style={styles.container}>
            <Text>Single Recipe Screen</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    }
})

export default SingleRecipeScreen;