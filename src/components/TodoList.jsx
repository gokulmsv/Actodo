
import TodoItem from "./TodoItem";

function TodoList(props) {
    
    let setActivityArr = props.setActivityArr
    let activityArr = props.activityArr
    return (
        <div className="bg-[#C7B0C2] border rounded-md py-3 px-5 border-none flex-grow">
            <h1 className="text-2xl font-medium">Today's Activity</h1>
            
            {/* Display a fallback message if no activities are present */}
            {activityArr.length === 0 && <p>You haven't added any activity</p>}

            {/* Map through activities and render TodoItem components */}
            {activityArr.map((item, index) => (
                <TodoItem
                    key={item.id} // Ensure a unique key for each item
                    item={item}
                    index={index + 1} // Pass 1-based index to TodoItem
                    activityArr={activityArr}
                    setActivityArr={setActivityArr}
                />
            ))}
        </div>
    );
}

export default TodoList;
