import React, {FunctionComponent} from "react";
import {Text, TouchableOpacity} from "react-native";
import {styles} from "../styles";

const RandomTimeItem: FunctionComponent<IRandomTimeItem> = ({time, id, selectedRandomTime, setSelectedRandomTime}) => {
    return (
        <TouchableOpacity
            style={[styles.randomTimeItem, id === selectedRandomTime && {backgroundColor: "#00BFFF"}]}
            onPress={() => setSelectedRandomTime(id)}>
            <Text style={[styles.randomTimeText, id === selectedRandomTime && {color: "#ffffff"}]}>{time}</Text>
        </TouchableOpacity>
    )
}

interface IRandomTimeItem {
    time: string;
    id: number;
    selectedRandomTime: number;
    setSelectedRandomTime: (id: number) => void;
}

export default RandomTimeItem;