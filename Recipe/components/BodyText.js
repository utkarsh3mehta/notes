import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

const BodyText = props => {
    return (
        <View style={{ ...styles.container, ...props.style }}>
            <Text style={styles.text}>
                {props.children}
            </Text>
        </View>
    )
}

const styles = StyleSheet.create({
    text: {
        fontFamily: 'roboto',
    }
})

export default BodyText;