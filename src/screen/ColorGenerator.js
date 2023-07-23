import { View, Text, TouchableOpacity, StyleSheet, Alert, FlatList } from 'react-native'
import React, { useState } from 'react'

const ColorGenerator = () => {
    const [newColor, setNewColor] = useState([])
    const randomColor = () => {
        const red = Math.floor(Math.random() * 256)
        const green = Math.floor(Math.random() * 256)
        const blue = Math.floor(Math.random() * 256)
        return `rgb(${red},${green},${blue})`
    }
    return (
        <View style={styles.mainContainer}>
            <TouchableOpacity style={styles.buttonStyle} onPress={() => {
                setNewColor([...newColor, randomColor()])
            }}>
                <Text style={styles.textStyle}>Generate Random Color</Text>
            </TouchableOpacity>

            <FlatList keyExtractor={(key) => key} data={newColor} renderItem={({ item }) => {
                return (
                    <View style={styles.imageContainer}>
                        <View style={{
                            backgroundColor: item,
                            width: 100,
                            height: 100,
                            borderRadius: 5,
                            marginTop: 5,
                            display: 'flex',
                            justifyContent: 'center',
                            alignItems: 'center',
                            width: "80%"
                        }}>
                            <Text style={styles.textStyle}>{item}</Text>
                        </View>
                    </View>
                )
            }} />
        </View>
    )
}

const styles = StyleSheet.create({
    mainContainer: {
        marginTop: 100
    },
    buttonStyle: {
        backgroundColor: '#00b0ff',
        color: '#eee',
        paddingVertical: 10,
        paddingHorizontal: 15,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 5
    },
    textStyle: {
        color: 'white',
        textTransform: 'uppercase',

    },
    imageContainer: {
        marginVertical: 50,
        paddingHorizontal: 30,
        alignItems: 'center'

    }
})

export default ColorGenerator