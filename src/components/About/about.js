import React from "react";
import style from './about.module.css'
import Layout from "../Layout/layout";
import video from '../../img/video.mp4'

function About(){
    return(
        <Layout>
            <h1 className={style.h1}>about</h1>
            <video width="750" height="500" controls>
                <source src={video} type="video/mp4"/>
            </video>
            
        </Layout>
    )
}
export default About