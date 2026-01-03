import { useState } from 'react';
import { Colors } from '@/constants/theme';
import { Button, StyleSheet, Text, View } from 'react-native';
import Header from './layout/Header';
import { Todo } from '@/types/todo';
import TodoList from './layout/TodoList';
import TodoCreator from './layout/TodoCreator';

const defaultTodos: Todo[] = [
  {
    id: 1,
    title: 'Learn React Native',
    isCompleted: true,
  },
  {
    id: 2,
    title: 'Build a Todo App',
    isCompleted: false,
  },
  {
    id: 3,
    title: 'Master TypeScript',
    isCompleted: false
  }
];

export default function HomeScreen() {
    const [todos, setTodos] = useState<Todo[]>(defaultTodos);

    const addTodo = (title: Todo["title"]) => {
      setTodos([...todos, { id: todos.length + 1, title, isCompleted: false }])
    }

    const completedTodos = todos.filter((todo) => todo.isCompleted)
    
    return (
        <View style={styles.container}>
            <Header totalTodos={todos.length} completedTodos={completedTodos.length} />
            <TodoCreator onAddTodo={addTodo} />
            <TodoList todos={todos} />
        </View>
    ); 
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.dark.background,
    paddingLeft: 20,
    paddingBottom: 20,
  },
  text: {
    fontSize: 24,
    fontWeight: '600',
    color: Colors.dark.text,
  },
});