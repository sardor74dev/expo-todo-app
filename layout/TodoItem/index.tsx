import StyledText from "@/components/styled-text";
import { View, StyleSheet } from "react-native";
import StyledButton from "@/components/styled-button";
import StyledCheckbox from "@/components/checkbox";
import { Todo } from "@/types/todo";
import { useState } from "react";
import EditTodoModal from "../Modals/EditTodoModal";
import DeleteTodoModal from "../Modals/DeleteTodoModal";

type TodoItemProps = Todo & {
    onCheck: (id: Todo["id"]) => void;
    onDelete: (id: Todo["id"]) => void;
    onUpdateTitle: (id: Todo["id"], title: Todo["title"]) => void;
}

const TodoItem: React.FC<TodoItemProps> = ({ id, title, isCompleted, onCheck, onDelete, onUpdateTitle }) => {
    const [isEditModalOpen, setIsEditModalOpen] = useState(false);
    const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
   
    const onPressCheck = () => {
        onCheck(id);
    };

    const onPressDelete = () => {
        setIsDeleteModalOpen(true);
    }

    // const onPressDelete = () => {
    //     onDelete(id);
    // };

    return (
        <View style={styles.container}>
            <StyledCheckbox checked={isCompleted} onCheck={onPressCheck} />
            <StyledText
                style={[
                    { textDecorationLine: isCompleted ? 'line-through' : 'none' }
                ]}
            >{title}</StyledText>
            <View style={styles.controlsContainer}>
                <StyledButton icon="pencil" size="small" onPress={() => setIsEditModalOpen(true)} />
                <EditTodoModal isOpen={isEditModalOpen} onClose={() => setIsEditModalOpen(false)} onUpdate={(newTitle) => onUpdateTitle(id, newTitle)} title={title} />
                <StyledButton icon="trash" size="small" variant="secondary" onPress={onPressDelete} />
                <DeleteTodoModal isOpen={isDeleteModalOpen} onClose={() => setIsDeleteModalOpen(false)} onDelete={() => { onDelete(id); setIsDeleteModalOpen(false); }} />
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