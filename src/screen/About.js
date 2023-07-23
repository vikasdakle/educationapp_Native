import { Image, Linking, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'

const About = () => {
    return (
        <View style={styles.aboutContainer}>
            <Text style={styles.mainHeader}>Vikas Dilip Dakle</Text>
            <Text style={styles.aboutPara}>I am a Full stack developer</Text>

            <View>
                <Image style={styles.imgStyle} source={{ uri: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940' }} />
            </View>

            <View style={styles.aboutLayout}>
                <Text style={styles.aboutSubHeader}>About me</Text>
                <Text style={[styles.paraStyle, styles.aboutPara]}>Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before final copy is available.</Text>
            </View>

            <Text style={styles.mainHeader}>Follow me on Social Network</Text>

            <View style={styles.menuContainer}>
                <TouchableOpacity onPress={() => Linking.openURL("https://www.linkedin.com/in/vikas-dakle-b942a9271/")} style={styles.buttonStyle}>
                    <Image style={styles.iconStyle} source={{ uri: 'https://cdn-icons-png.flaticon.com/512/2111/2111463.png' }} />
                </TouchableOpacity>

                <TouchableOpacity onPress={() => Linking.openURL("https://www.linkedin.com/in/vikas-dakle-b942a9271/")} style={styles.buttonStyle}>
                    <Image style={styles.iconStyle} source={{ uri: 'https://cdn-icons-png.flaticon.com/512/187/187210.png' }} />
                </TouchableOpacity>

                <TouchableOpacity onPress={() => Linking.openURL("https://www.linkedin.com/in/vikas-dakle-b942a9271/")} style={styles.buttonStyle}>
                    <Image style={styles.iconStyle} source={{ uri: 'https://cdn-icons-png.flaticon.com/512/906/906361.png' }} />
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default About

const styles = StyleSheet.create({
    aboutContainer: {
        display: 'flex',
        alignItems: 'center'
    },
    imgStyle: {
        width: 150,
        height: 150,
        borderRadius: 100
    },
    mainHeader: {
        fontSize: 18,
        color: "#344055",
        textTransform: 'uppercase',
        fontWeight: "500",
        marginTop: 50,
        marginBottom: 10,
        fontFamily: "JosefinSans_700Bold",
        lineHeight: 30
    },
    paraStyle: {
        fontSize: 18,
        color: "#7d7d7d",
        paddingBottom: "30"
    },
    aboutLayout: {
        backgroundColor: '#4c5dab',
        paddingHorizontal: 30,
        marginVertical: 30,
    },
    aboutSubHeader: {
        fontSize: 18,
        color: '#fff',
        textTransform: "uppercase",
        fontWeight: "500",
        marginVertical: 15,
        fontFamily: "JosefinSans_700Bold",
        alignSelf: "center"
    },
    aboutPara: {
        color: '#fff'
    },
    menuContainer: {
        width: "100%",
        flexDirection: 'row',
        justifyContent: 'space-evenly'
    },
    iconStyle: {
        width: "100%",
        height: 50,
        aspectRatio: 1
    }

})