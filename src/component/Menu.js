import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'

const Menu = () => {
    const navigation = useNavigation()
    return (
        <View style={styles.menuContainer}>
            <TouchableOpacity style={styles.buttonStyle} onPress={() => navigation.navigate('Student')}>
                {/* <Text>Course</Text> */}
                <Image style={styles.iconStyle} source={{ uri: 'https://img.icons8.com/stickers/100/000000/training.png' }} />
            </TouchableOpacity>

            <TouchableOpacity style={styles.buttonStyle} onPress={() => navigation.navigate('Course')}>
                {/* <Text>About</Text> */}
                <Image style={styles.iconStyle} source={{ uri: 'https://img.icons8.com/stickers/100/000000/conference.png' }} />
            </TouchableOpacity>

            <TouchableOpacity style={styles.buttonStyle} onPress={() => navigation.navigate('About')}>
                {/* <Text>Contact</Text> */}
                <Image style={styles.iconStyle} source={{ uri: 'https://img.icons8.com/stickers/100/000000/about.png' }} />
            </TouchableOpacity>

            <TouchableOpacity style={styles.buttonStyle} onPress={() => navigation.navigate('Contact')}>
                {/* <Text>Student</Text> */}
                <Image style={styles.iconStyle} source={{ uri: 'https://img.icons8.com/stickers/100/000000/phone.png' }} />
            </TouchableOpacity>
        </View>
    )
}

export default Menu
const styles = StyleSheet.create({
    menuContainer: {
        flexDirection: 'row',
        justifyContent: 'space-evenly'
    },
    textStyle: {
        textTransform: 'uppercase',
    },
    iconStyle: {
        width: "100%",
        height: 50,
        aspectRatio: 1
    }
})
