import React from "react";
import style from './contacts.module.css'
export default function Contacts(){
    return(
        <div className={style.contacts}>
            <div className={style.header}>
                <div className={style.our}>
                    <h3 className={style.ourH3}>OUR</h3>
                    <div className={style.line}/>
                </div>
                <p className={style.headcont}>CONTACTS</p>
            </div>
            <div className={style.main}>
                <p className={style.p}>ADDRESS:    Business Center Russia – Cab 1802 Razakov Street 19 720040 BISHKEK – KYRGYZ REPUBLIC</p>
            </div>
        </div>
    )
}