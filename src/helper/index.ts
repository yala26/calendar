import {RandomTimes} from "../types";
import {DateObject} from "react-native-calendars";
import {format} from "date-fns";

export const onDayChange = () => {
    let randomTimes: Array<RandomTimes> = [];
    const arrayLength = Math.floor(Math.random() * (10 - 1) + 1);
    for (let i = 0; i < arrayLength; i++) {
        randomTimes.push({id: i, randomTime: getRandomTime()});
    }
    return randomTimes;
}

const getRandomTime = () => {
    const r = Math.floor(Math.random() * 1440);
    const HH = pad(1 + (Math.floor(r / 60) % 12));
    const MM = pad(r % 60);

    return `${HH}:${MM}`;
}

const pad = (number: string | number) => {
    return ((number < 10) ? "0" : "") + number.toString();
}

export const decreaseMonth = (selectedDay: DateObject) => {
    const year = selectedDay.month - 1 >= 0 ? selectedDay.year : selectedDay.year - 1;
    const month = selectedDay.month - 1 >= 0  ? selectedDay.month - 1 : 11;
    const dateString = format(new Date(year, month, selectedDay.day), "yyy-MM-dd");
    return {...selectedDay, month: month, year: year, dateString: dateString };
}

export const increaseMonth = (selectedDay: DateObject) => {
    const year = selectedDay.month + 1 <= 12 ? selectedDay.year : selectedDay.year + 1;
    const month = selectedDay.month + 1 <= 12  ? selectedDay.month + 1 : 0;
    const dateString = format(new Date(year, month, selectedDay.day), "yyy-MM-dd");
    return {...selectedDay, month: month, year: year, dateString: dateString };
}
