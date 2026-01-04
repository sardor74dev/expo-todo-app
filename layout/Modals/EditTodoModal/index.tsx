import StyledTextInput from "@/components/styled-input";
import StyledModal from "@/components/styled-modal";
import StyledText from "@/components/styled-text";
import StyledButton from "@/components/styled-button";
import { Todo } from "@/types/todo";
import { useEffect, useState } from "react";
import { View, StyleSheet } from "react-native";

type EditTodoModalProps = {
    isOpen: boolean;
    onClose: () => void;
    onUpdate: (title: string) => void;
    title: Todo["title"];
}

const EditTodoModal: React.FC<EditTodoModalProps> = ({ isOpen, onClose, onUpdate, title }) => {
    const [updatedTitle, setUpdateTitle] = useState(title);
    const [inputError, setInputError] = useState(false);

    const onPressSave = () => {
        if (!updatedTitle) {
            setInputError(true);
            return;
        }
        onUpdate(updatedTitle);
        onClose();
    }

    useEffect(() => {
        if (inputError && updatedTitle) {
            setInputError(false);
        }
    }, [updatedTitle]);

    return (
        <StyledModal isOpen={isOpen} onClose={onClose}>
            <View style={styles.modalContentContainer}>
                <StyledText>Edit todo</StyledText>
                <View style={styles.inputContainer}>
                    <StyledTextInput 
                        value={updatedTitle} 
                        onChangeText={setUpdateTitle} 
                        placeholder="Edit todo..."
                        isError={inputError}
                    />
                </View>
                <View style={styles.buttonsContainer}>
                    <StyledButton label="Cancel" onPress={onClose}></StyledButton>
                    <StyledButton label="Update" onPress={(onPressSave)} disabled={inputError}></StyledButton>
                </View>
            </View>
        </StyledModal>
    )
}

const styles = StyleSheet.create({
    modalContentContainer: {
        gap: 20,
    },
    inputContainer: {
        minHeight: 60,
    },
    buttonsContainer: {
        flexDirection: 'row',
        justifyContent: 'flex-end',
        gap: 15,
    }
})

export default EditTodoModal;