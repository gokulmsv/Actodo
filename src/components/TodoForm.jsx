import { useState } from "react";

function TodoForm({ activityArr, setActivityArr }) {
    const [newActivity, setNewActivity] = useState("");

    function handleChange(evt) {
        setNewActivity(evt.target.value);
    }

    function addActivity() {
        if (newActivity.trim() === "") {
            alert("Activity cannot be empty!"); // Prevent empty activity addition
            return;
        }

        setActivityArr([
            ...activityArr,
            { id: activityArr.length + 1, activity: newActivity.trim() },
        ]);
        setNewActivity(""); // Clear the input field
    }

    return (
        <div className="flex flex-col gap-3">
            <h1 className="text-3xl font-medium">Manage Activities</h1>
            <div className="flex items-center gap-2">
                <input
                    value={newActivity}
                    onChange={handleChange}
                    className="bg-white border border-black p-1 flex-grow"
                    type="text"
                    placeholder="Next Activity?"
                />
                <button
                    onClick={addActivity}
                    className="bg-black text-white p-1 border border-black"
                >
                    ADD
                </button>
            </div>
        </div>
    );
}

export default TodoForm;
