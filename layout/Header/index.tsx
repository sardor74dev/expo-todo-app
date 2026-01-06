import { StyleSheet, Text, View } from "react-native";
import StyledText from "@/components/styled-text";
import { SafeAreaView } from "react-native-safe-area-context";
import { formatDate } from "@/helpers/date";

type HeaderProps = {
    totalTodos: number;
    completedTodos: number;
}

const Header: React.FC<HeaderProps> = ({ totalTodos, completedTodos }) => {
    const date = formatDate(new Date());
    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.headerMainContent}>
                <StyledText>Todo app</StyledText>
                <StyledText>{date}</StyledText>
            </View>
            <StyledText>Completed: {completedTodos}/{totalTodos}</StyledText>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        paddingHorizontal: 20,
        paddingVertical: 12,
        backgroundColor: '#151718',
    },
    headerMainContent: {
        alignItems: 'center',
        justifyContent: 'center',
        gap: 4,
        marginBottom: 20,
    }
})

export default Header;