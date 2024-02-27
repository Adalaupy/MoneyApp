import { StyleSheet } from "react-native";
import { stylesList } from "../../utils/Styles";


const styles = StyleSheet.create({


    container: {

        ...stylesList.Container,

    },


    datepickContainer: {

        ...stylesList.ElementContainer,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    },


    datepickText: {
        ...stylesList.font,
        fontSize: 15,
        fontWeight: 'bold',

    },


});

export default styles;