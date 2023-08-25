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
            <h1 className="font-bold text-3xl mt-8  text-white uppercase" > Habits </h1>
            <div class="w-20 h-1 border-b-4 border-yellow-400 rounded-2xl mb-12 m-auto"></div>
            <div>
                <button className=" text-center mt-2 text-white text-base p-2 rounded-xl hover:bg-white
   hover:text-black dark:bg-red-600" onClick={handleFormShow} >Add New Habit</button>
            </div>

            {
                show && <HabitForm />
            }

            {<EditHabit />}

            <div className="flex gap-2 mt-8 justify-center" >
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