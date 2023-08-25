import { useContext } from "react";
import { NavLink } from "react-router-dom";
import { HabitContext } from "../context/HabitContext";
import { BsFillArchiveFill, BsArchive } from "react-icons/bs"
import { RiDeleteBinLine } from "react-icons/ri"
import { FiEdit } from "react-icons/fi"
import { toast } from "react-hot-toast";

export const HabitCard = ({ habit, index, singleHabit, archieve }) => {
    const { state: { archieveHabitDb }, deleteHabit, archieveHabit, handleEditHabit,
        handleShowEditForm, deleteFromArchieve } = useContext(HabitContext)
    const { name, repeat, goal, timeOfDay, startDate } = habit;


    return (
        <>
            <div key={index} className="flex flex-col justify-start  p-3 text-white shadow-xl bg-slate-950 w-60 rounded-lg text-lg gap-5" >
                <NavLink className="text-indigo-800" to={`/singleHabit/${name}`} >
                    <h1 className="text-xl font-bold capitalize mb-0 m-auto text-center"> {name} </h1>
                    <div class="w-14 h-1 border-b-4 border-yellow-400 rounded-2xl m-auto"></div>
                </NavLink>

                <p className="text-left" > Repeat : {repeat} </p>
                <p className="text-left" > Goal: {goal} </p>
                {singleHabit && <p className="text-left" > Time of Day : {timeOfDay} </p>}
                {singleHabit && <p className="text-left" > Start Date : {startDate} </p>}
                {!singleHabit &&
                    <div className="flex m-1  gap-5 text-center space-x-10 ">
                        {!archieve && <button onClick={() => {
                            archieveHabit(index)

                        }}  >

                            <BsArchive className="text-cyan-600" />

                        </button>}
                        {archieve && <button onClick={() => {
                            deleteFromArchieve(index)

                        }}  >

                            <BsFillArchiveFill className="text-cyan-900" />

                        </button>}
                        {!archieve && <button onClick={() => {
                            deleteHabit(index)
                            toast.success("Deleted ")
                        }} > <RiDeleteBinLine className="text-red-700" /> </button>}
                        {!archieve && <button onClick={() => {
                            handleEditHabit(habit, index)
                            handleShowEditForm()
                        }} > <FiEdit className="text-blue-600" /> </button>}
                    </div>}
            </div>
        </>
    )
}