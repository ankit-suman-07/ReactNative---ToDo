import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, View, Button, TextInput, Modal, Alert, FlatList, SafeAreaView, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { styles } from "./App.style";



export default function App() {
  const [items, setItems] = useState([]);
  const [text, setText] = useState("");
  const [isModalVisible, setIsModalVisible] = useState(false);

  const addNewTodo = () => {
    let newTodo = {
      id: items.length,
      title: text,
      completed: false
    }
    if (text !== "") {
      setItems([...items, newTodo]);
    }

    setText("");
    setIsModalVisible(false);
  }

  const markItemCompleted = (item) => {
    const itemIndex = items.findIndex(currItem => currItem.id === item.id)

    if (itemIndex !== -1) {
      const updatedItems = [...items];
      updatedItems[itemIndex] = { ...items[itemIndex], completed: true };
      setItems(updatedItems);
    }
  }

  const TodoItem = (props) => (
    <TouchableOpacity style={styles.item} onPress={() => markItemCompleted(props.item)} >
      <Text style={props.item.completed ? styles.itemTextCompleted : styles.itemText} >{props.item.title}</Text>
    </TouchableOpacity>
  )

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.banner} >To-Do App</Text>
      <TouchableOpacity style={styles.icon} title='Add an Item' onPress={() => setIsModalVisible(true)}>
        <Ionicons
          name="add-circle-outline"
          size={40}
          color="black"
          marginTop={10}
        />
      </TouchableOpacity>
      <Modal visible={isModalVisible}
        transparent={true}
        onRequestClose={() => setIsModalVisible(!isModalVisible)}
      >
        <View style={styles.centeredView} >
          <View style={styles.modalView} >
            <TextInput
              style={styles.input}
              onChangeText={setText}
              value={text}
            />
            <Button title='Add TODO' onPress={addNewTodo} />
          </View>
        </View>
      </Modal>
      <StatusBar style="auto" />

      <FlatList
        style={styles.list}
        data={items}
        renderItem={({ item }) => <TodoItem item={item} />}
        keyExtractor={item => item.id}
      />
    </SafeAreaView>
  );
}

