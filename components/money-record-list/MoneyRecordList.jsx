
import { Text, View, FlatList, TouchableOpacity } from "react-native"
import styles from "./MoneyRecordList.style";
import { useStateContext } from "../../contexts/ContextProvider";
import { Main_FuncList } from "../../utils/HandleEvent";
import { useEffect } from "react";





const MoneyRecordList = () => {


    const { chartPickDate, moneyRecord, displayMoneyRecord, setDisplayMoneyRecord } = useStateContext()
    const { handleDatePickerFilter } = Main_FuncList()


    useEffect(() => {

        const NewMoneyRecord = handleDatePickerFilter(moneyRecord, chartPickDate)

        setDisplayMoneyRecord(NewMoneyRecord)

    }, [chartPickDate])




    return (



        <View>


            <FlatList
                data={displayMoneyRecord}
                style={{ width: '100%' }}
                renderItem={({ item, index }) => (

                    <View keyExtractor={index} style={styles.EventDateContainer}>

                        <Text style={styles.eventDate}>{item.date}</Text>

                        <View styles={styles.EventsContainer}>

                            {item.event.map((itemEvent, index) => (


                                <TouchableOpacity style={styles.EventItem} key={index}
                                    onLongPress={() => console.log(itemEvent)}
                                >

                                    <Text style={styles.eventText_Cate}>{itemEvent.category}</Text>
                                    <View style={styles.eventText_Icon}>{itemEvent.icon}</View>
                                    <Text style={styles.eventText_Amt(itemEvent.Type)}>{itemEvent.Type == 1 ? "- " + itemEvent.amount : "+ " + itemEvent.amount}</Text>
                                    <Text style={styles.eventText_Note}>{itemEvent.note}</Text>

                                </TouchableOpacity>


                            ))}
                        </View>
                    </View>
                )} />


        </View>
    )
}

export default MoneyRecordList;