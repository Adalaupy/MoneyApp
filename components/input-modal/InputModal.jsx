import { TouchableOpacity, View, Text, FlatList, TextInput, Modal, SafeAreaView } from "react-native"
import styles from "./InputModal.style"
import { useStateContext } from "../../contexts/ContextProvider"
import { Main_FuncList } from "../../utils/HandleEvent"


const InputModal = () => {

    const {

        InputSelectCate, setInputSelectCate,
        setInputSelectCateIcon,
        InputSelectType, setInputSelectType,
        noteInput, setNoteInput,
        amtInput, setamtInput,
        CategoryList,
        isInputModal,

    } = useStateContext()


    const visible_CategoryList = CategoryList.filter((item) => item.isActive == true)


    const { Handle_Input_Cancel, handle_Input_Submit } = Main_FuncList()

    return (


        <Modal
            visible={isInputModal}
            animationType="fade"
        >

            <SafeAreaView style={styles.container}>

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
                <FlatList
                    data={visible_CategoryList}
                    numColumns={2}
                    contentContainerStyle={styles.cate_flatlist}
                    renderItem={({ item }) => (
                        <TouchableOpacity
                            onPress={() => {
                                setInputSelectCate(item.name)
                                setInputSelectCateIcon(item.Icon_elem)
                            }}
                            keyExtractor={item => item.name}
                            style={styles.cate_btn(item.name, InputSelectCate)}
                        >
                            {item.Icon_elem}
                            <Text style={styles.cate_text}>{item.name}</Text>
                        </TouchableOpacity>
                    )}
                />




                {/* Notes */}
                <View style={styles.TextInputContainer}>
                    <TextInput
                        style={styles.note_input}
                        value={noteInput}
                        onChangeText={setNoteInput}
                        placeholder="Add your notes here......"
                    />

                </View>




                <View style={styles.TextInputContainer}>

                    {/* Amount */}

                    <TextInput
                        style={styles.note_input}
                        value={amtInput}
                        onChangeText={setamtInput}
                        inputMode="numeric"
                        placeholder="Amount $$"
                    />
                </View>





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
                            handle_Input_Submit()
                        }}
                        style={styles.InputBtn}
                    >
                        <Text style={styles.InputText}>Submit</Text>
                    </TouchableOpacity>
                </View>



            </SafeAreaView>
        </Modal>

    )
}


export default InputModal