import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

import BodyText from '../components/BodyText'

const FilterScreen = props => {
    return (
        <View style={styles.container}>
            <BodyText>Filter Screen</BodyText>
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