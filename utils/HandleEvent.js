import { useStateContext } from "../contexts/ContextProvider"

export const Main_FuncList = () => {


    const {

        inputClickDay, setInputClickDay,
        InputSelectCate, setInputSelectCate,
        InputSelectCateIcon,
        InputSelectType, setInputSelectType, setInputSelectCateIcon,
        noteInput, setNoteInput,
        amtInput, setamtInput,
        moneyRecord, setMoneyRecord,
        setIsInputModal,
        Today,
        CategoryList, setCategoryList,
        CategoryIconList, setIsAddCateModal,
        setNewCateName,
        catEditType, setCatEditType,
        setCurrentScreen,
        ScheduleList, setScheduleList,
        ScheduleItem, setScheduleItem,
        SchedulePeriod, setSchedulePeriod,
        ScheduleEvery, setScheduleEvery,
        ScheduleType, setScheduleType,
        ScheduleCate, setScheduleCate,
        ScheduleCateIcon, setScheduleCateIcon,
        ScheduleNoteInput, setScheduleNoteInput,
        ScheduleAmountInput, setScheduleAmountInput,
        setisScheduleModal, setIsRecordEditModal,
        RecordUpdate, setRecordUpdate


    } = useStateContext()





    // ===============================================================================================================================================================
    // Organize Data for marked date in the calendar
    // ===============================================================================================================================================================

    const handleMarkedDate = (moneyRecord, AlertAmount) => {

        let markArray = {}

        moneyRecord.map((item) => {


            let sumExpAmt = 0
            let sumIncAmt = 0
            let dot

            item.event.map((eventItem) => {


                if (eventItem.Type == 1) {

                    sumExpAmt += eventItem.amount

                } else {

                    sumIncAmt += eventItem.amount

                }

            })

            const ExpDot = {
                key: "expense",
                color: "red"
            }


            const IncDot = {
                key: "income",
                color: "blue"
            }


            if (sumExpAmt != 0 & sumIncAmt != 0) {

                dot = [ExpDot, IncDot]

            } else if (sumExpAmt != 0) {

                dot = [ExpDot]

            } else {
                dot = [IncDot]
            }



            const thisItem = {
                [item.date]: {

                    marked: true,
                    selected: true,
                    dots: dot,
                    selectedColor: sumExpAmt > AlertAmount ? "#fc8803" : "#03fc7b",
                    selectedTextColor: 'black'

                }
            }


            markArray = Object.assign({}, markArray, thisItem)

        })


        return markArray
    }


    // ===============================================================================================================================================================
    // Cancel the input modal and reset all variables
    // ===============================================================================================================================================================

    const Handle_Input_Cancel = () => {

        setInputSelectType('Income')
        setInputSelectCate('Breakfast')
        setNoteInput('')
        setamtInput('')
        setInputClickDay(Today)

        setIsInputModal(false)
    }





    // ===============================================================================================================================================================
    // Handle the active status of the category
    // ===============================================================================================================================================================


    const handle_Active_Category = (index) => {

        let NewCategory = [...CategoryList]

        NewCategory[index].isActive = !NewCategory[index].isActive

        setCategoryList(NewCategory)

    }


    // ===============================================================================================================================================================
    // Insert New Record to the Money Record List (Function)
    // ===============================================================================================================================================================

    const InsertNewRecord = (Date, NewEventRecord, OriginalList) => {


        let NewMoneyRecord = [...OriginalList]
        let FindExist = NewMoneyRecord.filter((item) => item.date == Date)



        if (FindExist.length > 0) {


            NewMoneyRecord = NewMoneyRecord.map((item) => {

                if (item.date == Date) {

                    item.event.push(NewEventRecord)

                }

                return item
            })



        } else {

            const NewItem = {
                date: Date,
                event: [NewEventRecord]
            }

            NewMoneyRecord.push(NewItem)
        }



        setMoneyRecord(NewMoneyRecord)
        Handle_Input_Cancel()


    }





    // ===============================================================================================================================================================
    // Submit the record of input modal
    // ===============================================================================================================================================================

    const handle_Input_Submit = (mode, newRecord, BaseRecord) => {



        let ThisEvent
        let OriginalList = BaseRecord
        let inputDate = inputClickDay



        if (mode == "schedule") {

            ThisEvent = newRecord
            inputDate = Today

        } else {

            ThisEvent = {
                category: InputSelectCate,
                icon: InputSelectCateIcon,
                amount: parseFloat(amtInput),
                note: noteInput,
                Type: InputSelectType == "Income" ? 2 : 1,
                LogTime: new Date().toLocaleString()
            }

        }




        InsertNewRecord(inputDate, ThisEvent, OriginalList)



        if (mode == "update" || mode == "insert") {

            setCurrentScreen(3)

        }


    }

    // ===============================================================================================================================================================
    // Delete the record of Record edit modal
    // ===============================================================================================================================================================

    const handle_Input_Delete = (date, Record) => {

        let NewRecordList = [...moneyRecord]

        NewRecordList = NewRecordList.map((item) => {

            if (item.date == date) {

                item.event = item.event.filter((eventItem) => eventItem != Record)

            }

            return item

        }).filter((item) => {

            return item.event.length > 0

        })

        setMoneyRecord(NewRecordList)


    }





    // ===============================================================================================================================================================
    // Update the record of Record edit modal
    // ===============================================================================================================================================================

    const handle_Input_Update = () => {



        const [record, date] = RecordUpdate

        let NewRecordList = [...moneyRecord]



        // Delete the original record
        NewRecordList = NewRecordList.map((item) => {

            if (item.date == date) {

                item.event = item.event.filter((eventItem) => eventItem != record)

            }

            return item

        }).filter((item) => {

            return item.event.length > 0

        })



        handle_Input_Submit('update', null, NewRecordList)
        setRecordUpdate([])
        setIsRecordEditModal(false)


    }


    // ===============================================================================================================================================================
    // Add new Category
    // ===============================================================================================================================================================


    const handleNewCategoryName = (id, newName) => {

        let NewCategoryList = [...CategoryList]

        if (catEditType == 1) {

            const GetIcon = CategoryIconList.find((item, index) => index == id)

            const ThisList = {
                name: newName,
                isActive: true,
                Icon_elem: GetIcon
            }

            NewCategoryList.push(ThisList)


        } else {

            let EditCate = NewCategoryList.find((item, index) => index == id)
            EditCate.name = newName

        }


        setCategoryList(NewCategoryList)
        setIsAddCateModal(false)
        setNewCateName('')
        setCatEditType(null)
    }



    // ===============================================================================================================================================================
    // Filter the money record by date
    // ===============================================================================================================================================================

    const handleDatePickerFilter = (moneyRecord, datePicked) => {

        let NewMoneyRecord = [...moneyRecord]

        NewMoneyRecord = NewMoneyRecord.filter(item => Date.parse(item.date) <= Date.parse(datePicked))


        return NewMoneyRecord

    }


    // ===============================================================================================================================================================
    // Filter Data by Period
    // ===============================================================================================================================================================

    const handleFilterData = (moneyRecord, Period, date) => {

        if (Period == "Monthly") {

            FilterData = moneyRecord.filter(item => item.date.slice(0, 7) == date)

        } else if (Period == "HalfYearly") {

            FilterData = moneyRecord.filter(item => item.date.slice(0, 5) + (parseInt(item.date.slice(5, 7)) <= 6 ? "01" : "07") == date)

        } else {

            FilterData = moneyRecord.filter(item => item.date.slice(0, 4) == date)

        }

        return FilterData
    }



    // ===============================================================================================================================================================
    // PieChartData
    // ===============================================================================================================================================================

    const handlePieChartData = (moneyRecord, Period, date, classType) => {



        const ColorList = ["#32a852", "#1ecde8", "#e0221b", "#e8ba15", "#1887f5", "#f518f5", "#f518f5", "#81827f", "#af2cf5"]
        const FilterData = handleFilterData(moneyRecord, Period, date)
        let PieChartData = []

        if (classType == "CostByCategory") {

            FilterData.map((item) => {

                item.event.filter(eventItem => eventItem.Type == 1).map((eventItem) => {

                    const Category = eventItem.category
                    const FindExist = PieChartData.find((item) => item.name == Category)

                    if (FindExist) {

                        FindExist.Accum_Amt += eventItem.amount



                    } else {

                        const ThisItem = {

                            name: Category,
                            Accum_Amt: eventItem.amount,
                            legendFontColor: "black",
                            legendFontSize: 15

                        }

                        PieChartData.push(ThisItem)
                    }
                })
            })



        } else {

            if (FilterData.length != 0) {
                let TotalIncome = 0
                let TotalExpense = 0

                FilterData.map((item) => {

                    item.event.map((eventItem) => {

                        if (eventItem.Type == 1) {

                            TotalExpense += eventItem.amount

                        } else {
                            TotalIncome += eventItem.amount

                        }

                    })

                })



                const ThisExpenseItem = {
                    name: "Expense",
                    Accum_Amt: TotalExpense,
                    legendFontColor: "black",
                    legendFontSize: 15
                }
                const ThisIncomeItem = {
                    name: "Income",
                    Accum_Amt: TotalIncome,
                    legendFontColor: "black",
                    legendFontSize: 15

                }

                PieChartData.push(ThisExpenseItem)
                PieChartData.push(ThisIncomeItem)

            }


        }


        PieChartData.sort((a, b) => a.Accum_Amt < b.Accum_Amt ? 1 : -1).map((item, index) => {

            item.color = index > ColorList.length - 1 ? ColorList[Math.floor(index / ColorList.length - 1)] : ColorList[index]

        })
        return PieChartData

    }


    // ===============================================================================================================================================================
    // Get Period List
    // ===============================================================================================================================================================

    const handleListDate = (moneyRecord, Period) => {

        const UniqueDate = [...new Set(moneyRecord.map(item => item.date))]

        let MinDate = new Date(Math.min(...UniqueDate.map(date => new Date(date))))
        MinDate = new Date(MinDate.getFullYear(), MinDate.getMonth(), 1)

        const MaxDate = new Date(Math.max(...UniqueDate.map(date => new Date(date))))


        let DateList = []

        if (Period == "Monthly") {


            for (let i = MinDate; i <= MaxDate; i.setMonth(i.getMonth() + 1)) {


                const thisDate = i.getFullYear() + "-" + (i.getMonth() + 1).toString().padStart(2, '0')

                const thisDateArray = { label: thisDate, value: thisDate }

                DateList.push(thisDateArray)

            }




        } else if (Period == "Yearly") {

            for (let i = MinDate; i.getFullYear() <= MaxDate.getFullYear(); i.setFullYear(i.getFullYear() + 1)) {


                const thisDate = i.getFullYear()
                const thisDateArray = { label: thisDate, value: thisDate }

                DateList.push(thisDateArray)

            }




        } else if (Period == "HalfYearly") {

            const MinDateYear = new Date(MinDate.getFullYear(), (MinDate.getMonth() < 6 ? 0 : 6), 1)
            const MaxDateYear = new Date(MaxDate.getFullYear(), (MaxDate.getMonth() < 6 ? 0 : 6), 1)



            for (let i = MinDateYear; MinDateYear <= MaxDateYear; i.setMonth(i.getMonth() + 6)) {

                const month = (i.getMonth() + 1).toString().padStart(2, '0')
                const thisDate = (i.getFullYear()) + "-" + month
                const thisDateArray = { label: thisDate, value: thisDate }

                DateList.push(thisDateArray)

            }

        }


        return DateList

    }

    // ===============================================================================================================================================================
    // Cancel the Schedule Modal and reset all variables
    // ===============================================================================================================================================================

    const handle_Schedule_Cancel = () => {

        setScheduleItem("")
        setSchedulePeriod("Daily")
        setScheduleEvery([])
        setScheduleType('Expense')
        setScheduleCate(InputSelectCate)
        setScheduleCateIcon(InputSelectCateIcon)
        setScheduleNoteInput("")
        setScheduleAmountInput("")
        setisScheduleModal(false)
    }



    // ===============================================================================================================================================================
    // Add New Schedule Item
    // ===============================================================================================================================================================

    const handle_Schedule_Submit = () => {

        let NewScheduleRecord = [...ScheduleList]


        const thisItem = {
            item: ScheduleItem,
            period: SchedulePeriod,
            every: ScheduleEvery,
            type: ScheduleType,
            category: ScheduleCate,
            Icon: ScheduleCateIcon,
            note: ScheduleNoteInput,
            amount: ScheduleAmountInput,
            isActive: true
        }

        NewScheduleRecord.push(thisItem)

        setScheduleList(NewScheduleRecord)
        setisScheduleModal(false)
        handle_Schedule_Cancel()

    }




    // ===============================================================================================================================================================
    // Schedule to Record
    // ===============================================================================================================================================================

    const handleScheduleItem = (ScheduleDataItem, BaseRecord) => {

        const { item, period, every, type, category, Icon, note, amount } = ScheduleDataItem

        const CurrentDateTime = new Date()
        const CurrentDay = CurrentDateTime.getDate()
        const CurrentWeekDay = CurrentDateTime.getDay()
        const CurrentMonth = CurrentDateTime.getMonth() + 1
        const CurrentYear = CurrentDateTime.getFullYear()
        const CurrentHour = CurrentDateTime.getHours()
        const CurrentMinute = CurrentDateTime.getMinutes()


        let isMeet = false


        if (period == "Daily") {

            Current = [CurrentHour, CurrentMinute]

        } else if (period == "Weekly") {

            Current = [CurrentWeekDay, CurrentHour, CurrentMinute]

        } else if (period == "Monthly") {

            Current = [CurrentDay, CurrentHour, CurrentMinute]

        } else if (period == "Yearly") {

            Current = [CurrentDay, CurrentMonth, CurrentHour, CurrentMinute]

        } else if (period == "Adhoc") {

            Current = [CurrentDay, CurrentMonth, CurrentYear, CurrentHour, CurrentMinute]

        }


        if (Current = every) {

            isMeet = true

            if (period == "Adhoc") {

                const NewScheduleList = ScheduleList.map((item) => {

                    if (item == ScheduleDataItem) {

                        item.isActive = false
                    }

                    return item
                })

                setScheduleList(NewScheduleList)
            }

        }



        if (isMeet) {


            let typeInt = type == "Expense" ? 1 : 2
            let noteItem = note + (item != "" ? "\n (" + item + ") " : "")

            const NewEventRecord = {
                category: category,
                icon: Icon,
                amount: amount,
                note: noteItem,
                Type: typeInt,
                LogTime: new Date().toLocaleString()
            }





            const thisDayRecord = moneyRecord.filter(item => item.date == Today)
            let searchExist



            if (thisDayRecord.length != 0) {

                searchExist = thisDayRecord[0].event.filter(eventItem => eventItem.category == category && eventItem.note == noteItem && eventItem.amount == amount.toString() && eventItem.Type == typeInt && eventItem.icon == Icon)
            }

            else {

                searchExist = []
            }



            if (searchExist.length == 0) {



                handle_Input_Submit('schedule', NewEventRecord, BaseRecord)

            }

        }



    }



    const handleScheduleToRecord = (BaseRecord) => {

        let NewScheduleList = [...ScheduleList]
        let Now = new Date()


        NewScheduleList = NewScheduleList.filter((item) => item.isActive == true)


        NewScheduleList.map((item) => {

            let ScheduleTime = item.every

            if (ScheduleTime[ScheduleTime.length - 2] == Now.getHours() & ScheduleTime[ScheduleTime.length - 1] == Now.getMinutes()) {

                handleScheduleItem(item, BaseRecord)

            }

        })


    }

    // ===============================================================================================================================================================
    // Return Functions
    // ===============================================================================================================================================================

    return {

        handleMarkedDate,
        Handle_Input_Cancel,
        handle_Input_Submit,
        handle_Input_Delete,
        handle_Input_Update,
        handle_Active_Category,
        handleNewCategoryName,
        handleDatePickerFilter,
        handlePieChartData,
        handleListDate,
        handle_Schedule_Cancel,
        handle_Schedule_Submit,

        handleScheduleToRecord,

    }
}