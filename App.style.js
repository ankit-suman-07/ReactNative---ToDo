import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
        margin: 10,
        marginTop: 40,
        flex: 1,
        backgroundColor: '#DDE0BD',
        alignItems: 'center',
        justifyContent: 'center',
    },
    input: {
        height: 40,
        width: 200,
        borderWidth: 2,
        padding: 10,
        margin: 5,
    },
    list: {
        alignSelf: 'stretch'
    },
    item: {
        backgroundColor: 'cyan',
        padding: 10,
        margin: 10,

    },
    itemText: {
        color: '#ffff'
    },
    itemTextCompleted: {
        color: '#ffff',
        textDecorationLine: 'line-through'
    },
    centeredView: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 22,
    },
    modalView: {
        margin: 20,
        backgroundColor: 'white',
        borderRadius: 20,
        padding: 35,
        alignItems: 'center',
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5,
    },
    banner: {
        width: '100%',
        height: 30,
        fontSize: 25,
        textAlign: 'center',
        marginTop: 10,
    }

});
