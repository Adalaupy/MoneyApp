import { Dimensions, StyleSheet } from "react-native";



const BackgroundColor = "#fcfbeb"
const ElementBackgroundColor = "#fff"
const ContentPageBackgroundColor = "#efe1f7"
const ModalBackgroundColor = "#f0b199"


const IconColor = "#5c5458"
const BtnSelectedBgColor = "#faa0cd"
const BtnSelectedBgColor2 = "#64c9f5"
const BtnUnselectedBgColor = "#FFF"
const BorderColor = "#898a8c"
const BorderColor2 = "#f5f0fc"


const paddingValue = 10
const WinHeight = Dimensions.get('window').height
const WinWidth = Dimensions.get('window').width




const shadow = {
    shadowColor: 'gray',
    shadowOffset: { width: 3, height: 3 },
    shadowOpacity: 0.8,
    shadowRadius: 3,
}




const stylesList = StyleSheet.create({

    font: {
        fontFamily: 'Lato_700Bold',
        letterSpacing: 0.5,
        color: '#292928',
    },


    Container: {
        height: WinHeight,
        alignItems: 'center',
        padding: paddingValue,
        backgroundColor: BackgroundColor,
    },


    ModalContainer: {
        backgroundColor: ModalBackgroundColor,
        flex: 1,
        padding: paddingValue,
    },


    ElementContainer: {
        width: '90%',
        borderWidth: 1,
        borderColor: BorderColor,
        padding: paddingValue,
        margin: 20,
        backgroundColor: ElementBackgroundColor,
        borderRadius: 10,
    },


    Btn: (type) => ({
        borderWidth: 1,
        borderColor: type == 'modal' ? BorderColor2 : BorderColor,
        borderRadius: 10,
        padding: paddingValue,
        alignItems: 'center',
        justifyContent: 'center',

        ...shadow,

    })



})




export {
    shadow, IconColor, ContentPageBackgroundColor, BackgroundColor, BtnSelectedBgColor2, BorderColor, ModalBackgroundColor, BtnSelectedBgColor, BtnUnselectedBgColor, WinHeight, WinWidth, paddingValue, stylesList
}