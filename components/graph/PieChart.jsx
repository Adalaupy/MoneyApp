import { View, Dimensions } from 'react-native'
import { PieChart } from 'react-native-chart-kit'




const PieChartElem = ({ PieChartData }) => {


    return (

        <View >



            {PieChartData.length > 0 && (

                <PieChart
                    data={PieChartData}
                    width={Dimensions.get('window').width}
                    height={220}
                    chartConfig={{
                        backgroundGradientFrom: '#1E2923',
                        backgroundGradientTo: '#08130D',
                        color: (opacity = 1) => `rgba(26, 255, 146, ${opacity})`,
                        strokeWidth: 2,
                        propsForLabels: {
                            fontSize: 12,
                            fontWeight: "bold"
                        }
                    }}
                    accessor={"Accum_Amt"}
                    backgroundColor={"transparent"}
                />
            )}



        </View>

    )
}

export default PieChartElem