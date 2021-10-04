import styles from './NavBar.module.css'
import styled from 'styled-components';
import { NavLink } from 'react-router-dom'
import { GiHamburgerMenu } from "react-icons/gi";
import { MdClose } from "react-icons/md";
import { useState } from 'react';

export default function NavBar() {
    // const router = useRouter()
    const MenuList = require('../../db/menu.json')
    const [isShow, setIsShow] = useState(false) 

    function renderMenu() {
        return Object.keys(MenuList).map( key => {
            return (
                <div key={ key } onClick={() => setIsShow(false)}>
                    <NavLink exact to={ MenuList[key] } activeClassName={ styles.active }>{ key }</NavLink>
                </div>
            )
        })
    }

    return (
        <nav>
            <StyledHamburger onClick={() => setIsShow(!isShow)}><GiHamburgerMenu/></StyledHamburger>
            <StyledNavList>{ renderMenu() }</StyledNavList>
            <StyledDropdown className={`${isShow && "showMenu"}`}>
                <MdClose onClick={() => setIsShow(!isShow)}/>
                { renderMenu() }
            </StyledDropdown>
        </nav>
    )
}

const StyledNavList = styled.div`
    display: flex;
    align-items: center;
    gap: 25px;
    @media (max-width: 630px) {
        display: none;
    }
`;

const StyledHamburger = styled.div`
    cursor: pointer;
    @media (min-width: 630px) {
        display: none;
    }
`;

const StyledDropdown = styled.div`
    position: absolute;
    top: 80px;
    right: 10px;
    z-index: 10;
    height: 0%;
    text-align: center;
    background-color: white;
    border-radius: 3px;
    transition: all 1s ease;
    border: 0px solid grey;
    overflow: hidden;
    & > svg {
        width: 100%;
        height: 42px;
        color: red;
        cursor: pointer
    }
    & > * {
        padding: 10px;
        border-bottom: 1px solid grey;
    }
    & > div:hover {
        color: rgb(84, 105, 190);
    }
    & > div:last-child {
        padding: 10px;
        border-bottom: none;
    }
    &.showMenu {
        height: 360px;
        border: 1px solid grey;
    }
`;
