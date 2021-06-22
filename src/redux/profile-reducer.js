const ADD_POST = 'ADD-POST';
const CHANGE_NEW_POST_TEXT = 'CHANGE-NEW-POST-TEXT';

let initialState = {
        post: [
            {
                ava:
                    "https://avatars.mds.yandex.net/get-pdb/1751508/5ce53352-7bf5-4b8b-801c-a4f1a7e06a0d/s1200?webp=false",
                text: "text 1",
            },
            {
                ava:
                    "https://steamcdn-a.akamaihd.net/steamcommunity/public/images/avatars/f0/f091c95d474a077ba3b5edccd3f0302bd52739e5.jpg",
                text: "text 2",
            },
            {
                ava:
                    "https://steamcdn-a.akamaihd.net/steamcommunity/public/images/avatars/28/286d76e16bc975499fcd20c4a57793c5408c1dba.jpg",
                text: "text 3",
            },
        ],
        newPost: "",
    };
//Редюсер (reducer) — это чистая функция, которая принимает предыдущее состояние и экшен
// (state и action) и возвращает следующее состояние (новую версию предыдущего).
const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_POST:
            let newPost = {
                ava:
                    "https://upload.wikimedia.org/wikipedia/commons/thumb/8/89/Portrait_Placeholder.png/360px-Portrait_Placeholder.png",
                text: state.newPost,
            };
            return {
                ...state,
                post : [...state.post, newPost],
                newPost : ''
            };
        case CHANGE_NEW_POST_TEXT:
            return {
                ...state,
                newPost : action.postMessage
            };
        default:
            return state;
    }
};
    export const addPostActionCreator = () => {
        return {
            type: ADD_POST
        };
    };

    export const changePostActionCreator = (text) => {
        return {
            type: CHANGE_NEW_POST_TEXT,
            postMessage: text
        };

    };

    export default profileReducer;