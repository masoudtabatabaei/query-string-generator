export const InitialState = {
    query: "",
    passQuery: new Date().getTime(),
    page: 1,
    size: 10
};

export const UPDATE_QUERY = {type: "UPDATE_QUERY", data:{ query:InitialState.query }};
export const UPDATE_PAGE = {type: "UPDATE_PAGE", data:{ pageNo:InitialState.page }};
export const PASS_QUERY = {type: "PASS_QUERY", data:{ passQuery:InitialState.passQuery }};

export const reducer = (state, action) => {
    switch(action.type) {
        case "UPDATE_QUERY":
            console.log("Query Updated ===");
            return {...state , query: action.data.query};
            case "UPDATE_PAGE":
                return {...state , page: action.data.pageNo};
            case "UPDATE_PAGE_SIZE":
                return {...state , size: action.data.pageSize};
            case "PASS_QUERY":
            console.log("Query Passed ===");
            return {...state , passQuery: action.data.passQuery};
        default:
            return state;
    }
}