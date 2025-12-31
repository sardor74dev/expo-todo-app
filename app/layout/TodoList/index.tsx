import { Todo } from "@/types/todo";
import TodoItem from "../TodoItem";
import { FlatList, View, Text   } from "react-native";

type TodoListProps = {
    todos: Todo[];
}

const TodoList: React.FC<TodoListProps> = ({ todos }) => {
    return (
        <View>
            <FlatList
                data={todos}
                keyExtractor={(todo) => todo.id.toString()}
                renderItem={({ item }) => <TodoItem title={item.title} isCompleted={item.isCompleted} />}
            />
        </View>
    )
}

export default TodoList;