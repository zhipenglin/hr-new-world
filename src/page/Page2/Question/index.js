import React,{PureComponent} from 'react'
import style from './style.module.scss'
import t0 from './t_0.jpg'
import t1 from './t_1.jpg'
import t2 from './t_2.jpg'
import s0 from './s_0.jpeg'
import s1 from './s_1.jpeg'
import s2 from './s_2.jpeg'

const questions=[
    {
        img:[t0,t1,t2],
        title:'请问：以上哪一个地标为新世界所建？',
        ans:[
            'A. 周大福金融中心','B. 工行知音大厦','C. 国博财富中心'
        ],
        key:0
    },{
        img:[s0,s1,s2],
        title:'以下哪一个是新世界logo？',
        ans:[
            <span>A</span>,'B. 工行知音大厦','C. 国博财富中心'
        ],
        key:0
    }
];

export default class extends PureComponent{
    state={
        index:0,
        open:false
    };
    handlerClick=(index)=>{
        if(questions[this.state.index].key===index){
            if(this.state.index===0){
                this.setState({index:1});
            }else{
                this.setState({open:true});
            }
        }else{
            alert('真遗憾！回答错误，请重新选择');
        }
    };
    render(){
        const question=questions[this.state.index],list=['A','B','C'];
        return (
            <div className={style.bg}>
                <div className={style.des}>完成答题获得抽奖机会</div>
                {this.state.index===0?<div>
                    <div className={style.img}>
                        {question.img.map((src)=><img src={src} key={src} alt="01"/>)}
                    </div>
                    <div className={style.title}>{question.title}</div>
                    <div className={style.ans}>
                        {question.ans.map((item,index)=>{
                            return <p onClick={this.handlerClick.bind(null,index)}>{item}</p>
                        })}
                    </div>
                </div>:<div className={style.qs}>
                    <div className={style.title}>{question.title}</div>
                    <div className={style.img}>
                        {question.img.map((src,index)=><div onClick={this.handlerClick.bind(null,index)} className={style.sb}>
                            <img src={src} key={src} alt="01" className={style.sb1}/>
                            <span className={style.sb2}>{list[index]}</span>
                        </div>)}
                    </div>
                </div>}
                {this.state.open?<a href="https://myyouxi.myysq.com.cn/shake/index/index?gid=39ea2377-b3b3-c1ce-587f-b59424b36847&game_id=39ea2385-1c04-98a8-b629-4e47941e2843&mygid=39ea2385-1c04-98a8-b629-4e47941e2843&public_id=39e88b2c-ffc8-bad0-435c-de9873830469" className={style.button}></a>:null}
            </div>
        );
    }
}
