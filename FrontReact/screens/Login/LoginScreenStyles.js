import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        paddingHorizontal: 20,
    },
    input: {
        width: '100%',
        height: 40,
        marginBottom: 10,
        paddingHorizontal: 10,
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 5,
    },
    registerButton: {
        marginTop: 20,
    },
    registerButtonText: {
        fontSize: 16,
        color: 'blue',
        textDecorationLine: 'underline',
    },
});
