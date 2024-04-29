import React from "react";
import style from './about.module.css'
import Header from "../Header/header";
import { useTranslation} from 'react-i18next'
import video from '../../img/aic.mp4'
function About(){
    const {t}=useTranslation()
    return(
        <div className={style.about}>
            <Header/>
            <div className={style.divVideo}>
                <video className={style.video} controls >
                    <source src={video} type="video/mp4"/>
                </video>
            </div>
            <div className={style.onas}>
                proverka
                <h3 className={style.h3}>{t("onas")}</h3>
                <p className={style.p}>{t("onasText")}</p>
            </div>
        </div>
    )
}
export default About