import React from 'react'
import { View, Button, StyleSheet } from 'react-native'

import BodyText from '../components/BodyText'

const CategoryScreen = props => {
    return (
        <View style={styles.container}>
            <BodyText>Category Screen</BodyText>
            <Button title="To single category" onPress={() => props.navigation.navigate('SingleCategory')} />
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

export default CategoryScreen;