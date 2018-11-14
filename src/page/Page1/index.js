import React from 'react'
import classnames from 'classnames'
import style from './style.module.scss'

export default ()=>{
    return (
        <div className={style.bg}>
            <div className={classnames(style.title,'bounceInDown')}></div>
            <div className={classnames(style.city,'fadeIn')}></div>
            <div className={classnames(style.content,'zoomIn')}></div>
            <div className={style.start}></div>
        </div>
    );
};
