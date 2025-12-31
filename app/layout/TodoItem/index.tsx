import StyledText from "@/components/styled-text";
import { View, StyleSheet } from "react-native";
import StyledButton from "@/components/styled-button";

type TodoItemProps = {
    title: string;
    isCompleted: boolean;
}

const TodoItem: React.FC<TodoItemProps> = ({ title, isCompleted }) => {
    return (
        <View style={styles.container}>
            <StyledText
                style={[
                    { textDecorationLine: isCompleted ? 'line-through' : 'none' }
                ]}
            >{title}</StyledText>
            <View style={styles.controlsContainer}>
                <StyledButton icon="pencil" size="small" />
                <StyledButton icon="trash" size="small" variant="secondary" />
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