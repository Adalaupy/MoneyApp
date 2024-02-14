import { useStateContext } from "../contexts/ContextProvider"


export const Main_FuncList = () => {


    const {

        inputClickDay, setInputClickDay,
        InputSelectCate, setInputSelectCate,
        InputSelectCateIcon, setInputSelectCateIcon,
        InputSelectType, setInputSelectType,
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
        setChartPickDate,

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
    // Submit the record of input modal
    // ===============================================================================================================================================================

    const handle_Input_Submit = () => {

        let NewMoneyRecord = [...moneyRecord]
        const FindExist = NewMoneyRecord.find((item) => item.date == inputClickDay)


        const ThisEvent = {
            category: InputSelectCate,
            icon: InputSelectCateIcon,
            amount: parseFloat(amtInput),
            note: noteInput,
            Type: InputSelectType == "Income" ? 2 : 1,
            LogTime: new Date().toLocaleString()
        }



        if (FindExist) {

            FindExist.event.push(ThisEvent)

        } else {

            const NewItem = {
                date: inputClickDay,
                event: [ThisEvent]
            }

            NewMoneyRecord.push(NewItem)
        }

        setCurrentScreen(3)
        setMoneyRecord(NewMoneyRecord)
        Handle_Input_Cancel()


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
    // Return Functions
    // ===============================================================================================================================================================

    return {

        handleMarkedDate,
        Handle_Input_Cancel,
        handle_Input_Submit,
        handle_Active_Category,
        handleNewCategoryName,
        handleDatePickerFilter,
        handlePieChartData,
        handleListDate

    }
}