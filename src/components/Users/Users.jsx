import React from "react";
import clases from "./Users.module.css";
import * as axios from "axios";

// const Users = (props) => {
//     let getUsers = () => {
//         if (props.users.length === 0) {
//             axios.get('https://social-network.samuraijs.com/api/1.0/users')
//                 .then(response => {
//                     console.log(response.data.items)
//                     debugger;
//                     props.setUsers(response.data.items)
//                 })
//         }
//     }
//
//     return <div>
//         <button onClick={getUsers}>Get Users</button>
//         {
//             props.users.map((el, i) =>
//                 <div className={clases.users} key={i}>
//                     <div className={clases.blockAva}>
//                         <img className={clases.blockAva_img} src={el.photoUrl} alt=""/>
//                         <div>
//                             {el.followed
//                                 ? <button className={clases.blockAva_btn} onClick={() => {
//                                     props.unfollow(i)
//                                 }}>Unfollow</button>
//                                 : <button className={clases.blockAva_btn} onClick={() => {
//                                     props.follow(i)
//                                 }}>follow</button>
//                             }
//                         </div>
//                     </div>
//                     <div className={clases.blockText}>
//                         <div className={clases.nameblock}>
//                             <div className={clases.name}>{el.name}</div>
//                             <div className={clases.status}>{el.status}</div>
//                         </div>
//                         <div className={clases.countryblock}>
//                             <div className="">{'el.location.country'}</div>
//                             <div className="">{'el.location.city'}</div>
//                         </div>
//                     </div>
//                 </div>)
//         }
//
//     </div>
//
//
// };

class Users extends React.Component {
    constructor(props) {
        super(props);
        axios.get('https://social-network.samuraijs.com/api/1.0/users')
            .then(response => {
                this.props.setUsers(response.data.items)
            })
    }
    render() {
        debugger;
        return <div>
            {this.props.users.map((el, i) =>
                <div className={clases.users} key={i}>
                    <div className={clases.blockAva}>
                        <img className={clases.blockAva_img} src={el.photoUrl} alt=""/>
                        <div>
                            {el.followed
                                ? <button className={clases.blockAva_btn} onClick={() => {
                                    this.props.unfollow(el.id)
                                }}>Unfollow</button>
                                : <button className={clases.blockAva_btn} onClick={() => {
                                    this.props.follow(el.id)
                                }}>follow</button>
                            }
                        </div>
                    </div>
                    <div className={clases.blockText}>
                        <div className={clases.nameblock}>
                            <div className={clases.name}>{el.name}</div>
                            <div className={clases.status}>{el.status}</div>
                        </div>
                        <div className={clases.countryblock}>
                            <div className="">Country</div>
                            <div className="">City</div>
                        </div>
                    </div>
                </div>)}
        </div>
    }
}


export default Users;
