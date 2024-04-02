import React from 'react';
import style from './vacancie.module.css'
import { useTranslation} from 'react-i18next'
const Vacancie = () => {
    const {t}=useTranslation()
    return (
        <div className={style.div}>
            <div className={style.header}>
                <div className={style.our}>
                    <h3 className={style.ourH3}>{t("our")}</h3>
                    <div className={style.line}/>
                </div>
                <p className={style.headcont}>{t("vacancie")}</p>
            </div> 
            <h3 className={style.h3}>{t("no vacancie")}</h3>
        </div>
    );
};

export default Vacancie;