import { StyleSheet } from 'react-native';
import { stylesList, paddingValue } from '../../utils/Styles';

const styles = StyleSheet.create({


    container: {
        ...stylesList.Container,
        height: "100%",
    },


    AddJobContainer: {

        backgroundColor: '#7bb88b',
        padding: paddingValue,
        marginTop: 10,
        width: '90%',
    },


    AddJobText: {
        ...stylesList.font,
        color: "#fff",
        fontSize: 15,
        textAlign: 'center',
    },



    ItemContainer: {
        ...stylesList.ElementContainer,
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 0,
    },




    ItemLogoContainer: {
        flexDirection: 'row',
        flex: 1,
        gap: 10,
        alignItems: 'center',

    },



    scheduleInfoContainer: {
        flex: 1,
        gap: 10,

    },


    TitleText: {
        ...stylesList.font,
        fontSize: 17,
        fontWeight: 500,
    },




    scheduleContainer: {
        flexDirection: 'column',
        alignItems: 'flex-end',
        gap: 10,
    },



    scheduleText: {
        ...stylesList.font,
        fontSize: 13,
        color: '#8f8f8f',

    },



    amount: (type) => ({
        ...stylesList.font,
        fontSize: 18,
        fontWeight: 600,
        color: type == "Income" ? "green" : "red",

    }),



    amountContainer: {
        alignItems: 'flex-end',
    },



})


export default styles;