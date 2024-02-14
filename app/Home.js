import HomeInput from "./home-input/HomeInput"
import Chart from "./chart/Chart"
import CategoryEdit from "./category-edit/CategoryEdit"
import ScheduleAdd from "./schedule-add/ScheduleAdd"
import ContentPage from "../components/content-page/ContentPage"
import RecordList from "./record-list/RecordList"

import { useStateContext } from "../contexts/ContextProvider"
import { View, SafeAreaView, TouchableOpacity } from "react-native"
import { Stack } from "expo-router";
import Icon from "react-native-vector-icons/FontAwesome"






const Home = () => {

    const { currentScreen, isContent, setIsContent } = useStateContext()


    const DisplayContent = () => {

        switch (currentScreen) {

            case 1:
                return (<HomeInput />)

            case 2:
                return (<CategoryEdit />)

            case 3:

                return (<RecordList />)

            case 4:

                return (<ScheduleAdd />)


            case 5:

                return (<Chart />)
        }
    }


    return (

        <SafeAreaView>

            <Stack.Screen
                options={{
                    headerStyle: { backgroundColor: 'rgb(250, 250, 250)', height: 50 },
                    headerShadowVisible: false,
                    headerBackVisible: false,
                    title: '',
                    headerLeft: () => (
                        <TouchableOpacity
                            onPress={() => setIsContent(!isContent)}
                        >
                            <Icon
                                name="bars"
                                size={25}
                                color="black"
                                style={{ marginLeft: 15 }}
                            />
                        </TouchableOpacity>
                    )
                }}
            />



            {isContent && (

                <View
                    visible={isContent}
                    animationType="fade"
                    transparent={true}
                >
                    <ContentPage />
                </View>

            )}


            <View>

                {DisplayContent()}

            </View>



        </SafeAreaView>
    )
}

export default Home