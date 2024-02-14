import { StyleSheet } from 'react-native';


const styles = StyleSheet.create({

    ItemContainer: {
        flexDirection: 'row',
        backgroundColor: 'white',
        justifyContent: 'space-between',
        marginTop: 10,
        padding: 20,
        paddingBottom: 20,
        paddingTop: 20,
    },


    ItemLogoContainer: {
        flexDirection: 'row',
        gap: 20,
        alignItems: 'center',
        justifyContent: "space-between",

    },

    scheduleInfoContainer: {
        gap: 15,
    },


    ItemTitle: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 20,
    },



    TitleText: {
        fontSize: 18,
        fontWeight: 500,
    },



    scheduleContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        gap: 10,
    },

    scheduleText: {

        fontSize: 13,
        color: '#8f8f8f',


    },

    amount: (type) => ({
        fontSize: 18,
        fontWeight: 600,
        color: type == "Income" ? "green" : "red",
    }),



    amountContainer: {
        alignItems: 'flex-end',

    },



})


export default styles;