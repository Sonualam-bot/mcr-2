import { useContext } from "react"
import { HabitContext } from "../context/HabitContext"
import { HabitCard } from "./HabitCard"

export const ArchievePage = () => {
    const { state: { archieveHabit } } = useContext(HabitContext)
    return (
        <>
            <h3>YOur Archieve</h3>
            <div className="habitContainer">

                {
                    archieveHabit.map((habit, index) => {
                        return (
                            <HabitCard habit={habit} index={index} key={index} />
                        )
                    })
                }
            </div>
        </>
    )
}