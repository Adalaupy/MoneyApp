import { FlatList, Text, TouchableOpacity, SafeAreaView } from "react-native"
import { useStateContext } from "../../contexts/ContextProvider"
import styles from './ContentPage.style'


const ContentPage = () => {

    const { ContentPageItem, setIsContent, setCurrentScreen } = useStateContext()


    return (




        <SafeAreaView style={styles.container} >



            <FlatList
                data={ContentPageItem}
                contentContainerStyle={styles.flatListContainer}
                renderItem={({ item }) => (

                    <TouchableOpacity
                        keyExtractor={(item) => item.id}
                        style={styles.textline}
                        onPress={() => {
                            setIsContent(false)
                            setCurrentScreen(item.id)
                        }}
                    >

                        <Text style={styles.text}>
                            {item.text}
                        </Text>
                    </TouchableOpacity>
                )}
            />

        </SafeAreaView >






    )

}




export default ContentPage