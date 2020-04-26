import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

const SingleCategoryScreen = props => {
    return (
        <View style={styles.container}>
            <Text>Single Category Screen</Text>
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