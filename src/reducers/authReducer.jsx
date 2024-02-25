const initialState = {
    user: null,
};

const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case "LOGIN":
        case "SIGNUP":
        default:
        return state;
    }
};

export default authReducer;