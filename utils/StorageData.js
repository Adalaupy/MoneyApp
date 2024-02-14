import FontAwesome from "react-native-vector-icons/FontAwesome"
import Ionicons from "react-native-vector-icons/Ionicons"
import MaterialIcons from "react-native-vector-icons/MaterialIcons"
import Entypo from "react-native-vector-icons/Entypo"
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons"
import FontAwesome6 from "react-native-vector-icons/FontAwesome6"
import FontAwesome5 from "react-native-vector-icons/FontAwesome5"
import AntDesign from "react-native-vector-icons/AntDesign"
import Feather from "react-native-vector-icons/Feather"



export const CategoryIconList = [

    <FontAwesome name='money' color="#fa487b" size={30} />,
    <MaterialCommunityIcons name='face-woman' color="#fa487b" size={30} />,
    <FontAwesome6 name='hands-holding-child' color="#fa487b" size={30} />,
    <MaterialIcons name='elderly' color="#fa487b" size={30} />,
    <FontAwesome5 name='parking' color="#fa487b" size={30} />,
    <MaterialIcons name='pets' color="#fa487b" size={30} />,
    <FontAwesome5 name='gift' color="#fa487b" size={30} />,
    <MaterialCommunityIcons name='charity' color="#fa487b" size={30} />,
    <FontAwesome5 name='mobile-alt' color="#fa487b" size={30} />,
    <MaterialIcons name='sports-gymnastics' color="#fa487b" size={30} />,
    <MaterialCommunityIcons name='hair-dryer-outline' color="#fa487b" size={30} />,
    <FontAwesome5 name='baby' color="#fa487b" size={30} />,
    <MaterialCommunityIcons name='lipstick' color="#fa487b" size={30} />,
    <MaterialIcons name='computer' color="#fa487b" size={30} />,
    <AntDesign name='API' color="#fa487b" size={30} />,
    <AntDesign name='wifi' color="#fa487b" size={30} />,
    <Entypo name='aircraft' color="#fa487b" size={30} />,
    <Entypo name='camera' color="#fa487b" size={30} />,
    <Feather name='truck' color="#fa487b" size={30} />,
    <FontAwesome name='music' color="#fa487b" size={30} />,
    <FontAwesome name='building-o' color="#fa487b" size={30} />,
    <FontAwesome name='graduation-cap' color="#fa487b" size={30} />,
    <FontAwesome name='car' color="#fa487b" size={30} />,
    <FontAwesome name='server' color="#fa487b" size={30} />,
    <FontAwesome5 name='baseball-ball' color="#fa487b" size={30} />,
    <FontAwesome5 name='dumbbell' color="#fa487b" size={30} />,

]




export const CategoryDefault = [

    {
        "name": "Breakfast",
        "isActive": true,
        "Icon_elem": <MaterialIcons name="free-breakfast" color="#fa487b" size={30} />
    },
    {
        "name": "Lunch",
        "isActive": true,
        "Icon_elem": <Ionicons name="fast-food" color="#fa487b" size={30} />
    },
    {
        "name": "Dinner",
        "isActive": true,
        "Icon_elem": <MaterialIcons name="dinner-dining" color="#fa487b" size={30} />
    },
    {
        "name": "Transportation",
        "isActive": true,
        "Icon_elem": <MaterialIcons name="emoji-transportation" color="#fa487b" size={30} />
    },
    {
        "name": "Drink",
        "isActive": true,
        "Icon_elem": <Entypo name="drink" color="#fa487b" size={30} />
    },
    {
        "name": "Snack",
        "isActive": true,
        "Icon_elem": <MaterialCommunityIcons name="food-hot-dog" color="#fa487b" size={30} />
    },
    {
        "name": "Housing",
        "isActive": true,
        "Icon_elem": <FontAwesome6 name="house-chimney-window" color="#fa487b" size={30} />
    },
    {
        "name": "Daily Use",
        "isActive": true,
        "Icon_elem": <FontAwesome name="shopping-cart" color="#fa487b" size={30} />
    },
    {
        "name": "Entertainment",
        "isActive": true,
        "Icon_elem": <FontAwesome name="gamepad" color="#fa487b" size={30} />
    },
    {
        "name": "Shopping",
        "isActive": true,
        "Icon_elem": <FontAwesome name="shopping-bag" color="#fa487b" size={30} />
    },

    {
        "name": "Education",
        "isActive": false,
        "Icon_elem": <Entypo name="open-book" color="#fa487b" size={30} />
    },
    {
        "name": "Utilities",
        "isActive": false,
        "Icon_elem": <FontAwesome6 name="file-invoice-dollar" color="#fa487b" size={30} />
    },
    {
        "name": "Clothing",
        "isActive": false,
        "Icon_elem": <Ionicons name="shirt-outline" color="#fa487b" size={30} />
    },
    {
        "name": "Medical",
        "isActive": false,
        "Icon_elem": <FontAwesome6 name="suitcase-medical" color="#fa487b" size={30} />
    },

]





export const AlertAmt = 190





// For testing
export const Init_Money = [


    {
        date: '2024-02-02',

        event: [
            {
                category: "Lunch",
                icon: <Ionicons name="fast-food" color="#fa487b" size={30} />,
                amount: 100,
                note: "Breakfast",
                Type: 1,
                LogTime: "2/1/2024, 11:04:54 AM",
            },
            {
                category: "Transportation",
                icon: <MaterialIcons name="emoji-transportation" color="#fa487b" size={30} />,
                amount: 20,
                note: "by bus",
                Type: 1,
                LogTime: "2/1/2024, 11:04:54 AM",
            }
        ]
    },

    {
        date: '2024-02-03',

        event: [
            {
                category: "Breakfast",
                icon: <MaterialIcons name="free-breakfast" color="#fa487b" size={30} />,
                amount: 200,
                note: "Lunch",
                Type: 1,
                LogTime: "2/2/2024, 11:04:54 AM",
            },
            {
                category: "Salary",
                icon: <MaterialIcons name="attach-money" color="#fa487b" size={30} />,
                amount: 200,
                note: "Salary",
                Type: 2,
                LogTime: "2/2/2024, 11:04:54 AM",
            }
        ]
    }

]


export const ScheduleData = [
    {
        item: "Salary",
        period: "Monthly",
        every: [2, 23, 50],
        type: "Income",
        category: "Salary",
        Icon: <MaterialIcons name="attach-money" color="#fa487b" size={30} />,
        note: "5th of month, 23:50 PM",
        amount: 20000,
        isActive: true,
    },
    {
        item: "Master degree",
        period: "Yearly",
        every: [5, 10, 23, 40],
        type: "Expense",
        category: "Education",
        Icon: <Entypo name="open-book" color="#fa487b" size={30} />,
        note: "5th of October, 23:40 PM",
        amount: 5000,
        isActive: true,
    },
    {
        item: "Spotify",
        period: "Monthly",
        every: [5, 0, 0],
        type: "Expense",
        category: "Music",
        Icon: <FontAwesome name='music' color="#fa487b" size={30} />,
        note: "5th of month, 00:00 AM",
        amount: 100,
        isActive: true,
    },
    {
        item: "Book Party Room",
        period: "ad-hoc",
        every: [1, 5, 11, 0],
        type: "Expense",
        category: "Enterainment",
        Icon: <FontAwesome name="gamepad" color="#fa487b" size={30} />,
        note: "1st of May, 11:00 AM",
        amount: 100,
        isActive: true,
    },
    {
        item: "Car rental",
        period: "Weekly",
        every: [6, 11, 0],
        type: "Expense",
        category: "Transportation",
        Icon: <MaterialIcons name="emoji-transportation" color="#fa487b" size={30} />,
        note: "test",
        amount: 200,
        isActive: true,
    },

]





