import { Colors, errorColor } from "@/constants/theme"
import { TextInput, TextInputProps, StyleSheet } from "react-native"

type StyledTextInputProps = TextInputProps & {
    isError?: boolean;
}

const StyledTextInput: React.FC<StyledTextInputProps> = ({ isError, ...props }) => {
    return (
        <TextInput 
            style={[styles.input, props.style, isError ? styles.error : null]} 
            {...props} 
            placeholderTextColor={Colors.dark.text} />
    )
}

const styles = StyleSheet.create({
    input: {
        paddingHorizontal: 20,
        backgroundColor: "#333",
        color: "#fff",
        borderRadius: 10,
        borderWidth: 1,
        borderColor: "#555",
        flex: 1,
    },
    error: {
        borderColor: errorColor,
    }
})

export default StyledTextInput;