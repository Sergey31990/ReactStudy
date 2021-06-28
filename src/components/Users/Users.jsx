import React from "react";
import clases from "./Users.module.css";
import Preloader from "../Preloader/Preloader";
import {NavLink} from "react-router-dom";
import {Col} from "react-bootstrap";

const defoltAva = "https://createchbd.com/wp-content/uploads/2018/12/1-150x150-150x150.png";

let Users = (props) => {

    let pageCount = Math.ceil(props.totalUsersCount / props.pageSize);
         let pages = [];
        for (let i = 1; i <= pageCount; i++) {
           pages.push(i);
       }

    return (
        <div>
            <Preloader isFetching={props.isFetching}/>
            <div>
                {pages.map((el, i) => {
                    return <span key={i} onClick={() => {
                        props.onPageChanged(el)
                    }}
                                 className={`${props.currentPage === el && clases.activePage} ${clases.paginationNumber}`}>{el}</span>
                })}
            </div>
            {props.users.map((el, i) =>
                <div className={clases.users} key={i}>
                    <Col xs={2} className={clases.blockAva}>
                        <NavLink to={'/profileInfo/' + el.id}>
                            <img className={clases.blockAva_img} src={el.photos.small != null ? el.photos.small : defoltAva} alt="defoltAva"/>
                        </NavLink>
                        <div>
                            {el.followed
                                ? <button className={clases.blockAva_btn} onClick={() => {

                                    debugger;
                                    props.unfollow(el.id)
                                }}>Unfollow</button>
                                : <button className={clases.blockAva_btn} onClick={() => {
                                    props.follow(el.id)
                                }}>follow</button>
                            }
                        </div>
                    </Col>
                    <Col xs={10} className={clases.blockText}>
                        <div className={clases.nameblock}>
                            <div className={clases.name}>{el.name}</div>
                            <div className={clases.status}>{el.status}</div>
                        </div>
                        <div className={clases.countryblock}>
                            <div className="">Country</div>
                            <div className="">City</div>
                        </div>
                    </Col>
                </div>)}
        </div>
    )
}
export default Users;


