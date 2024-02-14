import { Dimensions } from "react-native";
import { StyleSheet } from "react-native";


const allBorderWidth = Dimensions.get('window').width * 0.9


const styles = StyleSheet.create({


    container: {

        flex: 1,
        margin: 10,
        alignItems: 'center',
        backgroundColor: "#8f8c8c",
        padding: 20,
        borderRadius: 20,

    },

    TypeContainer: {
        marginTop: 20,
        flexDirection: 'row',
        justifyContent: 'space-between',
        gap: 20,
        padding: 15,
        borderWidth: 1,
        borderColor: "#FFF",
        borderRadius: 20,
        width: allBorderWidth,
    },


    TypeBtn: (item, selected) => ({
        backgroundColor: item == selected ? "#fc0ab8" : "#FFF",
        padding: 5,
        paddingLeft: 30,
        paddingRight: 30,
        borderRadius: 10,
    }),


    text: (item, selected) => ({
        color: item == selected ? "#FFF" : "gray",
        fontSize: 20,
        fontWeight: 'bold',
        letterSpacing: 0.5,
    }),



    cate_flatlist: {
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 20,
        marginBottom: 20,
        gap: 10,
        paddingTop: 20,
        paddingBottom: 20,
        borderWidth: 1,
        borderColor: "#FFF",
        borderRadius: 20,
        width: allBorderWidth,
    },

    cate_btn: (item, selected) => ({
        marginLeft: 15,
        marginRight: 15,
        flexDirection: 'column',
        alignItems: 'center',
        gap: 5,
        backgroundColor: item == selected ? "#64c9f5" : "#FFF",
        borderRadius: 10,
        width: 130,
        padding: 5,
    }),



    cate_text: {
        fontSize: 15,
    },




    TextInputContainer: {
        marginTop: 20,
        borderWidth: 1,
        borderColor: "#FFF",
        borderRadius: 20,
        width: allBorderWidth,
        paddingTop: 20,
        paddingBottom: 20,
        paddingLeft: 10,
        paddingRight: 10,
    },

    note_input: {

        backgroundColor: "#FFF",
        borderRadius: 10,
        color: "gray",
        padding: 10,
        height: 50,
    },



    btn_Container: {

        flexDirection: 'row',
        borderRadius: 10,
        gap: 50,
        marginBottom: 20,
        marginTop: 50,
    },



    InputBtn: {
        borderColor: "#FFF",
        borderWidth: 1,
        padding: 10,
        borderRadius: 30,
        width: 100,
        alignItems: 'center',
    },


    InputText: {
        color: "#FFF",
        fontSize: 15,
        fontWeight: 'bold',
        letterSpacing: 0.5,
    }
});


export default styles;