import React from 'react'
import TimeLine from './TimeLine'
import Question from './Question'
import classnames from 'classnames'
import style from './style.module.scss'
export default ({top})=>{
    return (
        <div className={style.bg}>
            <div className={style.bg_0}></div>
            <div className={style.bg_1}></div>
            <div className={style.bg_2}></div>
            <div>
                <div className={classnames(style.item_0,'bounceInDown')}></div>
                <div className={classnames(style.item_1,'fadeIn')}></div>
                <div className={style.item_2}></div>
                <div className={style.item_3}></div>
                <div className={style.item_4}></div>
            </div>
            <TimeLine className={style.timeline} top={top}/>
            <Question />
        </div>
    );
};
