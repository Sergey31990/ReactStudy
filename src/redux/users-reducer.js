const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET_USERS';


let initialState = {
    users: [
        // {
        //     id: 0,
        //     photoUrl: 'https://createchbd.com/wp-content/uploads/2018/12/1-150x150-150x150.png',
        //     followed: false,
        //     fullName: 'Dmitry',
        //     status: 'Im fine',
        //     location: {city: 'Minsk', country: 'Belarus'}
        // },
        // {
        //     id: 1,
        //     photoUrl: 'https://createchbd.com/wp-content/uploads/2018/12/1-150x150-150x150.png',
        //     followed: false,
        //     fullName: 'Sergey',
        //     status: 'Im fine',
        //     location: {city: 'Moscow', country: 'Russia'}
        // },
        // {
        //     id: 2,
        //     photoUrl: 'https://createchbd.com/wp-content/uploads/2018/12/1-150x150-150x150.png',
        //     followed: false,
        //     fullName: 'Alexandr',
        //     status: 'Im fine',
        //     location: {city: 'Kiev', country: 'Ukraine'}
        // },
        // {
        //     id: 3,
        //     photoUrl: 'https://createchbd.com/wp-content/uploads/2018/12/1-150x150-150x150.png',
        //     followed: false,
        //     fullName: 'David',
        //     status: 'Im fine',
        //     location: {city: 'NewYork', country: 'USA'}
        // },
    ]
}

const usersReducer = (state = initialState, action) => {

    switch (action.type) {
        case FOLLOW: {
            debugger;
            let copyState = {
                users: [...state]
            }
            copyState.users.map((el, i) => {
                debugger;
                if (el.id === action.userId) {
                    el.followed = true;
                }
            })
            return copyState.users;
        }
        case UNFOLLOW: {
            let copyState = {
                users: [...state]
            }
            copyState.users.map((el, i) => {
                if (el.id === action.userId) {
                    el.followed = false;
                }
            })
            return copyState.users;
        }
        case SET_USERS: {
            let copyState = {
                users: [...state, ...action.users]
            }
            debugger;
            return copyState.users;
        }
            // debugger;
            // return {
            //     ...state, users: [...state.users, ...action.users]
            // }
        default:
            return state;
    }
}

export const followAC = (userId) => {
    return {
        type: FOLLOW,
        userId: userId
    }
}

export const unFollowAC = (userId) => {
    return {
        type: UNFOLLOW,
        userId: userId
    }
}

export const setUsersAC = (users) => {
    return {
        type: SET_USERS,
        users: users
    }
}

export default usersReducer;
