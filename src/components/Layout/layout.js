import React from "react";
import style from './layout.module.css'
import { NavLink,Outlet } from "react-router-dom";
import Header from "../Header/header";
import { useTranslation } from "react-i18next";
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Nav,Navbar } from "react-bootstrap";
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
                            <NavDropdown.Item className={style.dropLink} href="Service-1">{t("service1")}</NavDropdown.Item>
                            <NavLink className={style.dropLink} to="Service-1">{t("service1")}</NavLink>
                            <NavDropdown.Item className={style.dropLink} href="Service-2">
                                {t("service2")}
                            </NavDropdown.Item>
                            <NavDropdown.Item className={style.dropLink} href="Service-3">{t("service3")}</NavDropdown.Item>
                            <NavDropdown.Item className={style.dropLink} href="Service-4">
                                {t("service4")}
                            </NavDropdown.Item>
                        </NavDropdown>
                        <NavLink className={style.link} to="Contacts">{t("contact")}</NavLink>
                    </nav>
                    <div className={style.texture}></div>
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


