import React from 'react'
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'

export default function ListItem({item, onDelete, style}) {
    const handlePress = () => {
        onDelete(item.id)
    }
    
    return (
        <View style={[styles.container, style]}>
            <View style={styles.textArea}>
                <Text adjustsFontSizeToFit style={styles.text}>{item.value}</Text>
            </View>
            <View style={styles.buttonArea}>
                <TouchableOpacity style={styles.button} onPress={handlePress}>
                    <Text style={styles.buttonText}>X</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        borderWidth: 1,
        borderColor: 'black',
        paddingVertical: 15,
        flexDirection: 'row',
        flex: 1,
        width: '100%',
        borderRadius: 5
    },
    text: {
        marginLeft: 5,
        fontSize: 16,
    },
    textArea: {
        flex: 8,
        justifyContent: 'center',
        alignItems: 'center'
    },
    buttonArea: {
        flex: 2, 
        justifyContent: 'center',
        alignItems: 'center'
    },
    button: {
        borderRadius: 20,
        backgroundColor: 'red',
        paddingVertical: 5,
        paddingHorizontal: 15
    },
    buttonText: {
        color: 'white',
        fontSize: 20
    }
})