import React from "react";
import style from './layout.module.css'
import { Link } from "react-router-dom";
import Header from "../Header/header";
function Layout({children}){
    return(
        <div className={style.back}>
            <div className={style.container}>
                <div>
                    <nav className={style.nav}>
                        <Link to='/' className={style.link}>About AIC</Link>
                        <Link to='Kyrgyzstan' className={style.link}>Kyrgyz Republic</Link>
                        <Link to='Services' className={style.link}>Services</Link>
                        <Link to='Contacts' className={style.link}>Contacts</Link>
                    </nav>
                    <Header/>
                    <div>{children}</div>
                </div>
            </div>
        </div>
    )
}
export default Layout