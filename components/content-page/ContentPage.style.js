import { StyleSheet } from "react-native";
import { ContentPageBackgroundColor, stylesList } from '../../utils/Styles'



const styles = StyleSheet.create({


    container: {
        backgroundColor: ContentPageBackgroundColor,
    },



    flatListContainer: {
        gap: 10,
        margin: 20,
    },


    Btn: {

        ...stylesList.Btn('non'),
        backgroundColor: '#FFF',

    },


    text: {
        ...stylesList.font,
        fontSize: 15,
        color: 'gray',
        textAlign: 'center',
    }




});

export default styles;