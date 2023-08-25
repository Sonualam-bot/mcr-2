import { useContext } from "react"
import { RxCross1 } from 'react-icons/rx'
import { HabitContext } from "../context/HabitContext"
import { toast } from "react-hot-toast";

export const HabitForm = ({ editpage }) => {
    const { handleFormShow, handleAddHabit, state: { addHabit, editingHabit }, handleSaveHabit, handleFormClose, handleCloseEditForm, handleEditValue } = useContext(HabitContext);



    //this is for the input box content
    const formHabitEdit = editpage ? editingHabit : addHabit

    // this is for enabling the input boxes and making it editable
    const addEditAction = editpage ? handleEditValue : handleAddHabit;

    const handleSavingHabitFormAction = () => {
        if (formHabitEdit.name.trim() === "" || formHabitEdit.repeat.trim() === "" || formHabitEdit.goal.trim() === "" || formHabitEdit.timeOfDay.trim() === "" || formHabitEdit.startDate.trim() === "") {
            toast.error("Empty Fields Detected")
        } else {
            handleSaveHabit(editpage);
            handleFormClose();
            toast.success("New Habit Updated")
            handleCloseEditForm();
        }
    }

    return (
        <>
            <div className="modalOverlay" >
                <div className="habitFormData p-3 flex gap-2 " >
                    <div className="habitFormHeader p-3 flex justify-between mb-0">
                        <h3 className="font-bold mb-0">New Habit</h3>
                        {!editpage && <RxCross1 className="cursor-pointer" onClick={handleFormShow} />}
                        {editpage && <RxCross1 className="cursor-pointer" onClick={handleCloseEditForm} />}

                    </div>
                    <div class="w-full h-1 border-b-4 border-yellow-400 rounded-2xl  m-auto mb-1"></div>

                    <label className="font-bold" htmlFor="name" >Name</label>
                    <input className="placeholder:italic border-stone-500 p-1 bg-slate-700 " type="text" placeholder="Enter habit name" name="name" value={formHabitEdit?.name || ""} onChange={addEditAction} />
                    <div className="flex gap-4"  >
                        <div className="flex flex-col w-full">
                            <label className="font-bold" htmlFor="repeat" >Repeat</label>
                            <select className="bg-slate-900 p-1 rounded-sm" onChange={addEditAction} name="repeat" value={formHabitEdit?.repeat || ""} >
                                <option>Select</option>
                                <option value="daily" >Daily</option>
                                <option value="weekly" >Weekly</option>
                                <option value="monthly" >Monthly</option>
                            </select>
                        </div>
                        <div className="flex flex-col w-full">
                            <label className="font-bold" htmlFor="goal" >Goal</label>
                            <select className="bg-slate-900 p-1 rounded-sm" onChange={addEditAction} name="goal" value={formHabitEdit?.goal || ""}>
                                <option>Select</option>
                                <option value="1 Times Daily" >1 Times Daily</option>
                                <option value="2 Times Daily " >2 Times Daily</option>
                                <option value="3 Times Daily" >3 Times Daily</option>
                            </select>
                        </div>
                    </div>

                    <div className="flex gap-4"  >
                        <div className="flex flex-col w-full">
                            <label className="font-bold" htmlFor="timeOfDay" >Time Of Day</label>
                            <select className="bg-slate-900 p-1 rounded-sm" onChange={addEditAction} name="timeOfDay" value={formHabitEdit?.timeOfDay || ""}>
                                <option>Select</option>
                                <option value="anytime" >Any Time</option>
                                <option value="one hour before" >One Hour before</option>
                                <option value="two hour before" >Two Hour before</option>
                            </select>
                        </div>
                        <div className="flex flex-col w-full">
                            <label className="font-bold" htmlFor="startDate" >Start Date</label>
                            <select className="bg-slate-900 p-1 rounded-sm" onChange={addEditAction} name="startDate" value={formHabitEdit?.startDate || ""} >
                                <option>Select</option>
                                <option value="today" >Today</option>
                                <option value="tomorrow" >Tomorrow</option>
                                <option value="day after tomorrow" > Day After Tomorrow</option>
                            </select>
                        </div>
                    </div>
                    {/* {!isEditing && */}
                    <button className="bg-sky-600 mt-4 h-8 font-bold rounded-sm" onClick={handleSavingHabitFormAction} >Save</button>
                    {/* {isEditing && <button className="saveBtn" onClick={handleSaveEditedHabit}  >Update</button>} */}
                </div>
            </div>
        </>
    )
}