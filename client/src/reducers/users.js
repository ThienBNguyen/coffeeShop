export default (users = [], action) => {
    switch (action.type) {
        case "FETCH_USER":
            return action.payload;
        case "CREATE":
            return [...users, action.payload];
        default:
            return users;

    }
}