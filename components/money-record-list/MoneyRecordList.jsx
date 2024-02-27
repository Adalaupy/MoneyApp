
import { Text, View, FlatList, TouchableOpacity, Alert } from "react-native"
import styles from "./MoneyRecordList.style";
import { useStateContext } from "../../contexts/ContextProvider";
import { Main_FuncList } from "../../utils/HandleEvent";
import { useEffect } from "react";
import RecordEditModal from "../record-edit-modal/RecordEditModal";
import AntDesign from "react-native-vector-icons/AntDesign"




const MoneyRecordList = () => {


    const { chartPickDate, moneyRecord, displayMoneyRecord, setDisplayMoneyRecord, setIsRecordEditModal, setRecordUpdate, setInputClickDay, setInputSelectType, setInputSelectCate, setInputSelectCateIcon, setNoteInput, setamtInput } = useStateContext()
    const { handleDatePickerFilter, handle_Input_Delete } = Main_FuncList()






    useEffect(() => {

        const NewMoneyRecord = handleDatePickerFilter(moneyRecord, chartPickDate)

        setDisplayMoneyRecord(NewMoneyRecord)

    }, [chartPickDate, moneyRecord])







    const AlertPop = (date, Event) => {

        Alert.alert('Confirm to Delete this record', '', [
            {
                text: 'Yes',
                onPress: () => handle_Input_Delete(date, Event)
            },
            {
                text: 'Cancel',
                onPress: () => console.log('Cancel')
            },

        ])

    }


    return (



        <View>

            <RecordEditModal />

            <Text style={styles.txtRemind} >* Long Press to Edit</Text>

            <FlatList

                data={displayMoneyRecord}
                style={{ width: '100%' }}
                renderItem={({ item, index }) => (

                    <View keyExtractor={index} style={styles.EventDateContainer}>

                        <Text style={styles.eventDate}>{item.date}</Text>

                        <View styles={styles.EventsContainer}>



                            {item.event.map((itemEvent, index) => (

                                <View key={index} style={styles.EventContainer}>
                                    <TouchableOpacity style={styles.EventItem}
                                        onLongPress={() => {
                                            setIsRecordEditModal(true)
                                            setRecordUpdate([itemEvent, item.date])
                                            setInputClickDay(item.date)
                                            setInputSelectType(itemEvent.Type == 1 ? 'Expense' : 'Income')
                                            setInputSelectCate(itemEvent.category)
                                            setInputSelectCateIcon(itemEvent.icon)
                                            setNoteInput(itemEvent.note)
                                            setamtInput(itemEvent.amount.toString())
                                        }}
                                    >

                                        <Text style={styles.eventText_Cate}>{itemEvent.category}</Text>
                                        <View style={styles.eventText_Icon}>{itemEvent.icon}</View>
                                        <Text style={styles.eventText_Amt(itemEvent.Type)}>{itemEvent.Type == 1 ? "- " + itemEvent.amount : "+ " + itemEvent.amount}</Text>
                                        <Text style={styles.eventText_Note}>{itemEvent.note}</Text>



                                    </TouchableOpacity>



                                    <TouchableOpacity onPress={() => AlertPop(item.date, itemEvent)}>
                                        <AntDesign name='delete' size={20} />
                                    </TouchableOpacity>



                                </View>
                            ))}




                        </View>
                    </View>
                )} />


        </View>
    )
}

export default MoneyRecordList;