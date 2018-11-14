import React from 'react'
import TimeLine from './TimeLine'
import style from './style.module.scss'
export default ()=>{
    return (
        <div className={style.bg}>
            <div className={style.bg_0}></div>
            <div className={style.bg_1}></div>
            <div className={style.bg_2}></div>
            <div>
                <div className={style.item_0}></div>
                <div className={style.item_1}></div>
                <div className={style.item_2}></div>
                <div className={style.item_3}></div>
                <div className={style.item_4}></div>
            </div>
            <TimeLine className={style.timeline}/>
        </div>
    );
};
