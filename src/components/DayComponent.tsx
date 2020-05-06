import React, {FunctionComponent} from "react";
import {Text, TouchableOpacity} from "react-native";
import {DateObject} from "react-native-calendars";
import {format} from "date-fns";
import {styles} from "../styles";
import {onDayChange} from "../helper";
import {RandomTimes} from "../types";

const today = new Date();

const DayComponent: FunctionComponent<IDayComponent> = ({date, selectedDay, setSelectedDay, setRandomTimes}) => {
    const isDaySelected = date.dateString === selectedDay.dateString;
    const isToday = format(today, "yyy-MM-dd") === date.dateString ;
    return (
        <TouchableOpacity
            style={[
                styles.dayButton,
                isDaySelected ? {backgroundColor: "#00BFFF"} : isToday && {backgroundColor: "#F0F8FF"},
            ]}
            onPress={() => {
                setSelectedDay(date);
                setRandomTimes(onDayChange())
            }}
        >
            <Text
                style={[styles.dayNumber, isDaySelected && {color: "#ffffff"}]}
            >
                {date.day}
            </Text>
        </TouchableOpacity>
    );
};

export default DayComponent;

interface IDayComponent {
    date: DateObject;
    selectedDay: DateObject;
    setSelectedDay: (date: DateObject) => void;
    setRandomTimes: (date: Array<RandomTimes>) => void;
}
