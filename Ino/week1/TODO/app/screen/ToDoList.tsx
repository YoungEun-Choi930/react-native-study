import React, {useState} from 'react';
import {View, FlatList, StyleSheet, TextInput, Button} from 'react-native';
import {useToDoStore} from '../stores/ToDoStore';
import ToDoItem from '../component/ToDoItem';
import {Text} from 'react-native-svg';

export function ListScreen() {
  const {toDoList} = useToDoStore();

  return (
    <View style={styles.container}>
      <FlatList
        data={toDoList}
        keyExtractor={item => item.id}
        renderItem={({item}) => (
          <ToDoItem id={item.id} title={item.title} status={item.status} />
        )}
      />
    </View>
  );
}

export function AddScreen() {
  const [title, setTitle] = useState<string>(''); // 새로운 ToDo의 제목 상태
  const {addToDo} = useToDoStore(); // Zustand를 사용하여 ToDo를 추가하는 함수 가져오기

  // 새로운 ToDo를 추가하는 함수
  const handleAddToDo = () => {
    if (title.trim() !== '') {
      addToDo(title); // Zustand를 사용하여 ToDo를 추가
      setTitle(''); // 입력 필드 비우기
    }
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="할일을 입력하세요"
        value={title}
        onChangeText={setTitle}
      />
      <Button title="추가" onPress={handleAddToDo} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  input: {
    marginVertical: 5,
    marginHorizontal: 25,
    padding: 10,
    borderWidth: 1,
    backgroundColor: '#ffffff',
    borderColor: '#ffffff',
    borderRadius: 20,
  },
});
