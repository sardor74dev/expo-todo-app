import { Todo } from "@/types/todo";
import TodoItem from "../TodoItem";
import { FlatList, View, Text   } from "react-native";

type TodoListProps = {
    todos: Todo[];
    onCheckTodo: (id: Todo["id"]) => void;
    onDeleteTodo: (id: Todo["id"]) => void;
    onUpdateTodoTitle: (id: Todo["id"], title: Todo["title"]) => void;
}

const TodoList: React.FC<TodoListProps> = ({ 
    todos, 
    onCheckTodo, 
    onDeleteTodo, 
    onUpdateTodoTitle
}) => {
    return (
        <View>
            <FlatList
                data={todos}
                keyExtractor={(todo) => todo.id.toString()}
                renderItem={({ item }) => (
                    <TodoItem
                        id={item.id}
                        title={item.title} 
                        isCompleted={item.isCompleted} 
                        onCheck={onCheckTodo} 
                        onDelete={onDeleteTodo} 
                        onUpdateTitle={onUpdateTodoTitle}
                    />
                )}
            />
        </View>
    )
}

export default TodoList;