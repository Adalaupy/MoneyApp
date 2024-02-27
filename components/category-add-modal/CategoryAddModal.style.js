import { StyleSheet } from "react-native";
import { WinHeight, stylesList } from "../../utils/Styles";

const styles = StyleSheet.create({

    container: {

        ...stylesList.ModalContainer,

        marginTop: WinHeight * 0.4,
        marginBottom: WinHeight * 0.4,
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
        gap: 30,
    },



    btn: {
        ...stylesList.Btn('modal'),
        width: 100,
    },



    btnText: {
        ...stylesList.font,
        color: "white",
        fontWeight: "bold",
        fontSize: 18,
    }



})
export default styles