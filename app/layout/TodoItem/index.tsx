import StyledText from "@/components/styled-text";
import { View, StyleSheet } from "react-native";
import StyledButton from "@/components/styled-button";
import StyledCheckbox from "@/components/checkbox";
import { Todo } from "@/types/todo";

type TodoItemProps = Todo & {
    onCheck: (id: Todo["id"]) => void;
    onDelete: (id: Todo["id"]) => void;
    onUpdateTitle: (id: Todo["id"], title: Todo["title"]) => void;
}

const TodoItem: React.FC<TodoItemProps> = ({ id, title, isCompleted, onCheck, onDelete, onUpdateTitle }) => {
    const onPressCheck = () => {
        onCheck(id);
    };

    const onPressDelete = () => {
        onDelete(id);
    };

    return (
        <View style={styles.container}>
            <StyledCheckbox checked={isCompleted} onCheck={onPressCheck} />
            <StyledText
                style={[
                    { textDecorationLine: isCompleted ? 'line-through' : 'none' }
                ]}
            >{title}</StyledText>
            <View style={styles.controlsContainer}>
                <StyledButton icon="pencil" size="small" />
                <StyledButton icon="trash" size="small" variant="secondary" onPress={onPressDelete} />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignContent: 'center',
        justifyContent: 'space-between',
        padding: 15,
        marginVertical: 8,
        backgroundColor: '#727272ff'
    },
    controlsContainer: {
        flexDirection: 'row',
        gap: 10,
    }
})

export default TodoItem;