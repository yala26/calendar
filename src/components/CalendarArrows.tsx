import React, {FunctionComponent, useState} from "react";
import {View, Text, Alert} from "react-native";
import {Calendar, LocaleConfig, DateObject} from "react-native-calendars";
import {format} from "date-fns";
import {styles} from "../styles";
import DayComponent from "./DayComponent";
import TimeCell from "./TimeCell";
import {onDayChange} from "../helper";
import {RandomTimes} from "../types";
import {MONTH_NAMES, MONTH_NAMES_SHORT, DAY_NAMES, DAY_NAMES_SHORT} from "../Constants";
import CalendarHeader from "./CalendarHeader";

const today = new Date();

LocaleConfig.locales["ru"] = {
    monthNames: MONTH_NAMES,
    monthNamesShort: MONTH_NAMES_SHORT,
    dayNames: DAY_NAMES,
    dayNamesShort: DAY_NAMES_SHORT,
};

LocaleConfig.defaultLocale = "ru";

const CalendarArrows: FunctionComponent<{}> = () => {
    const [selectedDay, setSelectedDay] = useState({
        dateString: format(today, "yyy-MM-dd"),
        year: today.getFullYear(),
        month: today.getMonth(),
        day: today.getDate(),
    });
    const [randomTimes, setRandomTimes] = useState(onDayChange());
    const [selectedRandomTime, setSelectedRandomTime] = useState(0);
    return (
        <View style={styles.pageWrapper}>
            <View style={styles.pageHeader}>
                <Text style={styles.cancelText}>Отмена</Text>
                <Text style={styles.dateText}>Дата и Время</Text>
                <Text style={styles.doneText}>Готово</Text>
            </View>
            <View style={styles.calendar}>
                <CalendarHeader selectedDay={selectedDay as DateObject} setSelectedDay={setSelectedDay}/>
                <Calendar
                    firstDay={1}
                    onDayPress={(day) => Alert.alert("skjfg")}
                    current={selectedDay.dateString}
                    dayComponent={({date}) => (
                        <DayComponent
                            date={date}
                            selectedDay={selectedDay as DateObject}
                            setSelectedDay={setSelectedDay}
                            setRandomTimes={setRandomTimes}
                        />
                    )}
                    theme={{
                        "stylesheet.calendar.header": {
                            header: styles.hiddenCalendarHeader,
                            monthText: styles.calendarMonthText,
                            week: styles.calendarWeek,
                            dayHeader: styles.calendarDayHeader,
                        },
                    }}
                />
            </View>

            <View style={styles.randomTimesContainer}>
                {randomTimes.map((item: RandomTimes) => {
                    return (
                        <TimeCell key={item.id} id={item.id} time={item.randomTime}
                                        selectedRandomTime={selectedRandomTime}
                                        setSelectedRandomTime={setSelectedRandomTime}/>
                    )
                })}
            </View>
            <View style={styles.footer}>
                <Text style={styles.footerText}>Для записи выберите сначала желаемую дату, а затем и время</Text>
            </View>
        </View>
    )
}


export default CalendarArrows