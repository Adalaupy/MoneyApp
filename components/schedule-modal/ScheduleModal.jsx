import {
	View,
	Modal,
	Text,
	TextInput,
	TouchableOpacity,
	ScrollView,
	KeyboardAvoidingView,
	Platform,
} from "react-native";
import styles from "./ScheduleModal.style";
import { useStateContext } from "../../contexts/ContextProvider";
import DropDownPicker from "react-native-dropdown-picker";
import DateTimePicker from "@react-native-community/datetimepicker";
import ModalSelector from "react-native-modal-selector";
import { useEffect, useState } from "react";
import { Main_FuncList } from "../../utils/HandleEvent";
import CategoryListModal from "../category-list-modal/CategoryListModal";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";

const ScheduleModal = () => {
	const {
		isScheduleModal,
		ScheduleItem,
		setScheduleItem,
		SchedulePeriod,
		setSchedulePeriod,
		ScheduleEvery,
		setScheduleEvery,
		ScheduleType,
		setScheduleType,
		ScheduleCate,
		setScheduleCate,
		ScheduleCateIcon,
		setScheduleCateIcon,
		ScheduleNoteInput,
		setScheduleNoteInput,
		ScheduleAmountInput,
		setScheduleAmountInput,
		setisCategoryListModal,
	} = useStateContext();

	const { handle_Schedule_Cancel, handle_Schedule_Submit } = Main_FuncList();

	const GetTempTime = () => {
		if (ScheduleEvery.length > 0) {
			return [
				ScheduleEvery[ScheduleEvery.length - 2],
				ScheduleEvery[ScheduleEvery.length - 1],
			];
		} else {
			return [new Date().getHours(), new Date().getMinutes()];
		}
	};

	const WeekOption = [
		"Monday",
		"Tuesday",
		"Wednesday",
		"Thursday",
		"Friday",
		"Saturday",
		"Sunday",
	];
	const MonthOption = Array.from({ length: 12 }, (_, index) => index + 1);
	const dayOption = Array.from({ length: 31 }, (_, index) => index + 1);
	const [tempTime, setTempTime] = useState(GetTempTime());
	const [tempDate, setTempDate] = useState(ScheduleEvery.slice(-2));

	// For DropList
	const [DateList, setDateList] = useState([
		{ label: "Daily", value: "Daily" },
		{ label: "Weekly", value: "Weekly" },
		{ label: "Monthly", value: "Monthly" },
		{ label: "Yearly", value: "Yearly" },
		{ label: "Ad-hoc", value: "Adhoc" },
	]);
	const [open, setOpen] = useState(false);

	const TimePickerDisplay = () => {
		const date = new Date();

		if (ScheduleEvery.length > 0) {
			date.setHours(ScheduleEvery[ScheduleEvery.length - 2]);
			date.setMinutes(ScheduleEvery[ScheduleEvery.length - 1]);
		} else {
			date.setHours(tempTime[0]);
			date.setMinutes(tempTime[1]);
		}

		return date;
	};

	const TimePickerUpdate = (event, selectedDate) => {
		setTempTime([selectedDate.getHours(), selectedDate.getMinutes()]);
	};

	const DatePickerDisplay = () => {
		const date = new Date();

		if (SchedulePeriod == "Adhoc" && ScheduleEvery.length > 3) {
			date.setDate(ScheduleEvery[0]);
			date.setMonth(ScheduleEvery[1] - 1);
			date.setFullYear(ScheduleEvery[2]);
		}

		return date;
	};

	const DatePicker = (event, selectedDate) => {
		setTempDate([
			selectedDate.getDate(),
			selectedDate.getMonth() + 1,
			selectedDate.getFullYear(),
		]);
	};

	const FullScheduleOption = () => {
		const GenPicker = (PeriodType) => {
			let data;

			if (PeriodType == "week") {
				data = WeekOption;
			} else if (PeriodType == "month") {
				data = MonthOption;
			} else if (PeriodType == "day") {
				data = dayOption;
			}

			const GetOptions = (OptionsList) => {
				const ReturnList = OptionsList.map((item, index) => {
					return { key: index, label: item, value: index + 1 };
				});

				return ReturnList;
			};

			const InitValue = () => {
				if (tempDate.length > 0) {
					return GetOptions(data)[tempDate[0] - 1].label;
				} else {
					return "Pick a day! ";
				}
			};

			return (
				<View style={styles.DateContainer}>
					<MaterialIcons name="edit-calendar" size={30} />

					<ModalSelector
						data={GetOptions(data)}
						initValue={InitValue()}
						onChange={(option) => {
							setTempDate([option.value]);
						}}
					/>
				</View>
			);
		};

		switch (SchedulePeriod) {
			case "Weekly":
				return GenPicker("week");

			case "Monthly":
				return GenPicker("day");

			case "Yearly":
				return (
					<View style={styles.DateContainer}>
						<MaterialIcons name="edit-calendar" size={30} />
						<TextInput
							value={tempDate}
							onChange={setTempDate}
							style={styles.YearInput}
							inputMode="numeric"
							placeholder="Year"
						/>
					</View>
				);

			case "Adhoc":
				return (
					<View style={styles.DateContainer}>
						<MaterialIcons name="edit-calendar" size={30} />
						<DateTimePicker
							onChange={DatePicker}
							value={DatePickerDisplay()}
							mode="date"
						/>
					</View>
				);

			default:
				return null;
		}
	};

	useEffect(() => {
		FullScheduleOption();
		TimePickerDisplay();
		setTempTime(GetTempTime());
		setTempDate([]);
	}, [SchedulePeriod]);

	useEffect(() => {
		if (tempDate.length > 0 || SchedulePeriod == "Daily") {
			const NewEvery = [...tempDate, ...tempTime];

			setScheduleEvery(NewEvery);
			TimePickerDisplay();
		}
	}, [tempTime, tempDate]);

	return (
		<Modal
			visible={isScheduleModal}
			animationType="fade"
			avoidKeyboard={true}
			nestedScrollEnabled={true}
		>
			<ScrollView style={styles.container}>
				{/* Item Title */}
				<View style={styles.ItemNameContainer}>
					<TextInput
						style={styles.ItemNameText}
						placeholder="Schedule Item......."
						value={ScheduleItem}
						onChangeText={setScheduleItem}
					/>
				</View>

				{/* Type */}
				<View style={styles.TypeContainer}>
					<TouchableOpacity
						style={styles.TypeBtn("Income", ScheduleType)}
						onPress={() => setScheduleType("Income")}
					>
						<Text style={styles.TypeText("Income", ScheduleType)}>
							Income
						</Text>
					</TouchableOpacity>

					<TouchableOpacity
						style={styles.TypeBtn("Expense", ScheduleType)}
						onPress={() => setScheduleType("Expense")}
					>
						<Text style={styles.TypeText("Expense", ScheduleType)}>
							Expense
						</Text>
					</TouchableOpacity>
				</View>

				{/* Category */}
				<View style={styles.CateContainer}>
					<TouchableOpacity
						style={styles.flatlistBtn(ScheduleCate, ScheduleCate)}
						onPress={() => {
							setisCategoryListModal(true);
						}}
					>
						{ScheduleCateIcon}
						<Text>{ScheduleCate}</Text>
					</TouchableOpacity>

					<CategoryListModal
						setCate={setScheduleCate}
						setCateIcon={setScheduleCateIcon}
						currentCate={ScheduleCate}
					/>
				</View>

				{/* Schedule Period Picker */}
				<View style={styles.ScheduleContainer}>
					<DropDownPicker
						style={{ borderColor: "#a8a8a8" }}
						open={open}
						value={SchedulePeriod}
						items={DateList}
						setOpen={setOpen}
						setValue={setSchedulePeriod}
						setItems={setDateList}
						placeholder="Pick a Date Period"
					/>

					<View style={styles.OptionsContainer}>
						{FullScheduleOption()}
					</View>

					<View style={styles.DateContainer}>
						<MaterialIcons name="timer" size={30} />
						<DateTimePicker
							onChange={TimePickerUpdate}
							value={TimePickerDisplay()}
							mode="time"
						/>
					</View>
				</View>
				<KeyboardAvoidingView
					behavior={Platform.OS === "ios" ? "padding" : "height"}
				>
					{/* Notes */}
					<View style={styles.NoteContainer}>
						<TextInput
							style={styles.YearInput}
							value={ScheduleNoteInput}
							onChangeText={setScheduleNoteInput}
							placeholder="Add your notes here......"
						/>
					</View>

					{/* Amount */}

					<View style={styles.NoteContainer}>
						<TextInput
							style={styles.YearInput}
							value={ScheduleAmountInput.toString()}
							onChangeText={setScheduleAmountInput}
							inputMode="numeric"
							placeholder="Amount $$"
						/>
					</View>

					{/* Button */}
					<View style={styles.BtnContainer}>
						<TouchableOpacity
							style={styles.LeftBtn}
							onPress={() => {
								handle_Schedule_Cancel();
							}}
						>
							<Text style={styles.LeftTxt}>Cancel</Text>
						</TouchableOpacity>

						<TouchableOpacity
							style={styles.LeftBtn}
							onPress={() => {
								handle_Schedule_Submit();
							}}
						>
							<Text style={styles.LeftTxt}>Submit</Text>
						</TouchableOpacity>
					</View>
				</KeyboardAvoidingView>
			</ScrollView>
		</Modal>
	);
};

export default ScheduleModal;
