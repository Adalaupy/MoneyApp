import { View, SafeAreaView, FlatList, Text, TouchableOpacity, ActivityIndicator } from "react-native"
import { useStateContext } from "../../contexts/ContextProvider"
import { useEffect, useState } from "react"
import styles from "./ScheduleAdd.style"
import ScheduleModal from "../../components/schedule-modal/ScheduleModal"


const ScheduleAdd = () => {


    const { ScheduleList, setisScheduleModal, setScheduleItem, setSchedulePeriod, setScheduleEvery, setScheduleType, setScheduleCate, setScheduleCateIcon, setScheduleNoteInput, setScheduleAmountInput } = useStateContext()
    const [LoadCount, setLoadCount] = useState(1)
    const [isLoad, setisLoad] = useState(false)


    const InitialDisplay = () => {

        let DisplayScheduleList = ScheduleList.filter(item => item.isActive == true)

        DisplayScheduleList.map((thisItem) => {

            let DisplayPeriod

            const dayAbb = () => {

                switch (thisItem.every[0]) {

                    case 1:
                        return "st"
                    case 2:
                        return "nd"
                    default:
                        return "th"

                }
            }


            const week = () => {

                switch (thisItem.every[0]) {
                    case 1:
                        return "Monday"
                    case 2:
                        return "Tuesday"
                    case 3:
                        return "Wednesday"
                    case 4:
                        return "Thursday"
                    case 5:
                        return "Friday"
                    case 6:
                        return "Saturday"
                    case 7:
                        return "Sunday"
                }

            }


            const MonthName = () => {

                const date = new Date()

                date.setMonth(thisItem.every[1] - 1)
                const monthName = date.toLocaleString([], { month: 'long' })

                return monthName

            }



            if (thisItem.period == "Monthly") {

                DisplayPeriod = "Every " + thisItem.every[0] + dayAbb() + " of Month"

            } else if (thisItem.period == "Weekly") {

                DisplayPeriod = "Every " + week()

            } else if (thisItem.period == "Adhoc") {

                DisplayPeriod = thisItem.every[0] + dayAbb() + " of " + MonthName() + " in " + thisItem.every[2]

            }

            else if (thisItem.period == "Daily") {

                DisplayPeriod = "Every Day"

            } else {

                DisplayPeriod = "Every " + thisItem.every[0] + "th of " + MonthName()
            }


            thisItem.DisplayPeriod = DisplayPeriod

        })

        return DisplayScheduleList
    }







    const [DisplayRecord, setDisplayRecord] = useState(InitialDisplay())


    useEffect(() => {

        setDisplayRecord(InitialDisplay())

    }, [ScheduleList])



    const LoadItem = () => {

        setisLoad(true)
        setLoadCount(LoadCount + 1)
        setisLoad(false)

    }



    const RenderLoader = () => {

        if (isLoad) {

            return <ActivityIndicator size="large" color="#0000ff" />
        }
    }


    return (


        <SafeAreaView style={styles.container} >

            <ScheduleModal />


            <TouchableOpacity
                style={styles.AddJobContainer}
                onPress={() => setisScheduleModal(true)}
            >
                <Text style={styles.AddJobText}>Add New Job</Text>
            </TouchableOpacity>



            <FlatList
                data={DisplayRecord.slice(0, LoadCount * 5 - 1)}
                ListFooterComponent={RenderLoader}
                onEndReached={LoadItem}
                onEndReachedThreshold={0}
                renderItem={({ item }) => (


                    <TouchableOpacity style={styles.ItemContainer} onLongPress={() => {
                        setisScheduleModal(true)
                        setScheduleItem(item.item)
                        setSchedulePeriod(item.period)
                        setScheduleEvery(item.every)
                        setScheduleType(item.type)
                        setScheduleCate(item.category)
                        setScheduleCateIcon(item.Icon)
                        setScheduleNoteInput(item.note)
                        setScheduleAmountInput(item.amount)
                    }}>





                        <View style={styles.ItemLogoContainer}>
                            {item.Icon}
                            <Text style={styles.TitleText}>{item.item}</Text>
                        </View>




                        <View style={styles.scheduleInfoContainer}>

                            <View style={styles.scheduleContainer}>
                                <Text style={styles.scheduleText}>{item.DisplayPeriod}</Text>
                                <Text style={styles.scheduleText}>{item.every[item.every.length - 2].toString().padStart(2, "0") + ":" + item.every[item.every.length - 1].toString().padStart(2, "0")}</Text>
                            </View>


                            <View style={styles.amountContainer}>
                                <Text style={styles.amount(item.type)}>{item.type == "Income" ? "+" + item.amount : -item.amount}</Text>
                            </View>


                        </View>






                    </TouchableOpacity>


                )}
            />



        </SafeAreaView>


    )
}

export default ScheduleAdd