import React from "react";
import clases from "./Users.module.css";
import axios from "axios";

const Users = (props) => {

if(props.users.length === 0) {
    axios.get('https://social-network.samuraijs.com/api/1.0/users')
        .then(response => {
            debugger;
            props.setUsers()
        })
}
    return <div>
        {
            props.users.map((el, i) =>
                <div className={clases.users} key={i}>
                    <div className={clases.blockAva}>
                        <img className={clases.blockAva_img} src={el.photoUrl} alt=""/>
                        <div>
                            {el.followed
                                ? <button className={clases.blockAva_btn} onClick={() => {
                                    props.unfollow(i)
                                }}>Unfollow</button>
                                : <button className={clases.blockAva_btn} onClick={() => {
                                    props.follow(i)
                                }}>follow</button>
                            }
                        </div>
                    </div>
                    <div className={clases.blockText}>
                        <div className={clases.nameblock}>
                            <div className={clases.name}>{el.fullName}</div>
                            <div className={clases.status}>{el.status}</div>
                        </div>
                        <div className={clases.countryblock}>
                            <div className="">{el.location.country}</div>
                            <div className="">{el.location.city}</div>
                        </div>
                    </div>
                </div>)
        }

    </div>


};

export default Users;
