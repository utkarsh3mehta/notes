import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

const FilterScreen = props => {
    return (
        <View style={styles.container}>
            <Text>Filter Screen</Text>
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

export default FilterScreen;