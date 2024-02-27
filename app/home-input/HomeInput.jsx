import { SafeAreaView, View } from "react-native"
import CalendarComponent from '../../components/calendar/Calendar'
import InputModal from '../../components/input-modal/InputModal'
import styles from './HomeInput.style'

const HomeInput = () => {


    return (

        <SafeAreaView style={styles.container}>
            <View style={styles.calendarContainer}>
                <CalendarComponent />
            </View>

            <InputModal />


        </SafeAreaView>
    )
}

export default HomeInput