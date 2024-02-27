import { StyleSheet } from "react-native";
import { WinHeight, stylesList } from "../../utils/Styles";


const styles = StyleSheet.create({


    container: {
        ...stylesList.Container,
    },


    cate_container: {

        ...stylesList.ElementContainer,

        height: WinHeight / 2 - 100,

    },


    CateTxt: {
        ...stylesList.font,
        fontSize: 22,
        textAlign: 'center',
        marginBottom: 15,
    },


    flatlist: {
        gap: 20,
        alignItems: 'center',
    },



    iconContainer: {
        ...stylesList.Btn('non'),
        width: 80,
        height: 80,
        margin: 12,
    },


    currIconBtn: (isActive) => ({

        backgroundColor: isActive ? "rgb(213, 245, 211)" : "",
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 2,
        gap: 10,
        padding: 10,
    })


});

export default styles;