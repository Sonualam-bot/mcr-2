import { useContext } from "react";
import { NavLink } from "react-router-dom";
import { HabitContext } from "../context/HabitContext";

export const HabitCard = ({ habit, index, singleHabit }) => {
    const { deleteHabit, archieveHabit, handleEditHabit,
        handleShowEditForm } = useContext(HabitContext)
    const { name, repeat, goal, timeOfDay, startDate } = habit;
    return (
        <>
            <div key={index} className="habitDiv" >
                <NavLink to={`/singleHabit/${name}`} >
                    <h2> {name} </h2>
                </NavLink>
                <p> Repeat : {repeat} </p>
                <p> Goal: {goal} </p>
                {singleHabit && <p> Time of Day : {timeOfDay} </p>}
                {singleHabit && <p> Start Date : {startDate} </p>}
                {!singleHabit &&
                    <div className="habitDetailsSpecialBtns">
                        <button onClick={() => archieveHabit(name)}  >Archieve</button>
                        <button onClick={() => deleteHabit(name)} >Delete</button>
                        <button onClick={() => {
                            handleEditHabit(habit, index)
                            handleShowEditForm()
                        }} >Edit</button>
                    </div>}
            </div>
        </>
    )
}