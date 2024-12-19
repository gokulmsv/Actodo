function TodoItem({ item, index, activityArr, setActivityArr }) {
    function handleDelete(id) {
        // Filter out the item with the given id
        const updatedArr = activityArr.filter((activity) => activity.id !== id);
        setActivityArr(updatedArr); // Update the state
    }

    return (
        <div className="flex justify-between">
            <p>
                {index}. {item.activity}
            </p>
            <button
                className="text-red-500"
                onClick={() => handleDelete(item.id)} // Pass item.id to the handler
            >
                Delete
            </button>
        </div>
    );
}

export default TodoItem;
