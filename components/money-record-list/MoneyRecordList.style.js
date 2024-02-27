import { StyleSheet } from "react-native";
import { stylesList, shadow, paddingValue } from "../../utils/Styles";

const styles = StyleSheet.create({

    txtRemind: {
        ...stylesList.font,
        fontSize: 12,
        marginLeft: 20,
        paddingLeft: paddingValue,
    },


    EventDateContainer: {
        ...stylesList.ElementContainer,
        ...shadow,
        borderWidth: 0,
    },


    EventsContainer: {
        flexDirection: 'column',
        alignItems: 'center',
    },



    eventDate: {

        ...stylesList.font,
        fontSize: 17,
        marginBottom: 10,

    },


    EventContainer: {
        width: 340,
        flexDirection: 'row',
        alignItems: 'center',

    },


    EventItem: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 5,
    },



    eventText_Cate: {
        flex: 4,
    },


    eventText_Icon: {
        // flex: 1,
    },

    eventText_Amt: (amt_type) => ({
        ...stylesList.font,
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