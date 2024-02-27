import { StyleSheet } from "react-native";
import { stylesList, BtnSelectedBgColor, BtnUnselectedBgColor, BtnSelectedBgColor2 } from "../../utils/Styles";


const PaddingValue = 20
const MarginValue = 10
const BorderRadiusValue = 10




const styles = StyleSheet.create({

    container: {
        ...stylesList.ModalContainer,
        padding: PaddingValue,
    },



    ItemNameContainer: {
        ...stylesList.ElementContainer,
    },



    ItemNameText: {
        ...stylesList.font,
        color: '#aba9aa',
    },



    TypeContainer: {
        ...stylesList.ElementContainer,
        flexDirection: 'row',
        justifyContent: 'space-between',
    },


    TypeBtn: (type, selectedType) => ({

        ...stylesList.Btn('modal'),
        backgroundColor: selectedType == type ? BtnSelectedBgColor : BtnUnselectedBgColor,
        width: 100,

    }),



    TypeText: (type, selectedType) => ({
        ...stylesList.font,
        fontSize: 15,
        color: selectedType == type ? "#fff" : "#000",
    }),



    CateContainer: {

        ...stylesList.ElementContainer,
        alignItems: 'center',

    },



    flatlistBtn: (item, selected) => ({

        ...stylesList.Btn('modal'),
        backgroundColor: item == selected ? BtnSelectedBgColor2 : BtnUnselectedBgColor,
        width: 150,

    }),


    ScheduleContainer: {
        ...stylesList.ElementContainer,
        flexDirection: 'column',
        justifyContent: 'space-between',
        alignItems: 'center',
        zIndex: 1,
    },


    OptionsContainer: {
        marginTop: MarginValue,
    },


    DateContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        width: '80%',
        margin: MarginValue,
        borderRadius: BorderRadiusValue,
        borderWidth: 1,
        padding: 10,
    },


    YearInput: {

        padding: 10,

    },


    NoteContainer: {
        ...stylesList.ElementContainer,
    },


    BtnContainer: {


        flexDirection: 'row',
        justifyContent: 'space-between',
        margin: MarginValue,
        padding: PaddingValue,

    },


    LeftBtn: {
        width: 100,
        ...stylesList.Btn('modal'),
    },


    LeftTxt: {
        color: "#fff",
        fontSize: 17,
        fontWeight: 'bold',

    },



})

export default styles