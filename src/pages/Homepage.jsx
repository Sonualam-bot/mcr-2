import { useContext } from "react"
import { HabitContext } from "../context/HabitContext"

import "./Habit.css"
import { HabitForm } from "./HabitForm"
import { HabitCard } from "./HabitCard"
import { EditHabit } from "./EditHabit"

export const Homepage = () => {
    const { state: { habitDb, show }, handleFormShow } = useContext(HabitContext)
    return (
        <>
            <h2> Adding Habit </h2>
            <div>
                <button onClick={handleFormShow} >Add Habit</button>
            </div>

            {
                show && <HabitForm />
            }

            {<EditHabit />}

            <div className="habitContainer" >
                {
                    habitDb.map((habit, index) => {

                        return (
                            <HabitCard habit={habit} index={index} key={index} />
                        )
                    })
                }

            </div>
        </>
    )
}