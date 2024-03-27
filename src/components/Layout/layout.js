import React from "react";
import style from './layout.module.css'
import { NavLink,Outlet } from "react-router-dom";
import Header from "../Header/header";
import { useTranslation } from "react-i18next";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
function Layout(){
    const {t,i18n}=useTranslation()
    const changeLanguage = (lang)=> {
        i18n.changeLanguage(lang)
    }
    return(
        
        <div className={style.back}>
            <div className={style.container}>
                <div>
                    <nav className={style.nav}>
                        <NavLink className={style.link} to="/">{t("about")}</NavLink>
                        <NavLink className={style.link} to="Kyrgyzstan">{t("Kyrgyzstan")}</NavLink>
                        <NavDropdown className={`${style.link} ${style.drop}`} title={t("service")} id="basic-nav-dropdown">
                            <NavDropdown.Item className={style.dropLink} href="#action/3.1">action</NavDropdown.Item>
                            <NavDropdown.Item className={style.dropLink} href="#action/3.2">
                                Another action
                            </NavDropdown.Item>
                            <NavDropdown.Item className={style.dropLink} href="#action/3.3">Something</NavDropdown.Item>
                            <NavDropdown.Item className={style.dropLink} href="#action/3.4">
                                Separated link
                            </NavDropdown.Item>
                        </NavDropdown>
                        <NavLink className={style.link} to="Contacts">{t("contact")}</NavLink>
                    </nav>
                    <Header/>
                    <div className={style.translate}>
                        <button className={style.btns} onClick={()=> changeLanguage('ru')}>RU</button>
                        <div className={style.line}/>
                        <button className={style.btns} onClick={()=> changeLanguage('en')}>EN</button>
                    </div>
                    <Outlet/>
                </div>
            </div>
        </div>
    )
}
export default Layout;


