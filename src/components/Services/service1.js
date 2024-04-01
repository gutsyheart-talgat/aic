import React from 'react';
import style from './service1.module.css'
import { useTranslation} from 'react-i18next'
const Service1 = () => {
    const {t}=useTranslation()
    return (
        <div className={style.div}>
            <div className={style.header}>
                <div className={style.our}>
                    <h3 className={style.ourH3}>{t("our")}</h3>
                    <div className={style.line}/>
                </div>
                <p className={style.headcont}>{t("service")}</p>
            </div> 
            <h3 className={style.h3}>{t("service1")}</h3>
            <p className={style.p}>
                {t("service1text")}
            </p>
        </div>
    );
};

export default Service1;