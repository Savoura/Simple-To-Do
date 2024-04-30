import React, { useState, useEffect, useContext } from 'react';
import { View, Text, Button, TextInput, FlatList, StyleSheet } from 'react-native';
import axios from 'axios';
import UserContext from '../../Context/UserContext.js';
import styles from './HomeScreenStyles'; 

const HomePage = () => {
  const { userEmail } = useContext(UserContext);
  const [todos, setTodos] = useState([]);
  const [newTodoTitle, setNewTodoTitle] = useState('');
  const [newTodoDescription, setNewTodoDescription] = useState('');

  useEffect(() => {
    fetchTodos();
  }, []);

  const fetchTodos = async () => {
    try {
      const response = await axios.get(`http://localhost:3000/todos/${userEmail}`);
      setTodos(response.data);
    } catch (error) {
      console.error('Failed to fetch todos:', error);
    }
  };

  const addTodo = async () => {
    try {
      const response = await axios.post('http://localhost:3000/todos', {
        email: userEmail,
        title: newTodoTitle,
        description: newTodoDescription,
      });
      setTodos([...todos, response.data]);
      setNewTodoTitle('');
      setNewTodoDescription('');
    } catch (error) {
      console.error('Failed to add todo item:', error);
    }
  };

  const renderItem = ({ item }) => (
    <View style={styles.todoItem}>
      <Text style={styles.todoTitle}>{item.title}</Text>
      <Text style={styles.todoDescription}>{item.description}</Text>
      <Text style={styles.todoCreatedAt}>{item.createdAt}</Text>
    </View>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Todo List</Text>
      <FlatList
        data={todos}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        contentContainerStyle={styles.todoList}
      />
      <View style={styles.addTodoContainer}>
        <TextInput
          style={styles.input}
          placeholder="Title"
          value={newTodoTitle}
          onChangeText={setNewTodoTitle}
        />
        <TextInput
          style={styles.input}
          placeholder="Description"
          value={newTodoDescription}
          onChangeText={setNewTodoDescription}
        />
        <Button title="Add Todo" onPress={addTodo} />
      </View>
    </View>
  );
};

export default HomePage;
