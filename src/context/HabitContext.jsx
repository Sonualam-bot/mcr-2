import { createContext, useReducer } from "react";
import { HabitReducer, initialState } from "../reducer/HabitReducer";

export const HabitContext = createContext();

export const HabitContextProvider = ({ children }) => {
    const [state, dispatch] = useReducer(HabitReducer, initialState);


    const handleFormShow = () => {
        dispatch({ type: "SHOW_FORM", payload: !state.show })
    }
    const handleFormClose = () => {
        dispatch({ type: "CLOSE_FORM", payload: false })
    }


    const handleAddHabit = (e) => {
        const { name, value } = e.target;

        dispatch({
            type: "ADD_HABIT_INPUT",
            payload: {
                ...state.addHabit,
                [name]: value,
            },
        });
    };

    const handleEditValue = (e) => {
        const { name, value } = e.target;

        dispatch({
            type: "EDIT_HABIT_VALUE",
            payload: {
                ...state.editingHabit,
                [name]: value
            }
        })
    }


    const handleSaveHabit = (page) => {

        const newArray = page ? state.habitDb.map((habit, index) => index === +state.editHabitIndex ?
            { ...state.editingHabit } : habit) :
            state.habitDb.concat(state.addHabit)


        dispatch({
            type: "SAVE_HABIT",
            payload: {
                saveNewHabit: newArray
            }
        })

    }



    const deleteHabit = (index) => {
        const deleteHabit = state.habitDb.filter((habit, i) => i !== index)
        dispatch({
            type: "DELETE_HABIT",
            payload: {
                delete: deleteHabit
            }
        })
    }
    const archieveHabit = (index) => {
        const archievedHabit = state.habitDb[index]; // Get the archived habit
        const updatedHabitDb = state.habitDb.filter((_, i) => i !== index); // Remove the habit from habitDb

        dispatch({
            type: "ARCHIEVE_HABIT",
            payload: {
                habitDb: updatedHabitDb,
                archieve: [...state.archieveHabitDb, archievedHabit], // Add the habit to archieveHabit
            }
        });

    }

    const deleteFromArchieve = (index) => {
        const updatedArchievedHabit = state.archieveHabitDb.filter((habit, i) => i !== index);

        dispatch({
            type: "DELETE_FROM_ARCHIEVE",
            payload: {
                updatedArchieved: updatedArchievedHabit
            }
        })
    }


    const handleShowEditForm = () => {
        dispatch({
            type: "EDIT_FORM_OPEN",
            payload: true,
        })
    }
    const handleCloseEditForm = () => {
        dispatch({
            type: "EDIT_FORM_CLOSE",
            payload: false,
        })
    }


    const handleEditHabit = (habit, index) => {
        // console.log("yes", index)
        dispatch({
            type: "EDIT_HABIT",
            payload: {
                habit: habit,
                habitIndex: index
            }
        });

    };




    const value = {
        state,
        dispatch,
        handleFormShow,
        handleAddHabit,
        handleSaveHabit,
        handleFormClose,
        deleteHabit,
        archieveHabit,
        handleShowEditForm,
        handleCloseEditForm,
        handleEditHabit,
        handleEditValue,
        deleteFromArchieve
    }


    return (
        <HabitContext.Provider value={value} >
            {children}
        </HabitContext.Provider>
    )
}