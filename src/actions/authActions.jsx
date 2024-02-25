export const login = (email, password) => ({
    type: "LOGIN",
    payload: { email, password },
});

export const signup = (email, password) => ({
    type: "SIGNUP",
    payload: { email, password },
});
