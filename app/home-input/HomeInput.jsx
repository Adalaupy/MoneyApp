import { View } from "react-native"
import CalendarComponent from '../../components/calendar/Calendar'
import InputModal from '../../components/input-modal/InputModal'
import styles from './HomeInput.style'

const HomeInput = () => {


    return (

        <View style={styles.container}>
            <CalendarComponent />
            <InputModal />
        </View>
    )
}

export default HomeInput