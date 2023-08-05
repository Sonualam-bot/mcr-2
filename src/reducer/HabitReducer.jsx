import { Habit } from "../utils/Utils";

export const initialState = {
    habitDb: Habit,
    show: false,
    addHabit: {
        name: "",
        repeat: "",
        goal: "",
        timeOfDay: "",
        startDate: ""

    },
    archieveHabit: [],
    toggleEditForm: false,
    editingHabit: null,
    editHabitIndex: null

}

export const HabitReducer = (state, action) => {
    const { type, payload } = action;

    switch (type) {
        case "SHOW_FORM":
            return { ...state, show: payload }
        case "CLOSE_FORM":
            return { ...state, show: payload }
        case "ADD_HABIT_INPUT":
            return { ...state, addHabit: { ...payload } }
        case "SAVE_HABIT":
            return {
                ...state, habitDb: payload.saveNewHabit,
                addHabit: {
                    name: "",
                    repeat: "",
                    goal: "",
                    timeOfDay: "",
                    startDate: ""

                }
            }
        case "DELETE_HABIT":
            return { ...state, habitDb: payload.delete }
        case "ARCHIEVE_HABIT":
            return {
                ...state,
                habitDb: payload.habitDb,
                archieveHabit: payload.archieve,
            };

        case "EDIT_FORM_OPEN":
            return { ...state, toggleEditForm: payload }
        case "EDIT_FORM_CLOSE":
            return { ...state, toggleEditForm: payload }
        case "EDIT_HABIT":
            return { ...state, editingHabit: payload.habit, editHabitIndex: payload.habitIndex };
        case "SAVE_EDITED_HABIT":
            return { ...state, habitDb: payload.editedDb, editingHabit: null };
        case "EDIT_HABIT_VALUE":
            // console.log("edit habit value", payload)
            return { ...state, editingHabit: { ...payload } }
        default:
            throw new Error(`Unknown action type ${action.type}`)
    }
}