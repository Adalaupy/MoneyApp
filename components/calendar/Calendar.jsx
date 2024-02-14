import { Calendar } from 'react-native-calendars';
import { Main_FuncList } from "../../utils/HandleEvent"
import { useStateContext } from "../../contexts/ContextProvider";

const CalendarComponent = () => {


    const { moneyRecord, AlertAmount, Today, setInputClickDay, setIsInputModal } = useStateContext()
    const { handleMarkedDate } = Main_FuncList()

    const markedDate = handleMarkedDate(moneyRecord, AlertAmount)



    return (

        <Calendar
            initialDate={Today}
            markingType="multi-dot"
            markedDates={markedDate}
            style={{
                borderRadius: 20,
                height: 350,
            }}

            theme={{
                selectedColor: 'white',
                selectedDayBackgroundColor: 'yellow',
                todayBackgroundColor: 'rgb(0, 173, 245)',
                todayTextColor: '#FFF',
            }}

            onDayPress={day => {
                setInputClickDay(day.dateString);
                setIsInputModal(true)
            }}
        />


    )
}


export default CalendarComponent