import React from "react";
import Header from "../Header/header";
import style from './kyrgyzstan.module.css'
import video from '../../img/itkr.mp4'
export default function Kyrgyzstan(){
    return(
        <div>
            <Header/>
            <div className={style.divVideo}>
                <video className={style.video} controls >
                    <source src={video} type="video/mp4"/>
                </video>
            </div>
        </div>
    )
}