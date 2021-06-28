import React from "react";
import clases from "./preloader.module.css";
import preloader from "../../media/preloader.svg";

const Preloader = (props) => {
    return <div>
        {props.isFetching ? <img className={clases.preloader} src={preloader} /> : null}
    </div>
};

export default Preloader;