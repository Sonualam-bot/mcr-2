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
                <div className="habitFormData" >
                    <div className="habitFormHeader">
                        <h3>New Habit</h3>
                        {!editpage && <RxCross1 onClick={handleFormShow} />}
                        {editpage && <RxCross1 onClick={handleCloseEditForm} />}
                    </div>

                    <label htmlFor="name" >Name</label>
                    <input type="text" placeholder="enter habit name" name="name" value={formHabitEdit?.name || ""} onChange={addEditAction} />
                    <div className="habitFormSpecial"  >
                        <div>
                            <label htmlFor="repeat" >Repeat</label>
                            <select onChange={addEditAction} name="repeat" value={formHabitEdit?.repeat || ""} >
                                <option>Select</option>
                                <option value="daily" >Daily</option>
                                <option value="weekly" >Weekly</option>
                                <option value="monthly" >Monthly</option>
                            </select>
                        </div>
                        <div>
                            <label htmlFor="goal" >Goal</label>
                            <select onChange={addEditAction} name="goal" value={formHabitEdit?.goal || ""}>
                                <option>Select</option>
                                <option value="1 Times Daily" >1 Times Daily</option>
                                <option value="2 Times Daily " >2 Times Daily</option>
                                <option value="3 Times Daily" >3 Times Daily</option>
                            </select>
                        </div>
                    </div>

                    <div className="habitFormSpecial" >
                        <div>
                            <label htmlFor="timeOfDay" >Time Of Day</label>
                            <select onChange={addEditAction} name="timeOfDay" value={formHabitEdit?.timeOfDay || ""}>
                                <option>Select</option>
                                <option value="anytime" >Any Time</option>
                                <option value="one hour before" >One Hour before</option>
                                <option value="two hour before" >Two Hour before</option>
                            </select>
                        </div>
                        <div>
                            <label htmlFor="startDate" >Start Date</label>
                            <select onChange={addEditAction} name="startDate" value={formHabitEdit?.startDate || ""} >
                                <option>Select</option>
                                <option value="today" >Today</option>
                                <option value="tomorrow" >Tomorrow</option>
                                <option value="day after tomorrow" > Day After Tomorrow</option>
                            </select>
                        </div>
                    </div>
                    {/* {!isEditing && */}
                    <button className="saveBtn" onClick={handleSavingHabitFormAction} >Save</button>
                    {/* {isEditing && <button className="saveBtn" onClick={handleSaveEditedHabit}  >Update</button>} */}
                </div>
            </div>
        </>
    )
}