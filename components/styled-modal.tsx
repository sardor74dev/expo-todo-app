import { Modal, TouchableWithoutFeedback, View, StyleSheet } from "react-native";

type StyledModalProps = {
    isOpen: boolean;
    onClose: () => void;
    children: React.ReactNode;
}

const StyledModal: React.FC<StyledModalProps> = ({ isOpen, onClose, children }) => {
    return (
        <Modal visible={isOpen} onRequestClose={onClose} animationType="fade" transparent={true}>
            <TouchableWithoutFeedback onPress={onClose}>
                <View style={styles.modalBackgroundContainer}>
                    <TouchableWithoutFeedback onPress={(e) => e.stopPropagation()}>
                        <View style={styles.contentContainer}>
                            {children}
                        </View>
                    </TouchableWithoutFeedback>
                </View>
            </TouchableWithoutFeedback>
        </Modal>
    )
}

const styles = StyleSheet.create({
    modalBackgroundContainer: {
        flex: 1,
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        justifyContent: 'center',
        alignItems: 'center',
    },
    contentContainer: {
        width: '80%',
        backgroundColor: '#727272ff',
        padding: 20,
        borderRadius: 10,
    }
})

export default StyledModal;