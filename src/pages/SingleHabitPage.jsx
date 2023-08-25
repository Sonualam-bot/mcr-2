import { useContext } from "react";
import { useParams } from "react-router"
import { HabitContext } from "../context/HabitContext";
import { HabitCard } from "./HabitCard";

import "./Habit.css"

export const SingleHabitPage = () => {
    const { habitIndex } = useParams();
    const { state: { habitDb } } = useContext(HabitContext)

    const habitDetails = habitDb?.find((habit) => habit.name === habitIndex)

    return (
        <>

            <h1 className="font-bold text-3xl mt-8  text-white uppercase">Habit Details</h1>
            <div class="w-40 h-1 border-b-4 border-yellow-400 rounded-2xl mb-12 m-auto"></div>

            <div className="flex justify-center m-auto" >
                <HabitCard habit={habitDetails} singleHabit />
            </div>
        </>
    )
}