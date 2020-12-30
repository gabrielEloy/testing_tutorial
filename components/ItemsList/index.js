import React from 'react'
import ListItem from './ListItem';
import { View, FlatList, StyleSheet } from 'react-native'

export default function ItemsList({data, onDelete}) {
    const renderFunction = ({item}) => (
        <ListItem 
            style={styles.listItemStyles} 
            item={item} 
            onDelete={onDelete}
        />
    )
    
    return (
        <View style={styles.container}>
            <FlatList 
                data={data}
                renderItem={renderFunction}
                keyExtractor={item => String(item.id)}
            />
        </View>
    )
}


const styles = StyleSheet.create({
    container: {
        width: '100%'
    },
    listItemStyles: {
        marginVertical: 3
    }
})