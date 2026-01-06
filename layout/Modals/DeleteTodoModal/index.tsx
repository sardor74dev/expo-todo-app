import { Todo } from "@/types/todo";
import { View, StyleSheet } from "react-native";
import StyledText from "@/components/styled-text";
import StyledModal from "@/components/styled-modal";
import StyledButton from "@/components/styled-button";

type DeleteTodoModalProps = {
    isOpen: boolean;
    onClose: () => void;
    onDelete: () => void;
}

const DeleteTodoModal: React.FC<DeleteTodoModalProps> = ({ isOpen, onClose, onDelete }) => {
    return (
        <StyledModal isOpen={isOpen} onClose={onClose}>
            <View style={styles.modalContentContainer}>
                <StyledText>Delete todo</StyledText>
            </View>
            <View style={styles.buttonsContainer}>
                <StyledButton label="Cancel" variant="secondary" onPress={onClose}></StyledButton>
                <StyledButton label="Delete" onPress={onDelete}></StyledButton>
            </View>
        </StyledModal>
    )
}

const styles = StyleSheet.create({
    modalContentContainer: {
        gap: 20,
    },
    buttonsContainer: {
        flexDirection: 'row',
        justifyContent: 'flex-end',
        gap: 15,
    }
})

export default DeleteTodoModal;