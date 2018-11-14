import React,{PureComponent} from 'react'
import classnames from 'classnames'
import style from './style.module.scss'
const list=[1993,1994,1995,1996,2005,2006,2010,2013,2014,2015,2016,2017,2018];

export default class extends PureComponent {
    constructor(props){
        super(props);
        this.refList=[];
    }
    animate(){
        this.refList.forEach((el)=>{
            if(!el) return;
            if(el.getBoundingClientRect().top-window.innerHeight<0){
                el.classList.remove('hide');
            }else{
                el.classList.add('hide');
            }
        });
    }
    componentDidMount(){
        this.animate();
    }
    componentDidUpdate(){
        this.animate();
    }
    render(){
        const {className}=this.props;
        return (
            <div className={classnames(className,style.timeline)}>
                <div className={style.left}>
                    {list.filter((n,index)=>index%2===0).map((n)=>{
                        return <div key={n} ref={(el)=>this.refList.push(el)} className={classnames(style[`item_${n}`],'timeline-item')}></div>
                    })}
                </div>
                <div className={style.right}>
                    {list.filter((n,index)=>index%2!==0).map((n)=>{
                        return <div key={n} ref={(el)=>this.refList.push(el)} className={classnames(style[`item_${n}`],'timeline-item')}></div>
                    })}
                </div>
            </div>
        );
    }
}
