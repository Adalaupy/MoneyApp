import { Dimensions, StyleSheet } from "react-native";

const styles = StyleSheet.create({


    container: {
        margin: 5,

        alignItems: 'center',
    },


    cate_container: {
        backgroundColor: 'white',
        marginTop: 10,
        marginBottom: 0,
        width: '95%',
        borderRadius: 10,
        paddingTop: 10,
        paddingBottom: 10,
        height: Dimensions.get('window').height / 2 - 70,


    },

    CateTxt: {
        fontSize: 25,
        fontWeight: 'bold',
        color: '#3a3b3a',
        textAlign: 'center',
        marginBottom: 15,
    },


    flatlist: {
        gap: 10,
        alignItems: 'center',

    },

    iconContainer: {
        padding: 10,
        borderRadius: 40,

        marginLeft: 5,
        marginRight: 5,

        justifyContent: 'center',
        alignItems: 'center',
        width: 80,
        backgroundColor: "rgb(235, 232, 237)"
    },


    currIconBtn: (isActive) => ({
        backgroundColor: isActive ? "rgb(213, 245, 211)" : "white",
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 2,
        gap: 10,
        padding: 10,
    })


});

export default styles;