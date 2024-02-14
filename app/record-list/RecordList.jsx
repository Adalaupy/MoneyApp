import { Text, View } from "react-native"
import DateTimePicker from '@react-native-community/datetimepicker';
import styles from "./RecordList.style";
import { useStateContext } from "../../contexts/ContextProvider";
import MoneyRecordList from "../../components/money-record-list/MoneyRecordList";



const RecordList = () => {


    const { chartPickDate, setChartPickDate } = useStateContext()


    const DatePickerUpdate = (event, selectedDate) => {

        setChartPickDate(selectedDate)

    };



    return (




        <View style={styles.container}>

            <View style={styles.datepickContainer}>
                <Text style={styles.datepickText}>Get Data Before:</Text>
                <DateTimePicker value={chartPickDate} onChange={DatePickerUpdate} mode="date" />
            </View>



            <MoneyRecordList />

        </View >
    )
}

export default RecordList