import React, { createContext, useContext, useEffect, useState } from 'react';
import { Init_Money, AlertAmt, CategoryDefault, CategoryIconList, ScheduleData } from "../utils/StorageData"






const StateContext = createContext()


export const ContextProvider = ({ children }) => {

    const defaultScreenNum = 4

    const ContentPageItem = [
        { id: 1, text: "Input" },
        { id: 2, text: "Edit Category" },
        { id: 3, text: "Record List" },
        { id: 4, text: "Add Schedule" },
        { id: 5, text: "Chart" },
    ]


    // Date
    const GetDate = new Date()
    const Today = GetDate.toLocaleDateString('fr-CA')
    const Today_LocaleStr = GetDate.toLocaleString()



    // Model + Swich Screen
    const [isContent, setIsContent] = useState(false)
    const [isInputModal, setIsInputModal] = useState(false)
    const [isRecordEditModal, setIsRecordEditModal] = useState(false)
    const [currentScreen, setCurrentScreen] = useState(defaultScreenNum)
    const [isAddCateModal, setIsAddCateModal] = useState(false)
    const [isScheduleModal, setisScheduleModal] = useState(false)
    const [isCategoryListModal, setisCategoryListModal] = useState(false)




    // CategoryName 
    const [selectedNewIcon, setselectedNewIcon] = useState(null)
    const [newCateName, setNewCateName] = useState('')
    const [catEditType, setCatEditType] = useState(null)


    // Data in Local Storage
    const [CategoryList, setCategoryList] = useState(CategoryDefault)
    const [moneyRecord, setMoneyRecord] = useState(Init_Money)
    const [AlertAmount, setAlertAmount] = useState(AlertAmt)



    // Input Information
    const [inputClickDay, setInputClickDay] = useState(Today)
    const [InputSelectType, setInputSelectType] = useState('Expense')
    const [InputSelectCate, setInputSelectCate] = useState(CategoryList.find(item => item.isActive == true).name)
    const [InputSelectCateIcon, setInputSelectCateIcon] = useState(CategoryList.find(item => item.isActive == true).Icon_elem)
    const [noteInput, setNoteInput] = useState('')
    const [amtInput, setamtInput] = useState('')


    // Store Edit Record
    const [RecordUpdate, setRecordUpdate] = useState([])



    // Record List Pick date
    const [chartPickDate, setChartPickDate] = useState(GetDate)
    const [displayMoneyRecord, setDisplayMoneyRecord] = useState(moneyRecord.sort((a, b) => Date.parse(a.date) < Date.parse(b.date) ? 1 : -1))



    // Chart Data
    const [PeriodPicked, setPeriodPicked] = useState("Monthly")



    // Schedule Data
    const [ScheduleList, setScheduleList] = useState(ScheduleData)
    const [ScheduleItem, setScheduleItem] = useState("")
    const [SchedulePeriod, setSchedulePeriod] = useState("Daily")
    const [ScheduleEvery, setScheduleEvery] = useState([])
    const [ScheduleType, setScheduleType] = useState('Expense')
    const [ScheduleCate, setScheduleCate] = useState(InputSelectCate)
    const [ScheduleCateIcon, setScheduleCateIcon] = useState(InputSelectCateIcon)
    const [ScheduleNoteInput, setScheduleNoteInput] = useState("")
    const [ScheduleAmountInput, setScheduleAmountInput] = useState("")






    useEffect(() => {

        setInputSelectCate(CategoryList.find(item => item.isActive == true).name)

    }, [CategoryList.find(item => item.isActive == true)])


    return (

        <StateContext.Provider
            value={{

                ContentPageItem,
                Today, Today_LocaleStr,

                isContent, setIsContent,
                isInputModal, setIsInputModal,
                isRecordEditModal, setIsRecordEditModal,
                currentScreen, setCurrentScreen,
                isAddCateModal, setIsAddCateModal,
                isScheduleModal, setisScheduleModal,
                isCategoryListModal, setisCategoryListModal,

                inputClickDay, setInputClickDay,
                InputSelectType, setInputSelectType,
                InputSelectCate, setInputSelectCate,
                InputSelectCateIcon, setInputSelectCateIcon,
                noteInput, setNoteInput,
                amtInput, setamtInput,


                RecordUpdate, setRecordUpdate,


                selectedNewIcon, setselectedNewIcon,
                newCateName, setNewCateName,
                catEditType, setCatEditType,

                CategoryList, setCategoryList,
                moneyRecord, setMoneyRecord,
                AlertAmount, setAlertAmount,


                CategoryIconList,
                chartPickDate, setChartPickDate,
                displayMoneyRecord, setDisplayMoneyRecord,

                PeriodPicked, setPeriodPicked,

                ScheduleList, setScheduleList,
                ScheduleItem, setScheduleItem,
                SchedulePeriod, setSchedulePeriod,
                ScheduleEvery, setScheduleEvery,
                ScheduleType, setScheduleType,
                ScheduleCate, setScheduleCate,
                ScheduleCateIcon, setScheduleCateIcon,
                ScheduleNoteInput, setScheduleNoteInput,
                ScheduleAmountInput, setScheduleAmountInput,

            }}>

            {children}
        </StateContext.Provider>
    )
}


export const useStateContext = () => useContext(StateContext)