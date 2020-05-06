import {RandomTimes} from "../types";

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

    return `${HH}: ${MM}`;
}

const pad = (number: string | number) => {
    return ((number < 10) ? "0" : "") + number.toString();
}
