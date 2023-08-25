import { useContext } from "react"
import { HabitContext } from "../context/HabitContext"
import { HabitCard } from "./HabitCard"

export const ArchievePage = () => {
    const { state: { archieveHabitDb } } = useContext(HabitContext)

    return (
        <>
            <h1 className="text-xl font-bold capitalize  text-center text-white mt-6 ">Archieved Habits</h1>
            <div class="w-32 h-1 border-b-4 border-yellow-400 rounded-2xl mb-12 m-auto"></div>
            <div className="habitContainer">

                {
                    archieveHabitDb.map((habit, index) => {
                        return (
                            <HabitCard habit={habit} index={index} key={index} />
                        )
                    })
                }
            </div>
        </>
    )
}