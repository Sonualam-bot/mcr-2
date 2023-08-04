import { useContext } from "react"
import { HabitContext } from "../context/HabitContext"
import { HabitForm } from "./HabitForm"

export const EditHabit = () => {
    const { state: { toggleEditForm } } = useContext(HabitContext)
    return (
        <>
            <div>
                {
                    toggleEditForm && <HabitForm editpage />
                }

            </div>
        </>
    )
}