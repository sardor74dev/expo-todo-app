import StyledButton from "@/components/styled-button";
import StyledTextInput from "@/components/styled-input";
import { Todo } from "@/types/todo"
import { useEffect, useState } from "react";
import { View, StyleSheet, Keyboard } from "react-native";

type TodoCreatorProps = {
    onAddTodo: (title: Todo["title"]) => void;
}

const TodoCreator: React.FC<TodoCreatorProps> = ({ onAddTodo }) => {
    const [text, setText] = useState("");
    const [inputError, setInputError] = useState(false);

    const onPressAdd = () => {
        if (!text) {
            setInputError(true);
            return;
        }
        Keyboard.dismiss();
        onAddTodo(text);
        setText("");
    }

    useEffect(() => {
        if (inputError && text) {
            setInputError(false);
        }
    }, [text]);

    return (
        <View style={styles.container}>
            <StyledTextInput 
                placeholder="Add a task..."
                value={text}
                onChangeText={setText}
                isError={inputError}
            />
            <StyledButton label="+" onPress={onPressAdd} disabled={inputError} />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        gap: 15
    }
})

export default TodoCreator;