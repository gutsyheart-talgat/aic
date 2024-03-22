import React from "react";
import style from './contacts.module.css'
import { useTranslation } from "react-i18next";
export default function Contacts(){
    const {t,i18n}=useTranslation()
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
                <p className={style.p}>{t("text")}</p>
            </div>
        </div>
    )
}