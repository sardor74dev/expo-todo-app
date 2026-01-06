import { Colors } from '@/constants/theme';
import { Todo } from '@/types/todo';
import useTodo from '@/hooks/use-todo';
import { StyleSheet, View } from 'react-native';
import Header from '../layout/Header';
import TodoCreator from '../layout/TodoCreator';
import TodoList from '../layout/TodoList';

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
    const {
      todos,
      completedTodos,
      onAddTodo,
      onDeleteTodo,
      onCheckTodo,
      onUpdateTodoTitle
    } = useTodo();
    
    return (
        <View style={styles.container}>
            <Header totalTodos={todos.length} completedTodos={completedTodos.length} />
            <TodoCreator onAddTodo={onAddTodo} />
            <TodoList 
              todos={todos} 
              onCheckTodo={onCheckTodo} 
              onDeleteTodo={onDeleteTodo}
              onUpdateTodoTitle={onUpdateTodoTitle}
            />
        </View>
    ); 
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.dark.background,
    paddingHorizontal: 16,
    paddingTop: 20,
    gap: 10
  },
  text: {
    fontSize: 24,
    fontWeight: '600',
    color: Colors.dark.text,
  },
});