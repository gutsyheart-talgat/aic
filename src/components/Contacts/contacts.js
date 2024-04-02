import React from "react";
import style from './contacts.module.css'
import { useTranslation } from "react-i18next";
export default function Contacts(){
    const {t}=useTranslation()
    return(
        <div className={style.contacts}>
            <div className={style.header}>
                <div className={style.our}>
                    <h3 className={style.ourH3}>{t("our")}</h3>
                    <div className={style.line}/>
                </div>
                <p className={style.headcont}>{t("contact")}</p>
            </div>
            <div className={style.main}>
                <p className={style.p}>{t("adress")}</p>
                <a className={style.a} href="mailto:tdzhaylikeev@gmail.com">{t("gmail")}</a>
            </div>
        </div>
    )
}