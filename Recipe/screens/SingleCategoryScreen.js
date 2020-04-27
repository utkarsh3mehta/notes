import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

import BodyText from '../components/BodyText'

const SingleCategoryScreen = props => {
    return (
        <View style={styles.container}>
            <BodyText>Single Category Screen</BodyText>
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

export default SingleCategoryScreen;