const UPDATE_NEW_POST_BODY = 'UPDATE_NEW_POST_BODY';
const SEND_MESSAGE = 'SEND_MESSAGE';

let initialState = {
    users: [
        {name: "Andry", id: 1},
        {name: "Kate", id: 2},
        {name: "Dima", id: 3},
        {name: "Ron", id: 4},
    ],
    messages: [
        {id: 1, messageText: "Hi"},
        {id: 2, messageText: "How are you"},
        {id: 3, messageText: "am fine and you?"},
        {id: 4, messageText: "great!"},
    ],
    newMessageBody: ''
};
//initialState нужен для первого раза, дальше будет приходить обновленный state
const dialogReducer = (state = initialState, action) => {

    switch (action.type) {
        case UPDATE_NEW_POST_BODY:
             return {
                ...state,
                newMessageBody : action.textBody
            };
        case SEND_MESSAGE:
            return {
                ...state,
                messages: [...state.messages, {id: 6, messageText: state.newMessageBody}],
                newMessageBody : '',
            };
        default:
            return state;
    }
};

export const sendMessageCreator = () => {
    return {
        type: SEND_MESSAGE
    };
};

export const updateNewPostMessageCreator = (text) => {
    return {
        type: UPDATE_NEW_POST_BODY,
        textBody: text
    };
};
export default dialogReducer;