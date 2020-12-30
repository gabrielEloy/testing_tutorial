import React, { useState } from 'react'
import { View, StyleSheet} from 'react-native'
import AddList from './components/AddList';
import ItemsList from './components/ItemsList'
import Error from './components/ErrorComponent'

export default function App() {
  const [listInput, setListInput] = useState('')
  const [list, setList] = useState([]);
  const [error, setError] = useState(false);
  
  const handleInput = text => {
    setListInput(text)
  }

  const handleSetList = () => {
    if(!listInput){
      setError(true);
      return;
    }

    const newInput = {
      id: Math.random() * 1000,
      value: listInput
    };
    
    setList([...list, newInput])
    setListInput('')
    setError(false);
  }

  const handleDelete = id => {
    setList(list.filter(item => item.id !== id))
  }

  return (
    <View style={styles.container}>
      <View style={styles.inputArea}>
        <AddList onPressAdd={handleSetList} value={listInput} onChange={handleInput}/>
      </View>
      <View style={styles.listArea}>
        <ItemsList data={list} onDelete={handleDelete}/>
        <Error visible={error}>Please insert a valid text</Error>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center'
  },
  inputArea: {
    flex: 2,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  listArea: {
    flex: 8,
    paddingTop: 20,
    alignItems: 'center',
    width: '80%',
    marginVertical: 15
  },
})