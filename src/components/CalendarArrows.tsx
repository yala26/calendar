import React, {FunctionComponent, useState, useEffect} from "react";
import {View, Text} from "react-native";
import {Calendar, LocaleConfig, DateObject} from "react-native-calendars";
import {format} from "date-fns";
import {styles} from "../styles";
import DayComponent from "./DayComponent";
import RandomTimeItem from "./RandomTimeItem";
import {onDayChange} from "../helper";

const today = new Date();

LocaleConfig.locales["ru"] = {
    monthNames: [
        "January",
        "February",
        "March",
        "April",
        "May",
        "June",
        "July",
        "August",
        "September",
        "October",
        "November",
        "December",
    ],
    monthNamesShort: [
        "Jan.",
        "Feb.",
        "Mar.",
        "Apr.",
        "May",
        "Jun.",
        "Jul.",
        "Aug.",
        "Sep.",
        "Oct.",
        "Nov.",
        "Dec.",
    ],
    dayNames: [
        "Sunday",
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
    ],
    dayNamesShort: ["Вс", "Пн", "Вт", "Ср", "Чт", "Пт", "Сб"],
};

LocaleConfig.defaultLocale = "ru";


const CalendarArrows: FunctionComponent<{}> = () => {
    const [randomTimes, setRandomTimes] = useState(onDayChange());
    const [selectedDay, setSelectedDay] = useState({
        dateString: format(today, "yyy-MM-dd"),
    });
    const [selectedRandomTime, setSelectedRandomTime] = useState(0);
    return (
        <View style={styles.pageWrapper}>
            <View style={styles.pageHeader}>
                <Text style={styles.cancelText}>Отмена</Text>
                <Text style={styles.dateText}>Дата и Время</Text>
                <Text style={styles.doneText}>Готово</Text>
            </View>
            <Calendar
                style={styles.calendar}
                firstDay={1}
                current={selectedDay as DateObject}
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
                        header: styles.calendarHeader,
                        monthText: styles.calendarMonthText,
                        week: styles.calendarWeek,
                        dayHeader: styles.calendarDayHeader,
                    },
                }}
            />
            <View style={styles.randomTimesContainer}>
                {randomTimes.map((item) => {
                    return (
                        <RandomTimeItem key={item.id} id={item.id} time={item.randomTime} selectedRandomTime={selectedRandomTime}
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