import { StyleSheet } from "react-native";
import { paddingValue, ModalBackgroundColor, stylesList, BtnSelectedBgColor, BtnUnselectedBgColor, } from "../../utils/Styles";


const styles = StyleSheet.create({


    container: {
        ...stylesList.ModalContainer,
        flexDirection: 'row',
        alignItems: 'center',

    },


    cate_flatlist: {
        alignItems: 'center',
        justifyContent: 'space-between'
    },


    flatlistBtn: (item, selected) => ({

        ...stylesList.Btn('modal'),
        gap: 5,
        width: 150,
        height: 80,
        backgroundColor: item == selected ? BtnSelectedBgColor : BtnUnselectedBgColor,
        margin: 10,

    }),


    BtnTxT: {
        ...stylesList.font,
        fontSize: 15,
    }



})


export default styles