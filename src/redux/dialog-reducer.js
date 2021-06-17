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

const dialogReducer = (state = initialState, action) => {
    switch (action.type) {
        case UPDATE_NEW_POST_BODY:
            state.newMessageBody = action.textBody;
            return state;
        case SEND_MESSAGE:
            state.newMessageBody = '';
            state.messages.push({id: 6, messageText: action.newText});
            return state;
        default:
            return state;
    }
};

export const sendMessageCreator = (text) => {
    return {
        type: SEND_MESSAGE,
        newText: text
    };
};

export const updateNewPostMessageCreator = (text) => {
    return {
        type: UPDATE_NEW_POST_BODY,
        textBody: text
    };
};
export default dialogReducer;