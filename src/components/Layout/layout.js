import React from "react";
import style from './layout.module.css'
import { NavLink,Outlet } from "react-router-dom";
import Header from "../Header/header";
import { useTranslation } from "react-i18next";
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
                        <NavLink to='/' className={style.link}>{t("about")}</NavLink>
                        <NavLink to='Kyrgyzstan' className={style.link}>{t("Kyrgyzstan")}</NavLink>
                        <NavLink to='Services' className={style.link}>{t("service")}</NavLink>
                        <NavLink to='Contacts' className={style.link}>{t("contact")}</NavLink>
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
export default Layout