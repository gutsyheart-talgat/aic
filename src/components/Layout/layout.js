import React from "react";
import style from './layout.module.css'
import { NavLink,Link,Outlet } from "react-router-dom";
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
                        <Nav>
                            <NavDropdown className={`${style.link} ${style.drop}`} title={t("service")} id="basic-nav-dropdown">
                                <div className={style.divLink}><Link className={style.serLink} to="/Services/Service-1"> {t("service1")}</Link></div>
                                <div className={style.divLink}><Link className={style.serLink} to="/Services/Service-2"> {t("service2")}</Link></div> 
                                <div className={style.divLink}><Link className={style.serLink} to="/Services/Service-3"> {t("service3")}</Link></div>
                                <div className={style.divLink}><Link className={style.serLink} to="/Services/Service-4"> {t("service4")}</Link></div>
                            </NavDropdown>
                        </Nav>
                        <NavLink className={style.link} to="Contacts">{t("contact")}</NavLink>
                    </nav>
                    <div className={style.texture}></div>
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


