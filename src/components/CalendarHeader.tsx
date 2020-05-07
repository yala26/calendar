import React, {FunctionComponent} from "react";
import {View, Text, TouchableOpacity} from "react-native";
import {styles} from "../styles";
import {MONTH_NAMES} from "../Constants";
import {AntDesign} from "@expo/vector-icons";
import {DateObject} from "react-native-calendars";
import {decreaseMonth, increaseMonth} from "../helper";

const CalendarHeader: FunctionComponent<ICalendarHeader> = ({setSelectedDay, selectedDay}) => {
    return (
        <View style={styles.calendarHeader}>
            <View style={styles.headerMonthRow}>
                <Text style={styles.monthText}>{MONTH_NAMES[selectedDay?.month]}</Text>
                <View style={styles.iconRow}>
                    <TouchableOpacity style={styles.leftArrow}
                                      onPress={() => setSelectedDay(decreaseMonth(selectedDay))}>
                        <AntDesign name="left" size={22} color="black"/>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => setSelectedDay(increaseMonth(selectedDay))}>
                        <AntDesign name="right" size={22} color="black"/>
                    </TouchableOpacity>

                </View>
            </View>
            <Text>{selectedDay?.year}</Text>
        </View>
    )
}

export default CalendarHeader;

interface ICalendarHeader {
    selectedDay: DateObject;
    setSelectedDay: (date: DateObject) => void;
}