import React from 'react';
import style from './service1.module.css'
import { useTranslation} from 'react-i18next'
const Service1 = () => {
    const {t}=useTranslation()
    return (
        <div className={style.div}> 
            <h3>{t("service1")}</h3>
            <p>
                {t("service1text")}
            </p>
        </div>
    );
};

export default Service1;