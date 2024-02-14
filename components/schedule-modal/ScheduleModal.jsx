import { View, Modal, SafeAreaView, Text, TextInput, TouchableOpacity } from "react-native"
import styles from "./ScheduleModal.style"
import { useStateContext } from "../../contexts/ContextProvider"
import DropDownPicker from 'react-native-dropdown-picker';
import DateTimePicker from '@react-native-community/datetimepicker';
import { useState } from "react";

const ScheduleModal = () => {

    const { isScheduleModal, setisScheduleModal,
        ScheduleList, setScheduleList,
        ScheduleItem, setScheduleItem,
        SchedulePeriod, setSchedulePeriod,
        ScheduleEvery, setScheduleEvery,
        ScheduleType, setScheduleType,
        ScheduleCate, setScheduleCate,
        ScheduleCateIcon, setScheduleCateIcon,
        ScheduleNoteInput, setScheduleNoteInput,
        ScheduleAmountInput, setScheduleAmountInput,

    } = useStateContext()



    // For DropList
    const [DateList, setDateList] = useState([
        { label: 'Daily', value: 'Daily' },
        { label: 'Weekly', value: 'Weekly' },
        { label: 'Monthly', value: 'Monthly' },
        { label: 'Yearly', value: 'Yearly' },
        { label: 'Ad-hoc', value: 'Adhoc' }
    ])
    const [open, setOpen] = useState(false);
    const [PeriodDate, setPeriodDate] = useState(DateList[DateList.length - 1].value);





    const TimePickerDisplay = () => {

        const date = new Date()

        if (ScheduleEvery.length > 2) {

            date.setHours(ScheduleEvery[ScheduleEvery.length - 2])
            date.setMinutes(ScheduleEvery[ScheduleEvery.length - 1])

        }


        return date
    }




    const TimePickerUpdate = (event, selectedDate) => {

        let NewEvery = [...ScheduleEvery]

        if (ScheduleEvery.length > 2) {

            NewEvery.splice(NewEvery.length - 2, 2, selectedDate.getHours(), selectedDate.getMinutes())

        } else {

            NewEvery = [...NewEvery, selectedDate.getHours(), selectedDate.getMinutes()]

        }

    }


    return (


        <Modal
            visible={isScheduleModal}
            animationType="fade"
        >

            <SafeAreaView style={styles.container}>

                {/* Item Title */}
                <View>
                    <TextInput placeholder="Item..." value={ScheduleItem} onChangeText={setScheduleItem} />
                </View>


                {/* Schedule Period Picker */}
                <View>


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


                    <DateTimePicker onChange={TimePickerUpdate} value={TimePickerDisplay()} mode="time" />


                </View>


                <TouchableOpacity onPress={() => { setisScheduleModal(false) }} >
                    <Text>Close</Text>
                </TouchableOpacity>


            </SafeAreaView>

        </Modal>
    )

}

export default ScheduleModal