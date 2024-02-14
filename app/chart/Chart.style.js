import { Dimensions, StyleSheet } from "react-native";

const styles = StyleSheet.create({

    container: {
        alignContent: "center",

    },


    PickDatChartContainer: {
        margin: 15,
        backgroundColor: "#fff",
        borderRadius: 30,


    },

    PeriodContainer: {
        flexDirection: "row",
        justifyContent: "space-between",
        marginTop: 5,
        marginBottom: 5,
        marginLeft: 10,
        marginRight: 10,
    },


    PeriodBtn: (PeriodPicked, Period) => ({
        backgroundColor: PeriodPicked == Period ? "#f6dcfc" : "#fff",
        paddingTop: 10,
        paddingBottom: 10,
        paddingLeft: 5,
        paddingRight: 5,
        width: 110,
        borderWidth: 1,
        borderColor: "#cac8cc",
        // borderRadius: 10,
        justifyContent: "center",
        marginTop: 20,

    }),


    periodText: {
        textAlign: "center",
        fontSize: 15,
        fontWeight: "bold",
    },



    dropdownPickerContainer: {

        justifyContent: "center",
        alignItems: "center",
        marginLeft: 15,
        marginRight: 15,
        zIndex: 1,
        color: '#a8a8a8',
        marginTop: 20,
        marginBottom: 20,

    }


});

export default styles;