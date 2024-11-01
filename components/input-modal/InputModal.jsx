import { TouchableOpacity, View, Text, TextInput, Modal, ScrollView, KeyboardAvoidingView, Platform } from "react-native"
import styles from "./InputModal.style"
import { useStateContext } from "../../contexts/ContextProvider"
import { Main_FuncList } from "../../utils/HandleEvent"
import CategoryListModal from "../category-list-modal/CategoryListModal"

const InputModal = () => {

    const {
        moneyRecord,
        InputSelectCate, setInputSelectCate,
        InputSelectCateIcon, setInputSelectCateIcon,
        InputSelectType, setInputSelectType,
        noteInput, setNoteInput,
        amtInput, setamtInput,
        isInputModal,
        setisCategoryListModal,

    } = useStateContext()


    const { Handle_Input_Cancel, handle_Input_Submit } = Main_FuncList()




    return (


        <Modal
            visible={isInputModal}
            animationType="fade"
        >

            <ScrollView contentContainerStyle={styles.container}>


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
                        }}
                        style={styles.InputBtn}
                    >
                        <Text style={styles.InputText}>Cancel</Text>
                    </TouchableOpacity>

                    <TouchableOpacity
                        onPress={() => {
                            handle_Input_Submit('insert', null, moneyRecord)
                        }}
                        style={styles.InputBtn}
                    >
                        <Text style={styles.InputText}>Submit</Text>
                    </TouchableOpacity>
                </View>


            </ScrollView>

        </Modal >

    )
}


export default InputModal