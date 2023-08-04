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
            <u>
                <h1>Habit Details</h1>
            </u>
            <div className="habitContainer" >
                <HabitCard habit={habitDetails} singleHabit />
            </div>
        </>
    )
}