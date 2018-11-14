import React, {PureComponent} from 'react'
import raf from 'raf'
import classnames from 'classnames'
import style from './style.module.css'

export default class extends PureComponent {
    constructor(props) {
        super(props);
        this.refList = [];
        this.heightList=[];
    }

    state = {
        moved: false,
        y: 0
    };

    handlerStart = (e) => {
        const {disabled}=this.props;
        this.startY = e.touches[0].clientY;
        this.startX = e.touches[0].clientX;
        this.prevY = 0;
        this.deltaY = this.deltaX = 0;
        this.setState({moved: true, y: 0});
    };
    handlerEnd = () => {
        const {index, onChange} = this.props;
        this.setState({moved: false, y: 0});

        const newIndex = index+(this.deltaY > 0 ? 1 : -1);
        if (Math.abs(this.deltaY) >= 50 && newIndex >= 0 && newIndex <= this.pageSize - 1) {
            onChange(newIndex);
        }
    };
    handlerMove = (e) => {
        const {disabled}=this.props;
        const {index} = this.props;
        this.deltaY = this.startY - e.touches[0].clientY;
        this.deltaX = this.startX - e.touches[0].clientX;
        const newY = this.deltaY;
        if(disabled&&newY<0&&this.refList[index].scrollTop>0){
            this.deltaY = 0;
            return;
        }
        if ((index + newY / this.heightList[index]) < 0 || (index + newY / this.heightList[index]) > this.pageSize - 1 || Math.abs(this.deltaY) < this.prevY || Math.abs(this.deltaX) > Math.abs(this.deltaY)) {
            this.deltaY = 0;
            this.setState({y: 0, moved: false});
            return;
        }
        this.setState({y: newY});
        this.prevY = Math.abs(this.deltaY);
    };

    componentDidMount() {
        const {children} = this.props;
        this.heightList = this.refList.map((el) => el.clientHeight);
        this.pageSize = React.Children.count(children);
    }

    render() {
        const {index,disabled,children} = this.props,pageHeight=window.innerHeight;
        return (
            <div className={style.page}
                 onTouchStart={this.handlerStart}
                 onTouchCancel={this.handlerEnd}
                 onTouchMove={this.handlerMove}
                 onTouchEnd={this.handlerEnd}>
                <div style={{
                    transform: `translateY(${-(this.state.moved ? this.state.y + index * pageHeight : index * pageHeight)}px)`,
                    transition: this.state.moved ? '' : `transform 400ms`
                }}>
                    {React.Children.map(children, (item,i) => {
                        return <div className={classnames("page-inner",{
                            "active":index===i,
                            "disabled":disabled
                        })} ref={(el) => this.refList.push(el)}>{item}</div>
                    })}
                </div>

            </div>
        );
    }
}
