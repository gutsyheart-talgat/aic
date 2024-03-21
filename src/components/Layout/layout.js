import React from "react";
import style from './layout.module.css'
import { NavLink,Outlet } from "react-router-dom";
import Header from "../Header/header";
function Layout(){
    return(
        <div className={style.back}>
            <div className={style.container}>
                <div>
                    <nav className={style.nav}>
                        <NavLink to='/' className={style.link}>About AIC</NavLink>
                        <NavLink to='Kyrgyzstan' className={style.link}>Kyrgyz Republic</NavLink>
                        <NavLink to='Services' className={style.link}>Services</NavLink>
                        <NavLink to='Contacts' className={style.link}>Contacts</NavLink>
                    </nav>
                    <Header/>
                    <Outlet/>
                </div>
            </div>
        </div>
    )
}
export default Layout