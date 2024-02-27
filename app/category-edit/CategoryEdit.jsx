import { FlatList, View, TouchableOpacity, Text, SafeAreaView } from "react-native"
import { useStateContext } from "../../contexts/ContextProvider"
import { Main_FuncList } from "../../utils/HandleEvent"
import styles from "./CategoryEdit.style"
import CategoryAddModal from "../../components/category-add-modal/CategoryAddModal"




const CategoryEdit = () => {

    const { CategoryList, CategoryIconList, setIsAddCateModal, setselectedNewIcon, setCatEditType } = useStateContext()
    const { handle_Active_Category } = Main_FuncList()

    return (


        <SafeAreaView style={styles.container}>

            {/* Modal */}
            <CategoryAddModal />

            {/* Add New Category */}
            <View style={styles.cate_container}>

                <Text style={styles.CateTxt}>Press To Add Category</Text>



                <FlatList
                    contentContainerStyle={styles.flatlist}
                    data={CategoryIconList}
                    numColumns={3}
                    renderItem={({ item, index }) => (

                        <TouchableOpacity
                            style={styles.iconContainer}
                            keyExtractor={index}
                            onPress={() => {
                                setIsAddCateModal(true)
                                setselectedNewIcon(index)
                                setCatEditType(1)
                            }}
                        >
                            {item}
                        </TouchableOpacity>

                    )}
                />
            </View>




            {/* Current Category */}

            <View style={styles.cate_container}>
                <Text style={styles.CateTxt}>Current Category</Text>

                <FlatList
                    data={CategoryList}
                    renderItem={({ item, index }) => (

                        <TouchableOpacity style={styles.currIconBtn(item.isActive)}
                            onPress={() => handle_Active_Category(index)}
                            onLongPress={() => {
                                setIsAddCateModal(true)
                                setselectedNewIcon(index)
                                setCatEditType(2)
                            }}
                        >

                            {item.Icon_elem}

                            <Text>{item.name}</Text>
                        </TouchableOpacity>
                    )}
                />


            </View>


        </SafeAreaView>

    )
}

export default CategoryEdit