import { StyleSheet } from "react-native";

const styles = StyleSheet.create({





    EventDateContainer: {
        flexDirection: 'column',
        width: '100%',
        padding: 15,
        backgroundColor: '#fff',
        borderRadius: 20,
        marginTop: 10,
    },



    EventsContainer: {
        flexDirection: 'column',
        alignItems: 'center',

    },

    eventDate: {
        fontSize: 17,
        fontWeight: 'bold',
        marginBottom: 10,

    },

    EventItem: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        width: 340,
        marginTop: 5,
    },



    eventText_Cate: {
        flex: 3,
    },


    eventText_Icon: {
        flex: 1,

    },

    eventText_Amt: (amt_type) => ({
        color: amt_type == 1 ? 'red' : 'green',
        flex: 2,
        textAlign: 'right',
    }),

    eventText_Note: {
        flex: 3,
        textAlign: 'center'
    },



})


export default styles;