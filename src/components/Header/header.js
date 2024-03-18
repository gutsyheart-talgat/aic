import React from "react";
import style from './header.module.css'
export default function Header(){
    return(
        <div className={style.header}>
            <div className={style.top}>
                <div className={style.left}/>
                <h2 className={style.topH2}>ASIA INVESTMENT</h2>
                <div className={style.right}/>
            </div>
            <h2 className={style.bottomH2}>CONSULTING</h2>
        </div>
    )
}