import { StyleSheet } from "react-native";
import { IconColor, stylesList, BtnSelectedBgColor, BtnSelectedBgColor2, BtnUnselectedBgColor } from "../../utils/Styles";




const styles = StyleSheet.create({


    container: {
        ...stylesList.ModalContainer,
        flexDirection: 'column',
        justifyContent: 'center',
    },


    DatePickerContainer: {
        ...stylesList.ElementContainer,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
    },


    TypeContainer: {
        ...stylesList.ElementContainer,
        flexDirection: 'row',
        justifyContent: 'space-between',
    },


    TypeBtn: (item, selected) => ({
        backgroundColor: item == selected ? BtnSelectedBgColor : BtnUnselectedBgColor,
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
        ...stylesList.ElementContainer,
        alignItems: 'center',
    },



    cate_btn: (item, selected) => ({

        ...stylesList.Btn('modal'),
        backgroundColor: item == selected ? BtnSelectedBgColor2 : BtnUnselectedBgColor,
        width: 130,
        gap: 10,
    }),



    cate_text: {
        ...stylesList.font,
        fontSize: 16,
        color: IconColor,
    },


    TextInputContainer: {
        ...stylesList.ElementContainer,
    },



    note_input: {

        color: "gray",
        padding: 10,

    },



    btn_Container: {

        margin: 20,
        flexDirection: 'row',
        justifyContent: 'center',
        gap: 30,
    },



    InputBtn: {
        ...stylesList.Btn('modal'),
        width: 100,

    },


    InputText: {
        color: "#FFF",
        fontSize: 15,
        fontWeight: 'bold',
        letterSpacing: 0.5,
    }
});


export default styles;