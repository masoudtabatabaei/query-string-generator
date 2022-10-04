export const InitialState = {
    query: "",
    page: 1,
    size: 10
};

export const UPDATE_QUERY = {type: "UPDATE_QUERY", data:{ query:InitialState.query }};
export const UPDATE_PAGE = {type: "UPDATE_PAGE", data:{ pageNo:InitialState.page }};

export const reducer = (state, action) => {
    switch(action.type) {
        case "UPDATE_QUERY":
            return {...state , query: action.data.query};
        case "UPDATE_PAGE":
            return {...state , page: action.data.pageNo}
        default:
            return state;
    }
}