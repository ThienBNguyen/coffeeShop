export default (users = [], action) => {
    switch (action.type) {
        case "FETCH_ALL":
            return action.payload;
        case "Create":
            return users;
        default:
            break;
    }
}