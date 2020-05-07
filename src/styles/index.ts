import {StyleSheet} from "react-native";

const PADDING = 16;

export const styles = StyleSheet.create({
    pageWrapper: {
        backgroundColor: "#F0F8FF",
        flex: 1,
        paddingLeft: PADDING,
        paddingRight: PADDING,
        paddingTop: 40,
    },
    pageHeader: {
        flexDirection: "row",
        justifyContent: "space-between",
        paddingBottom: 40,
    },
    headerMonthRow: {
        flexDirection: "row",
        justifyContent: "space-between",
    },
    iconRow: {
        paddingTop: 2,
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
    },
    hiddenCalendarHeader: {
        height: 0,
        opacity: 0
    },
    calendarHeader: {
        paddingLeft: 21,
        paddingRight: PADDING,
        paddingTop: 10,
        paddingBottom: 25,
        justifyContent: "center",
    },
    calendarMonthText: {
        color: "#303030",
        fontSize: 20,
    },
    calendarWeek: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        paddingLeft: PADDING,
        paddingRight: PADDING,
        paddingBottom: 20,
        fontSize: 16,
    },
    calendarDayHeader: {
        fontSize: 15,
        opacity: 0.4,
        width: 20,
        textAlign: "center",
    },
    calendar: {
        paddingTop: 10,
        paddingBottom: 10,
        backgroundColor: "#ffffff",
        borderRadius: 16,
        shadowColor: "#87CEFA",
        shadowOffset: {
            width: 0,
            height: 6,
        },
        borderBottomWidth: 0.1,
        borderRightWidth: 0.1,
        shadowOpacity: 0.37,
        shadowRadius: 7.49,
        elevation: 12,
    },
    dateText: {
        fontSize: 19,
        lineHeight: 23,
        fontWeight: "bold",
        color: "#303030",
    },
    cancelText: {
        fontSize: 17,
        lineHeight: 20,
        fontWeight: "600",
        color: "#303030",
    },
    doneText: {
        fontSize: 17,
        lineHeight: 20,
        fontWeight: "600",
        color: "#00BFFF"
    },
    dayButton: {
        justifyContent: "center",
        alignItems: "center",
        marginTop: -18,
        width: 44,
        height: 44,
        borderRadius: 32,
    },
    dayNumber: {
        textAlign: "center",
        color: "#303030",
        fontSize: 16,
    },
    randomTimesContainer: {
        flexDirection: "row",
        flexWrap: "wrap",
        marginTop: 20,
        marginLeft: -PADDING,
    },
    timeCell: {
        marginLeft: PADDING,
        width: 80,
        marginBottom: 15,
        backgroundColor: "#fff",
        padding: 10,
        borderRadius: 4,
        shadowColor: "#87CEFA",
        shadowOffset: {
            width: 0,
            height: 6,
        },
        borderBottomWidth: 0.1,
        borderRightWidth: 0.1,
        shadowOpacity: 0.37,
        shadowRadius: 7.49,
        elevation: 12,
    },
    randomTimeText: {
        textAlign: "center",
        fontSize: 16,
        lineHeight: 19,
        color: "#00BFFF",
        fontWeight: "bold",
    },
    footer: {
        flex: 1,
        justifyContent: "flex-end",
        paddingBottom: 30,
        paddingLeft: 35,
        paddingRight: 35,
    },
    footerText: {
        textAlign: "center",
    },
    monthText: {
        fontSize: 24,
        lineHeight: 29,
        fontWeight: "bold",
        color: "#303030",
    },
    leftArrow: {
        marginRight: 15,
    }
})
