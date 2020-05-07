import React, {FunctionComponent} from "react";
import {Text, TouchableOpacity} from "react-native";
import {styles} from "../styles";

const TimeCell: FunctionComponent<ITimeCell> = ({time, id, selectedRandomTime, setSelectedRandomTime}) => {
    return (
        <TouchableOpacity
            style={[styles.timeCell, id === selectedRandomTime && {backgroundColor: "#00BFFF"}]}
            onPress={() => setSelectedRandomTime(id)}>
            <Text style={[styles.randomTimeText, id === selectedRandomTime && {color: "#ffffff"}]}>{time}</Text>
        </TouchableOpacity>
    )
}

interface ITimeCell {
    time: string;
    id: number;
    selectedRandomTime: number;
    setSelectedRandomTime: (id: number) => void;
}

export default TimeCell;