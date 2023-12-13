import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button, TextInput, Alert, FlatList, SafeAreaView } from 'react-native';

const DATA = [
  {
    id: '1',
    title: 'Code'
  },
  {
    id: '2',
    title: 'Project'
  },
  {
    id: '3',
    title: 'Journal'
  }
]

const TodoItem = (props) => (
  <View style={styles.item} >
    <Text style={styles.itemText} >{props.item.title}</Text>
  </View>
)

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <Text>Demo Text</Text>
      <StatusBar style="auto" />
      <TextInput style={styles.input} />
      <Button title='Start' onPress={() => Alert.alert('Hello World')} />
      <FlatList
        data={DATA}
        renderItem={({ item }) => <TodoItem item={item} />}
        keyExtractor={item => item.id}
      />
      <Text>New Demo Text</Text>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    top: 100,
    flex: 1,
    backgroundColor: '#ffff',
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 2,
    borderColor: 'gray',
  },
  input: {
    height: 40,
    width: 100,
    borderWidth: 2,
    padding: 10,
    margin: 5,
  },
  list: {
    alignSelf: 'stretch'
  },
  item: {
    backgroundColor: 'cyan',
    padding: 10,
    margin: 10,

  },
  itemText: {
    color: '#ffff'
  }
});
