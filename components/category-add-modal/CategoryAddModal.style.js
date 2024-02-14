import { Dimensions, StyleSheet } from "react-native";


const styles = StyleSheet.create({

    container: {
        backgroundColor: "#8f8c8c",
        flex: 1,
        marginTop: Dimensions.get('window').height * 0.4,
        marginBottom: Dimensions.get('window').height * 0.4,
        margin: 30,
        borderRadius: 20,
        alignItems: 'center',
        justifyContent: 'center',

    },


    textinputbox: {
        backgroundColor: "white",
        borderRadius: 20,
        borderWidth: 1,
        height: 40,
        color: "gray",
        paddingLeft: 20,
        marginBottom: 30,
        width: 250,

    },


    btnContainer: {

        flexDirection: "row",
        gap: 20,


    },

    btn: {
        padding: 10,
        width: 100,
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 20,
        borderWidth: 2,
        borderColor: "white",


    },

    btnText: {

        color: "white",
        fontWeight: "bold",
        letterSpacing: 1,
        fontSize: 13,
    }



})
export default styles