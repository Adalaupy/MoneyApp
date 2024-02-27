import { TouchableOpacity, SafeAreaView, View, Text } from "react-native"
import DropDownPicker from 'react-native-dropdown-picker';
import styles from "./Chart.style";
import PieChartElem from "../../components/graph/PieChart";
import { useStateContext } from '../../contexts/ContextProvider'
import { Main_FuncList } from '../../utils/HandleEvent'
import { useEffect, useState } from "react";


const Chart = () => {

    const { moneyRecord, PeriodPicked, setPeriodPicked } = useStateContext()
    const { handleListDate, handlePieChartData } = Main_FuncList()




    // For DropList
    const [DateList, setDateList] = useState(handleListDate(moneyRecord, PeriodPicked))
    const [open, setOpen] = useState(false);
    const [PeriodDate, setPeriodDate] = useState(DateList[DateList.length - 1].value);



    // For PieChart
    const [PieChartData_Category, setPieChartData_Category] = useState(handlePieChartData(moneyRecord, PeriodPicked, PeriodDate, "CostByCategory"))
    const [PieChartData_IvsE, setPieChartData_IvsE] = useState(handlePieChartData(moneyRecord, PeriodPicked, PeriodDate, "IncomeVsExpense"))



    useEffect(() => {

        const thisDateList = handleListDate(moneyRecord, PeriodPicked)
        setDateList(thisDateList)
        setPeriodDate(thisDateList[thisDateList.length - 1].value)


    }, [PeriodPicked, moneyRecord])




    useEffect(() => {

        setPieChartData_Category(handlePieChartData(moneyRecord, PeriodPicked, PeriodDate, "CostByCategory"))
        setPieChartData_IvsE(handlePieChartData(moneyRecord, PeriodPicked, PeriodDate, "IncomeVsExpense"))

    }, [PeriodPicked, moneyRecord, PeriodDate])


    return (


        <SafeAreaView style={styles.container}>


            <View style={styles.PickDatChartContainer}>


                <View style={styles.PeriodContainer}>

                    <TouchableOpacity style={styles.PeriodBtn(PeriodPicked, "Monthly")}
                        onPress={() => setPeriodPicked('Monthly')}>
                        <Text style={styles.periodText}>Monthly</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.PeriodBtn(PeriodPicked, "HalfYearly")}
                        onPress={() => setPeriodPicked('HalfYearly')}>
                        <Text style={styles.periodText}>Half Yearly</Text>
                    </TouchableOpacity>


                    <TouchableOpacity style={styles.PeriodBtn(PeriodPicked, "Yearly")}
                        onPress={() => setPeriodPicked('Yearly')}>
                        <Text style={styles.periodText}>Yearly</Text>
                    </TouchableOpacity>

                </View>


                <View style={styles.dropdownPickerContainer}>

                    <DropDownPicker
                        style={{ borderColor: "#a8a8a8" }}
                        open={open}
                        value={PeriodDate}
                        items={DateList}
                        setOpen={setOpen}
                        setValue={setPeriodDate}
                        setItems={setDateList}
                        placeholder="Pick a Date Period"
                    />

                </View>



                <PieChartElem PieChartData={PieChartData_Category} />
                <PieChartElem PieChartData={PieChartData_IvsE} />

            </View>

        </SafeAreaView >
    )
}

export default Chart