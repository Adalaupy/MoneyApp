import { TouchableOpacity, View, Text, TextInput, Modal, ScrollView, KeyboardAvoidingView, Platform } from "react-native"
import styles from "./RecordEditModal.style"
import { useStateContext } from "../../contexts/ContextProvider"
import { Main_FuncList } from "../../utils/HandleEvent"
import CategoryListModal from "../category-list-modal/CategoryListModal"
import DateTimePicker from '@react-native-community/datetimepicker';
import MaterialIcons from "react-native-vector-icons/MaterialIcons"


const RecordEditModal = () => {

    const {

        inputClickDay, setInputClickDay,
        InputSelectCate, setInputSelectCate,
        InputSelectCateIcon, setInputSelectCateIcon,
        InputSelectType, setInputSelectType,
        noteInput, setNoteInput,
        amtInput, setamtInput,
        isRecordEditModal, setIsRecordEditModal,
        setisCategoryListModal,
        setRecordUpdate,

    } = useStateContext()


    const { Handle_Input_Cancel, handle_Input_Update } = Main_FuncList()



    const setDate = (event, selectedDate) => {

        setInputClickDay((new Date(selectedDate)).toLocaleDateString('fr-CA'))

    }




    return (


        <Modal
            visible={isRecordEditModal}
            animationType="fade"
        >

            <ScrollView contentContainerStyle={styles.container}>


                <View style={styles.DatePickerContainer}>
                    <MaterialIcons name='edit-calendar' size={30} />
                    <DateTimePicker value={new Date(inputClickDay)} onChange={setDate} mode="date" />
                </View>


                {/* Type */}
                <View style={styles.TypeContainer}>

                    <TouchableOpacity
                        style={styles.TypeBtn('Income', InputSelectType)}
                        onPress={() => setInputSelectType('Income')}
                    >
                        <Text style={styles.text('Income', InputSelectType)}>Income</Text>
                    </TouchableOpacity>

                    <TouchableOpacity
                        style={styles.TypeBtn('Expense', InputSelectType)}
                        onPress={() => setInputSelectType('Expense')}
                    >
                        <Text style={styles.text('Expense', InputSelectType)}>Expense</Text>
                    </TouchableOpacity>

                </View>





                {/* Category */}
                <View style={styles.cate_flatlist}>

                    <TouchableOpacity
                        style={styles.cate_btn(InputSelectCate, InputSelectCate)}
                        onPress={() => {
                            setisCategoryListModal(true)
                        }}
                    >
                        {InputSelectCateIcon}

                        <Text style={styles.cate_text}>{InputSelectCate}</Text>
                    </TouchableOpacity>


                    <CategoryListModal setCate={setInputSelectCate} setCateIcon={setInputSelectCateIcon} currentCate={InputSelectCate} />

                </View>







                {/* Notes */}
                <View style={styles.TextInputContainer}>

                    <TextInput
                        style={styles.note_input}
                        value={noteInput}
                        onChangeText={setNoteInput}
                        placeholder="Add your notes here......"

                    />

                </View>




                <KeyboardAvoidingView
                    style={styles.TextInputContainer}
                    behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
                >

                    {/* Amount */}
                    <TextInput
                        style={styles.note_input}
                        value={amtInput}
                        onChangeText={setamtInput}
                        inputMode="numeric"
                        placeholder="Amount $$"
                    />
                </KeyboardAvoidingView>





                {/* Button */}
                <View style={styles.btn_Container}>
                    <TouchableOpacity
                        onPress={() => {
                            Handle_Input_Cancel()
                            setRecordUpdate([])
                            setIsRecordEditModal(false)
                        }}
                        style={styles.InputBtn}
                    >
                        <Text style={styles.InputText}>Cancel</Text>
                    </TouchableOpacity>

                    <TouchableOpacity
                        onPress={() => {
                            handle_Input_Update()
                        }}
                        style={styles.InputBtn}
                    >
                        <Text style={styles.InputText}>Update</Text>
                    </TouchableOpacity>
                </View>


            </ScrollView>

        </Modal >

    )
}


export default RecordEditModal