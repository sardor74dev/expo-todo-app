import { TouchableOpacity, TouchableOpacityProps } from "react-native";
import StyledText from "./styled-text";
import { StyleSheet } from "react-native";
import { Ionicons } from '@expo/vector-icons';
import { Colors, errorColor } from "@/constants/theme";

type StyledButtonProps = TouchableOpacityProps & {
    label?: string;
    icon?: React.ComponentProps<typeof Ionicons>['name'];
    size?: 'small' | 'default' | 'large';
    variant?: 'primary' | 'secondary';
}

const StyledButton: React.FC<StyledButtonProps> = ({ 
    label, 
    icon, 
    size,
    variant = 'primary',
    ...props 
}) => {
    return (
        <TouchableOpacity style={[styles.base, 
            size === 'small' ? styles.small : null,
            variant === 'secondary' ? styles.secondary : null
        ]} {...props}>
            {label && <StyledText>{label}</StyledText>}
            {icon && <Ionicons name={icon} size={14} color={Colors.dark.iconBg} />}
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    base: {
        backgroundColor: '#007bff',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row',
        paddingVertical: 12,
        paddingHorizontal: 20,
        borderRadius: 10,
        borderWidth: 1,
        borderColor: '#007bff',},
    small: {
        paddingVertical: 10,
        paddingHorizontal: 10
    },
    secondary: {
        backgroundColor: errorColor,
        borderColor: errorColor,
    }
})

export default StyledButton;