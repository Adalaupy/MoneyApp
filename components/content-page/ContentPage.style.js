import { StyleSheet } from "react-native";




const styles = StyleSheet.create({


    container: {
        marginTop: 20,
        marginBottom: 20,
        marginLeft: 10,
        marginRight: 10,
    },



    flatListContainer: {
        alignItems: 'stretch',
        justifyContent: 'center',
        gap: 7,
    },


    textline: {
        flex: 1,
        padding: 10,
        marginLeft: 20,
        marginRight: 20,
        marginBottom: 5,
        backgroundColor: '#FFF',
        borderRadius: 10,
        shadowColor: 'gray',
        shadowOffset: { width: 3, height: 3 },
        shadowOpacity: 0.7,
        shadowRadius: 3,

    },


    text: {
        fontSize: 15,
        color: 'gray',
        textAlign: 'center',
        fontWeight: 'bold',
        letterSpacing: 1,
    }




});

export default styles;