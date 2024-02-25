const initialState = {
    tasks: [],
};

const taskReducer = (state = initialState, action) => {
    switch (action.type) {
        case "ADD_TASK":
            return {
                ...state,
                tasks: [...state.tasks, action.payload],
            };
            case "UPDATE_TASK":
                return {
                    ...state,
                    tasks: state.tasks.map(task => {
                    if (task.id === action.payload.id) {
                        return { ...task, ...action.payload.task };
                    }
                        return task;
                    }),
                };
                case "DELETE_TASK": 
                return {
                    ...state,
                    tasks: state.tasks.filter(task => task.id !== action.payload),
                };
                default:
                    return state;
    }
};

export default taskReducer;