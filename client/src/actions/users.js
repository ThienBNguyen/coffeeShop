import * as api from "../api"

//Action Creator
export const getUsers = () => async (dispatch) => {
    try {
        const { data } = await api.fetchUser();
        dispatch({ type: "FETCH_ALL", payload: data })
    }
    catch (error) {
        console.log(error.message)
    }

}
export const createUser = (user) => async (dispatch) => {
    try {
        const { data } = await api.createUser(user);
        console.log(data)
        dispatch({ type: "CREATE", payload: data })
    } catch (error) {
        console.group(error);
    }
}