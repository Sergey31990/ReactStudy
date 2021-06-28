import React from 'react';
import clases from './Header.module.css';
import {Container, Row, Col} from "react-bootstrap";
import logo from '../../media/logo.png'

const Header = () => {
    return (
        <header className={clases.header}>
            <img className={clases.logo} src={logo}/>
        </header>
    )
}
export default Header;

