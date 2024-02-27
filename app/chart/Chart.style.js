import { StyleSheet } from "react-native";
import { paddingValue, BtnSelectedBgColor, BtnUnselectedBgColor, stylesList } from "../../utils/Styles";




const styles = StyleSheet.create({

    container: {
        ...stylesList.Container,
    },


    PickDatChartContainer: {
        ...stylesList.ElementContainer,
    },


    PeriodContainer: {
        flexDirection: "row",
        gap: 10,
        marginTop: 20,
        padding: paddingValue,
    },


    PeriodBtn: (PeriodPicked, Period) => ({

        ...stylesList.Btn('non'),
        backgroundColor: PeriodPicked == Period ? BtnSelectedBgColor : BtnUnselectedBgColor,
        flex: 1,

    }),


    periodText: {
        ...stylesList.font,
        textAlign: "center",
        fontSize: 14,
        fontWeight: "bold",
    },



    dropdownPickerContainer: {

        padding: paddingValue,
        zIndex: 1,

    }


});

export default styles;