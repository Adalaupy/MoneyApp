import { FlatList, TouchableOpacity, Text, Modal, SafeAreaView } from 'react-native';
import styles from './CategoryListModal.style';
import { useStateContext } from '../../contexts/ContextProvider';



const CategoryListModal = ({ setCate, setCateIcon, currentCate }) => {

    const { isCategoryListModal, setisCategoryListModal, CategoryList, } = useStateContext()
    const visible_CategoryList = CategoryList.filter((item) => item.isActive == true)



    return (


        <Modal
            visible={isCategoryListModal}
            animationType="fade"
            transparent={true}
        >


            <SafeAreaView style={styles.container}>



                <FlatList
                    data={visible_CategoryList}
                    numColumns={2}
                    contentContainerStyle={styles.cate_flatlist}
                    renderItem={({ item }) => (


                        <TouchableOpacity
                            style={styles.flatlistBtn(item.name, currentCate)}
                            onPress={() => {
                                setCate(item.name)
                                setCateIcon(item.Icon_elem)
                                setisCategoryListModal(false)
                            }}
                            keyExtractor={item => item.name}
                        >

                            {item.Icon_elem}
                            <Text style={styles.BtnTxT}> {item.name}</Text>


                        </TouchableOpacity>



                    )}
                />



            </SafeAreaView>

        </Modal>
    )
}

export default CategoryListModal;