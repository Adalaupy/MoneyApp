import { useStateContext } from "../../contexts/ContextProvider";
import { Modal, SafeAreaView, Text, TouchableOpacity, View } from "react-native";
import styles from "./CategoryAddModal.style";
import { TextInput } from "react-native";
import { Main_FuncList } from "../../utils/HandleEvent";

const CategoryAddModal = () => {

    const { isAddCateModal, setIsAddCateModal, newCateName, setNewCateName, selectedNewIcon, setCatEditType } = useStateContext()
    const { handleNewCategoryName } = Main_FuncList()



    return (


        <Modal
            visible={isAddCateModal}
            transparent={true}
        >

            <SafeAreaView style={styles.container}>




                <TextInput
                    style={styles.textinputbox}
                    placeholder="Enter Category Name......"
                    value={newCateName}
                    onChangeText={text => setNewCateName(text)}
                />





                <View style={styles.btnContainer}>


                    <TouchableOpacity
                        style={styles.btn} onPress={() => {
                            handleNewCategoryName(selectedNewIcon, newCateName)
                        }}>
                        <Text style={styles.btnText}>Submit</Text>
                    </TouchableOpacity>




                    <TouchableOpacity
                        style={styles.btn} onPress={() => {
                            setIsAddCateModal(false)
                            setNewCateName('')
                            setCatEditType(null)
                        }}>
                        <Text style={styles.btnText}>Close</Text>
                    </TouchableOpacity>
                </View>





            </SafeAreaView>

        </Modal>
    )
}

export default CategoryAddModal
